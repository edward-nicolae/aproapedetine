import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { EventSection } from "@/components/event-section";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import GallerySection from "@/components/gallery";
import { eventTypes, faqs, processSteps, galleryCategories } from "@/lib/content";

export default function Home() {
  return (
    <main className="page-shell">
      <div className="hero-brandline" aria-label="Brand">
        <div className="hero-brandline__logo-wrap">
          <Image src="/images/sigla.jpg" alt="Aproape de Tine" fill className="hero-brandline__logo" sizes="96px" />
        </div>
        <span className="hero-brandline__text">Aproape de Tine</span>
      </div>

      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">Aproape de Tine</p>
          <h1>Fotografie de eveniment care rămâne aproape de emoție.</h1>
          <p className="hero-copy__lead">
            Nu pozez evenimente. Simt momentele care merită păstrate și le transform în imagini care rămân cu tine.
            Prezență discretă, ochi atent, ritm natural.
          </p>

          <figure className="hero-inline-photo">
            <Image
              src="/images/gallery/featured/477347467727667.jpg"
              alt="Cadru reprezentativ Aproape de Tine"
              fill
              className="hero-inline-photo__image"
              sizes="(max-width: 960px) 100vw, 680px"
              priority
            />
          </figure>

          <div className="hero-actions">
            <a className="button button--primary" href="#galerie">
              Explorează portofoliul complet
            </a>
            <a className="button button--ghost" href="#contact">
              Verifică disponibilitatea
            </a>
          </div>
        </div>
      </section>

      {/* GALERIA - SECTIUNE PRINCIPALA */}
      <GallerySection categories={galleryCategories} />

      <section className="section intro-band">
        <p>
          Vreau să simți frigul, căldura, șoapta, bucuria din fiecare fotografie.
          Dacă te uiți și simți ceva &mdash; am făcut ce trebuia. Dacă nu &mdash; trebuie să muncesc mai mult.
        </p>
      </section>

      <section className="section about-section" id="despre">
        <div className="section-heading">
          <p className="eyebrow">Despre mine</p>
          <h2>Fotografiez pentru că îmi place. Mult. Enorm.</h2>
        </div>
        <div className="about-copy">
          <p>
            Eu sunt Edward. Fotografiez de când țin minte. Nu pentru că e o meserie &mdash; ci pentru că mă relaxează,
            mă ajută să înțeleg mai bine oamenii și lumea din jur. La un moment dat am realizat că pot transforma
            asta în ceva util și pentru tine.
          </p>
          <p>
            Cred că oricine poate arăta bine într-o fotografie. Caut unghiul care te avantajează, aștept momentul
            care spune ceva și mă feresc de cadre fabricate. Ceea ce livrezi tu familiei, prietenilor, ție însuți
            &mdash; trebuie să miroasă, să foșnească, să râdă sau să plângă, după caz.
          </p>
          <p>
            Ai un eveniment important? Spune-mi data și în câteva cuvinte ce îți dorești. Îți răspund repede.
            Prețurile sunt accesibile &mdash; mult mai mici decât te-ai aștepta pentru ce primești.
          </p>
          <p>
            Poți folosi formularul de mai jos. Te aștept.
          </p>
        </div>
      </section>

      <section className="section" id="servicii">
        <div className="section-heading">
          <p className="eyebrow">Servicii</p>
          <h2>Trei tipuri de evenimente, același standard de atenție.</h2>
        </div>
        <div className="event-grid">
          {eventTypes.map((eventType) => (
            <EventSection key={eventType.id} {...eventType} />
          ))}
        </div>
      </section>

      <section className="section process-grid" id="proces">
        <div className="section-heading">
          <p className="eyebrow">Proces</p>
          <h2>De la briefing la galerie finală.</h2>
        </div>
        <div className="process-cards">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Pricing />
      <Testimonials />

      <section className="section faq-grid" id="faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Lucruri pe care vrei să le clarifici rapid.</h2>
        </div>
        <div className="faq-items">
          {faqs.map((entry) => (
            <article className="faq-item" key={entry.question}>
              <h3>{entry.question}</h3>
              <p>{entry.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactForm />
    </main>
  );
}