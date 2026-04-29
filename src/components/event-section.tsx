type EventSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: readonly string[];
  id: string;
};

export function EventSection({ eyebrow, title, description, highlights, id }: EventSectionProps) {
  return (
    <article className="event-card" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}