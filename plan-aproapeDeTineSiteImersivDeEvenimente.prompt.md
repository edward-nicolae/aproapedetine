## Plan: Aproape de Tine — Site Imersiv de Evenimente

Recomand construirea unui site cinematic-interactiv bazat pe conceptul „Albume Orbitale": utilizatorul explorează tipurile de evenimente printr-un spațiu vizual 3D fluid (nunți, botezuri, petreceri copii), apoi intră în galerii narative cu accent pe emoție, nu pe volum. Diferențiatorul major este experiența de explorare premium, dar implementată cu progressive enhancement pentru performanță și accesibilitate pe mobil.

**Steps**
1. Faza 1 — Concept și direcție artistică (blochează restul)
2. Definire direcție vizuală: atmosferă warm-filmic, texturi fine, lumină naturală, ritm lent-cinematic.
3. Definire concept final: „Albume Orbitale" (cards 3D pe axă circulară), cu fallback 2D swipe pe mobil.
4. Stabilire voice & copy: apropiere umană, empatie, documentare autentică, fără ton comercial agresiv.
5. Validare rapidă cu 5 utilizatori țintă (cuplu tânăr, familie cu copil mic).
6. Faza 2 — Arhitectură informațională și funnel de conversie (depinde de Faza 1)
7. Structură site: Hero imersiv, 3 secțiuni principale servicii (nunți/botez/copii), pachete, testimoniale, proces, contact.
8. Definire traseu conversie: Explorează portofoliul → Vezi pachete → Verifică disponibilitatea → Trimite cerere.
9. Creare formulare diferite pe tip de eveniment (prefill inteligent: dată, locație, nr. invitați, preferințe).
10. Design CTA stratificat: soft CTA în galerii, medium CTA în pachete, hard CTA în contact.
11. Faza 3 — UX/UI detaliat și sistem vizual (depinde de Faza 2; în paralel cu începutul Fazei 4)
12. Design system: culori, tipografie expresivă, grilă, spacing, componente reusable.
13. Prototip high-fidelity pentru desktop + mobil, inclusiv microinteracțiuni.
14. Definire animații cu rol funcțional: intrare graduală, focus contextual, tranziții între secțiuni.
15. Reguli de lizibilitate pe fundal fotografic: overlay-uri adaptive, contrast minim WCAG.
16. Faza 4 — Implementare tehnică MVP (depinde de Faza 2; parțial paralel cu Faza 3)
17. Stack: Next.js + React Three Fiber + Framer Motion + Tailwind (sau CSS tokens dedicate).
18. Implementare scenă hero: cards 3D orbitale, interacțiune scroll/drag, fallback mobil fără pierdere de conținut.
19. Implementare galerii narative pe fiecare serviciu: 15-20 imagini curate/serviciu, încărcare progresivă.
20. Implementare secțiuni de business: pachete, FAQ, proces de lucru, contact.
21. Faza 5 — Conținut editorial + selecție portofoliu (depinde de Faza 3 și Faza 4)
22. Curatoriere imagini pe poveste, nu pe repetiție (introducere, climax, detaliu, final).
23. Scriere conținut orientat emoțional-practic pentru fiecare serviciu.
24. Testimoniale cu context (tip eveniment, oraș, rezultat livrat), nu doar citate generale.
25. Definire pagină About cu diferențiator clar: „aproape de tine" = prezență discretă, timing, empatie.
26. Faza 6 — Performanță, accesibilitate și SEO (depinde de Faza 4; în paralel cu finalul Fazei 5)
27. Optimizare imagini: responsive sizes, WebP/AVIF, preloading selectiv, lazy-load pentru rest.
28. Audit Lighthouse: Performance, Accessibility, Best Practices, SEO cu țintă minim 90.
29. Implementare prefers-reduced-motion și navigare integrală din tastatură.
30. SEO local și comercial: metadata, structured data, pagini dedicate servicii + orașe relevante.
31. Faza 7 — Validare conversie și lansare (depinde de toate fazele)
32. Teste end-to-end funnel: hero → galerie → pachete → formular trimis.
33. Setup analytics: evenimente pe CTA, scroll depth, abandon formular, click-to-call.
34. Soft launch cu feedback controlat, apoi lansare publică.
35. Iterație post-lansare la 2-4 săptămâni pe baza datelor reale.

**Relevant files**
- D:/Proiecte/aproapedetine (workspace actual gol la acest moment) — va necesita inițializare proiect frontend.
- D:/Proiecte/aproapedetine/package.json — configurare stack, scripts build/test/lint.
- D:/Proiecte/aproapedetine/src/app/page.tsx — structură pagină principală și funnel.
- D:/Proiecte/aproapedetine/src/components/hero-orbit.tsx — experiență vizuală principală 3D/fallback.
- D:/Proiecte/aproapedetine/src/components/event-section.tsx — secțiuni nunți/botez/copii.
- D:/Proiecte/aproapedetine/src/components/pricing.tsx — pachete și diferențiatori.
- D:/Proiecte/aproapedetine/src/components/testimonials.tsx — social proof contextual.
- D:/Proiecte/aproapedetine/src/components/contact-form.tsx — cerere ofertă cu prefill pe tip eveniment.
- D:/Proiecte/aproapedetine/src/lib/content.ts — copy, servicii, testimoniale, FAQ.
- D:/Proiecte/aproapedetine/public/images/* — selecție imagini optimizate pentru web.

**Verification**
1. Validare UX: minim 5 utilizatori înțeleg în sub 10 secunde oferta principală și găsesc formularul.
2. Validare performanță: LCP < 2.5s pe mobil mediu, CLS < 0.1, interactivitate fluidă în hero.
3. Validare accesibilitate: navigare tastatură completă, contrast conform, motion-reduction funcțional.
4. Validare conversie: formular trimis cu succes, email notificare recepționată, evenimente analytics colectate.
5. Validare business: conținut diferențiază clar nunți/botez/copii și explică pachetele fără ambiguități.

**Decisions**
- Inclus: site one-page premium cu secțiuni dedicate celor 3 servicii principale, accent pe impact vizual și conversie.
- Inclus: experiență interactivă neobișnuită, dar cu fallback robust pe mobil/dispozitive slabe.
- Exclus momentan: configurator avansat de preț în timp real, portal client, e-commerce printuri.
- Exclus momentan: platformă multilingvă; se recomandă fază separată după lansare.

**Further Considerations**
1. Direcție artistică principală: Option A warm-cinematic (recomandat), Option B editorial high-contrast, Option C playful-colorful.
2. Ton de brand: Option A emoțional-poetic (recomandat), Option B premium-minimal, Option C friendly-familial.
3. Nivel interactivitate hero: Option A 3D mediu cu focus pe stabilitate (recomandat), Option B 3D intens, Option C 2D avansat ultra-rapid.
