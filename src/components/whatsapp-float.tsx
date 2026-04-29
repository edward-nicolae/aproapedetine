export function WhatsAppFloat() {
  const phone = "40743065282";
  const text = encodeURIComponent("Salut, Edward! Am văzut site-ul Aproape de Tine și aș vrea să discutăm despre evenimentul meu.");
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactează pe WhatsApp"
      title="Scrie pe WhatsApp"
    >
      <span className="whatsapp-float__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M19.11 4.93A9.94 9.94 0 0 0 12.03 2C6.53 2 2.05 6.47 2.05 11.98c0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.9 9.9 0 0 0 4.87 1.25h.01c5.5 0 9.98-4.48 9.98-9.98 0-2.67-1.04-5.18-2.91-7.01zm-7.07 15.3h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.06.8.82-2.98-.2-.31a8.3 8.3 0 0 1-1.27-4.44c0-4.59 3.73-8.32 8.32-8.32a8.27 8.27 0 0 1 5.89 2.44 8.26 8.26 0 0 1 2.43 5.88c0 4.59-3.73 8.32-8.44 8.25zm4.56-6.22c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.96-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.2-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.2-.48-.41-.41-.57-.42h-.48c-.17 0-.43.06-.66.31s-.86.84-.86 2.04.88 2.36 1 2.52c.12.17 1.72 2.62 4.17 3.67.58.25 1.04.4 1.4.5.59.19 1.14.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.17-.48-.29z"
          />
        </svg>
      </span>
      <span className="whatsapp-float__label">WhatsApp</span>
    </a>
  );
}
