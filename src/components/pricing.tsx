import { pricingTiers } from "@/lib/content";

export function Pricing() {
  return (
    <section className="pricing section" id="pachete">
      <div className="section-heading">
        <p className="eyebrow">Pachete</p>
        <h2>Servicii foto 2026, clare și adaptabile.</h2>
        <p>
          Plecăm de la pachetul standard și configurăm opționalele în funcție de eveniment, ritm și livrabilele de care aveți nevoie.
        </p>
      </div>
      <div className="pricing-grid">
        {pricingTiers.map((tier) => (
          <article className="pricing-card" key={tier.name}>
            <div>
              <h3>{tier.name}</h3>
              <p className="price">{tier.price}</p>
            </div>
            <p>{tier.description}</p>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}