"use client";

import { FormEvent, useState } from "react";

const options = ["Nuntă", "Botez", "Petrecere copii"];

export function ContactForm() {
  const [selectedEvent, setSelectedEvent] = useState(options[0]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      eventType: String(formData.get("eventType") ?? "").trim(),
      date: String(formData.get("date") ?? "").trim(),
      location: String(formData.get("location") ?? "").trim(),
      guests: String(formData.get("guests") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim()
    };

    setStatus("loading");
    setFeedback("Trimitem cererea...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFeedback("Mesaj trimis. Revin în cel mai scurt timp.");
      form.reset();
      setSelectedEvent(options[0]);
    } catch {
      setStatus("error");
      setFeedback("Nu am putut trimite acum. Încearcă din nou în câteva minute.");
    }
  }

  return (
    <section className="contact-card" id="contact">
      <div>
        <p className="eyebrow">Disponibilitate</p>
        <h2>Trimite cererea în câteva minute.</h2>
        <p>
          Completează informațiile esențiale și folosim contextul ca să revenim rapid cu disponibilitate și pachet recomandat.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nume
          <input type="text" name="name" placeholder="Numele tău" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="nume@email.com" required />
        </label>
        <label>
          Telefon
          <input type="tel" name="phone" placeholder="07xx xxx xxx" />
        </label>
        <label>
          Tip eveniment
          <select
            name="eventType"
            value={selectedEvent}
            onChange={(event) => setSelectedEvent(event.target.value)}
            required
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Data evenimentului
          <input type="date" name="date" />
        </label>
        <label>
          Oraș / locație
          <input type="text" name="location" placeholder="București, Ilfov, Brașov..." />
        </label>
        <label>
          Număr invitați
          <input type="number" name="guests" min="1" placeholder="80" />
        </label>
        <label className="contact-form__message">
          Detalii utile
          <textarea
            name="message"
            rows={5}
            defaultValue={`Mă interesează un pachet pentru ${selectedEvent.toLowerCase()} și vreau să discutăm stilul vizual.`}
          />
        </label>
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Trimitem..." : "Solicită oferta"}
        </button>
        {feedback ? (
          <p className={`contact-form__status contact-form__status--${status}`} aria-live="polite">
            {feedback}
          </p>
        ) : null}
      </form>
    </section>
  );
}