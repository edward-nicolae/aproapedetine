import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Aproape de Tine | Fotografie de eveniment",
  description:
    "Site de prezentare pentru fotografie de eveniment cu accent pe nunti, botezuri si petreceri pentru copii."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}