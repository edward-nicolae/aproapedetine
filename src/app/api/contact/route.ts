import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  date?: string;
  location?: string;
  guests?: string;
  message?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const data = {
      name: clean(body.name),
      email: clean(body.email),
      phone: clean(body.phone),
      eventType: clean(body.eventType),
      date: clean(body.date),
      location: clean(body.location),
      guests: clean(body.guests),
      message: clean(body.message)
    };

    if (!data.name || !data.email || !data.eventType || !data.message) {
      return NextResponse.json({ error: "Date obligatorii lipsă." }, { status: 400 });
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json({ error: "Email invalid." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.MAIL_TO ?? "edward.nicolae@gmail.com";
    const from = process.env.MAIL_FROM ?? `Aproape de Tine <${user ?? "no-reply@aproapedetine.ro"}>`;

    if (!host || !port || !user || !pass) {
      return NextResponse.json({ error: "Configurație email incompletă pe server." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    const textBody = [
      "Cerere nouă din formularul Aproape de Tine",
      "",
      `Nume: ${data.name}`,
      `Email: ${data.email}`,
      `Telefon: ${data.phone || "-"}`,
      `Tip eveniment: ${data.eventType}`,
      `Data: ${data.date || "-"}`,
      `Locație: ${data.location || "-"}`,
      `Număr invitați: ${data.guests || "-"}`,
      "",
      "Detalii:",
      data.message
    ].join("\n");

    const htmlBody = `
      <h2>Cerere nouă din formularul Aproape de Tine</h2>
      <p><strong>Nume:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone || "-"}</p>
      <p><strong>Tip eveniment:</strong> ${data.eventType}</p>
      <p><strong>Data:</strong> ${data.date || "-"}</p>
      <p><strong>Locație:</strong> ${data.location || "-"}</p>
      <p><strong>Număr invitați:</strong> ${data.guests || "-"}</p>
      <p><strong>Detalii:</strong></p>
      <p>${data.message.replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject: `Cerere nouă - ${data.eventType}`,
      text: textBody,
      html: htmlBody
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Eroare la trimiterea mesajului." }, { status: 500 });
  }
}
