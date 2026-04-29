import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section" id="testimoniale">
      <div className="section-heading">
        <p className="eyebrow">Testimoniale</p>
        <h2>Confirmare prin context, nu prin slogan.</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((entry) => (
          <blockquote className="testimonial-card" key={entry.author}>
            <p>“{entry.quote}”</p>
            <footer>
              <strong>{entry.author}</strong>
              <span>{entry.context}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}