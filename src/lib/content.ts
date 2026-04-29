export const eventTypes = [
  {
    id: "nunti",
    eyebrow: "Nunți",
    title: "Pachet Standard 2026, adaptat evenimentului tău.",
    description:
      "Acoperim cununia civilă, cununia religioasă, ședința foto din ziua nunții și petrecerea, cu ritm natural și prezență discretă.",
    highlights: [
      "cununie civilă (în aceeași zi)",
      "cununie religioasă + petrecere (acoperire integrală)",
      "livrare online: rezoluție maximă + rezoluție social media"
    ],
    accent: "from-amber-200/60 via-rose-100/10 to-transparent"
  },
  {
    id: "botezuri",
    eyebrow: "Botezuri",
    title: "Intimitate, familie și detalii care rămân.",
    description:
      "Un cadru discret pentru emoția familiei, cu accent pe lumina naturală, expresii reale și atmosfera zilei.",
    highlights: ["prezență discretă", "ritual și familie", "galerie narativă"],
    accent: "from-sky-200/60 via-white/10 to-transparent"
  },
  {
    id: "copii",
    eyebrow: "Petreceri copii",
    title: "Energie bună, culori vii, amintiri clare.",
    description:
      "Mișcare, spontaneitate și cadre pline de joc, gândite să arate distracția fără să piardă contextul evenimentului.",
    highlights: ["acțiune fluidă", "culoare și joc", "selecție curată"],
    accent: "from-lime-200/60 via-yellow-100/10 to-transparent"
  }
] as const;

export const processSteps = [
  {
    title: "Explorăm contextul",
    description: "Discutăm tipul evenimentului, ritmul zilei și așteptările ca să setăm clar direcția."
  },
  {
    title: "Documentăm natural",
    description: "Lucrăm discret, urmărind oamenii și momentele autentice, nu cadre fabricate în exces."
  },
  {
    title: "Livrăm povestea",
    description: "Selectăm și ordonăm materialul astfel încât galeria finală să aibă ritm, sens și emoție." 
  }
] as const;

export const pricingTiers = [
  {
    name: "Foto Standard 2026",
    price: "ofertă personalizată",
    description:
      "Baza recomandată pentru nunți în București și împrejurimi, construită pe acoperire completă și livrare digitală modernă.",
    features: [
      "cununie civilă, cununie religioasă, ședință foto în ziua nunții",
      "petrecere cu acoperire integrală",
      "editare atentă pentru rezultate estetice coerente",
      "livrare online: rezoluție maximă + variante optimizate pentru social media"
    ]
  },
  {
    name: "Opționale",
    price: "la cerere",
    description: "Adăugăm doar ce are sens pentru voi, fără costuri inutile.",
    features: [
      "album foto print",
      "cununie civilă în altă zi față de nuntă",
      "fotografii acasă (mire, mireasă, nași)",
      "selecție highlight pentru partajare rapidă"
    ]
  }
] as const;

export const testimonials = [
  {
    quote:
      "Ne-am regăsit perfect în imagini. Totul pare sincer, calm și foarte aproape de cum am trăit ziua.",
    author: "Andreea și Victor",
    context: "nuntă, București"
  },
  {
    quote:
      "A surprins emoția familiei fără să fie intruziv. Albumul are exact ritmul potrivit.",
    author: "Ioana M.",
    context: "botez, Ploiești"
  },
  {
    quote:
      "Cadre pline de energie, dar curate și bine alese. Copilul nostru apare exact așa cum îl știm.",
    author: "Familia Radu",
    context: "petrecere copii, Brașov"
  }
] as const;

export const faqs = [
  {
    question: "Lucrați și în afara orașului?",
    answer: "Da. Stabilim din start logistica și includem costurile transparent în oferta finală."
  },
  {
    question: "Cum trimitem cererea?",
    answer: "Prin formularul de mai jos, cu data, locația și tipul evenimentului, apoi revenim rapid cu disponibilitatea."
  },
  {
    question: "Cât durează livrarea?",
    answer: "În funcție de pachet, livrarea standard este între 7 și 21 de zile calendaristice."
  },
  {
    question: "Cum livrați fotografiile în 2026?",
    answer:
      "Livrarea este online, în două formate: fișiere la rezoluție maximă pentru arhivare/print și fișiere optimizate pentru social media."
  }
] as const;

export const galleryCategories = [
  {
    id: "nunti",
    label: "Nunți",
    description: "Documente cinematice ale zilei celei mai importante",
    color: "bg-gradient-to-r from-amber-500 to-rose-500"
  },
  {
    id: "petreceri",
    label: "Petreceri",
    description: "Energie, culoare și vitalitate",
    color: "bg-gradient-to-r from-pink-500 to-orange-500"
  },
  {
    id: "sedinte-seara",
    label: "Ședințe Seară",
    description: "Magie a luminii naturale în crepuscul",
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    id: "bebelusi-copii",
    label: "Bebeluși & Copii",
    description: "Momente de nevinovăție și bucurie",
    color: "bg-gradient-to-r from-yellow-500 to-orange-400"
  },
  {
    id: "cununia-religiosa",
    label: "Cununia Religioasă",
    description: "Ritualuri sacre pline de empatie",
    color: "bg-gradient-to-r from-indigo-500 to-purple-500"
  },
  {
    id: "sedinte-foto",
    label: "Ședințe Foto",
    description: "Portrete cu suflet și atmosferă",
    color: "bg-gradient-to-r from-teal-500 to-cyan-500"
  },
  {
    id: "detalii",
    label: "Detalii Artistice",
    description: "Microuniversuri de frumusețe și textură",
    color: "bg-gradient-to-r from-rose-500 to-amber-500"
  },
  {
    id: "featured",
    label: "Featured",
    description: "Selecta din selectă",
    color: "bg-gradient-to-r from-slate-600 to-slate-800"
  }
] as const;