"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    phone: "407-840-1428",
    email: "willycleaning123@gmail.com",
    serviceArea: "Winter Park, Sanford & Surrounding",
    contact: "Contact",

    // Hero
    heroTitle: "Premium Cleaning With a Personal Touch",
    heroSubtitle: "A cleaner home and a friendlier experience. That is Willy.",
    heroTagline: "Professional cleaning with a smile you can trust.",
    serviceAreas: "Serving Winter Park, Sanford, and surrounding areas",
    requestQuote: "Request a Quote",
    trustBadge: "Licensed & Insured • Local & Trusted",

    // Introduction
    whenWillyArrives: "When Willy Arrives, You Feel It",
    introText:
      "The smile, the warmth, and the upbeat energy. He is the kind of person who makes cleaning feel easy because he genuinely enjoys helping people. With years of experience and a reputation for being dependable and positive, Willy brings both professionalism and heart to every home he cleans.",
    servicesOffered:
      "Whether you need a standard clean, a deep clean, or help getting a place ready for move-in or move-out, Willy shows up prepared, focused, and ready to make your space shine.",
    friendlyReliable: "Friendly. Reliable. Always happy to help.",
    thatIsWilly: "That is Willy Premium Cleaning Services.",

    // Services
    servicesTitle: "Cleaning Services",
    servicesIntro:
      "Willy Premium Cleaning Services offers reliable, high-quality cleaning for homes of all sizes. Every service is done with care, attention to detail, and a positive attitude you can feel the moment Willy arrives.",
    standardCleaning: "Standard Cleaning",
    standardDesc:
      "Perfect for regular upkeep and maintaining a clean, comfortable home.",
    dustingWiping: "Dusting and wiping surfaces",
    vacuumingMopping: "Vacuuming and mopping floors",
    kitchenBathroom: "Kitchen and bathroom cleaning",
    trashRemoval: "Trash removal and light tidying",
    deepCleaning: "Deep Cleaning",
    deepDesc: "A more detailed clean for homes that need extra attention.",
    standardCleanPlus: "Everything in standard clean, plus:",
    detailedBathroom: "Detailed bathroom and kitchen scrubbing",
    baseboardsHardToReach: "Baseboards and hard-to-reach areas",
    builtUpGrime: "Built-up grime and residue removal",
    moveInOut: "Move-In / Move-Out Cleaning",
    moveInOutDesc:
      "Ideal for preparing a home for new occupants or leaving a space spotless.",
    thoroughCleaning: "Thorough cleaning of all rooms",
    insideCabinets: "Inside cabinets and drawers",
    appliancesCleaned: "Appliances cleaned inside and out",
    floorsBathroomsKitchens: "Floors, bathrooms, and kitchens fully refreshed",
    addOnServices: "Add-On Services",
    addOnDesc: "Available upon request:",
    insideFridge: "Inside refrigerator cleaning",
    insideOven: "Inside oven cleaning",
    extraAttention: "Extra attention to specific rooms",
    importantNote: "Important:",
    quoteNote:
      "Willy prefers to see the home first before giving a quote. This ensures fair pricing and the best possible results for every customer.",

    // Why Choose Willy
    whyChooseWilly: "Why Choose Willy",
    whyChooseIntro:
      "Choosing a cleaning service is about trust. Willy takes that seriously and treats every home with care, respect, and attention to detail.",
    friendlyReliableTitle: "Friendly and Reliable",
    friendlyReliableDesc:
      "Willy is known for his positive energy and dependable service. He shows up on time, ready to work, and always with a smile.",
    professionalQuality: "Professional Quality",
    professionalQualityDesc:
      "Every cleaning is done thoroughly and carefully. Willy brings his own supplies and uses proven methods to deliver consistent, high-quality results.",
    personalService: "Personal Service",
    personalServiceDesc:
      "This is not a big franchise. When you book with Willy, you know exactly who is coming into your home. He takes pride in building real relationships with his customers.",
    fairHonestPricing: "Fair and Honest Pricing",
    fairHonestPricingDesc:
      "Willy prefers to see the home before giving a quote. This ensures accurate pricing and no surprises.",
    localTrusted: "Local and Trusted",
    localTrustedDesc:
      "Serving Winter Park, Sanford, and nearby areas, Willy is proud to be a local business that people feel comfortable recommending to friends and family.",
    experiencedProfessional: "Experienced Professional",
    experiencedProfessionalDesc:
      "With years of experience and a reputation for excellence, Willy has the skills and knowledge to handle any cleaning challenge.",
    licensedInsured: "Licensed & Insured",
    locallyOwned: "Locally Owned",
    customerFocused: "Customer Focused",
    chooseWillyNote:
      "When you choose Willy, you're choosing quality, reliability, and a friendly face you can trust.",

    // Trust Badges
    trustBadgesTitle: "Our Commitment to You",
    reliable: "Reliable",
    trustedExperienced: "Trusted and Experienced",
    locallyOwnedBadge: "Locally Owned",
    professionalStaff: "Professional Staff",
    customizedPlans: "Customized Cleaning Plans",
    warranty24Hour: "24 Hour Warranty",
    noContracts: "No Contracts",
    cleaningSanitizing: "Cleaning and Sanitizing Services",
    neighborlyPromise: "Neighborly Done Right Promise",

    // Service Areas
    serviceAreasTitle: "Service Areas",
    serviceAreasList:
      "Altamonte Springs, Apopka, Casselberry, Geneva, Goldenrod, Longwood, Maitland, Orlando, Oviedo, Sanford, Winter Park, Winter Springs",

    // Additional Service Types
    homeCleaning: "Home Cleaning",
    apartmentCondoCleaning: "Apartment & Condo Cleaning",
    ecoFriendlyCleaning: "Eco-Friendly Cleaning",

    // About Willy
    aboutWilly: "About Willy",
    aboutText1:
      "Willy is the kind of person who makes a room brighter the moment he walks in. He is warm, positive, and genuinely happy to help - the kind of friendly presence people remember long after he leaves. That same energy goes into every home he cleans.",
    aboutText2:
      "He started Willy Premium Cleaning Services with a simple goal: give people a cleaner, calmer home without any stress or hassle. He brings his own supplies, shows up prepared, and treats every space with the same care he would give his own.",
    aboutText3:
      "Customers describe him as dependable, upbeat, and easy to work with. He is loud in the best way - joyful, confident, and always ready to get the job done right. Whether it is a standard clean, a deep clean, or a move-in/move-out job, Willy brings professionalism and heart to every visit.",
    aboutText4:
      "If you want a cleaner home and a friendly face you can trust, Willy is your guy.",
    willyMaldonado: "Willy Maldonado",
    founder: "Founder & Professional Cleaner",
    servingSince: "Serving the community since 2023",
    rating: "5★",
    ratingDesc: "Rating",
    dedicated: "100%",
    dedicatedDesc: "Dedicated",
    established: "2023",
    establishedDesc: "Established",

    // What to Expect
    whatToExpect: "What to Expect",
    whatToExpectIntro:
      "Willy believes a great cleaning experience should be simple and stress-free. It's as easy as 1-2-3:",
    reachOut: "1. Reach Out",
    reachOutDesc:
      "Contact Willy by phone or email to let him know what kind of cleaning you need.",
    walkthroughQuote: "2. Walk-Through and Quote",
    walkthroughQuoteDesc:
      "Willy prefers to see the home before giving a quote. This helps ensure fair pricing and the best possible results.",
    cleaningDay: "3. Cleaning Day",
    cleaningDayDesc:
      "Willy arrives on time with his own supplies, ready to work. He treats every home with care and attention to detail.",
    clearCommunication: "Clear Communication, Honest Service",
    directContact: "Direct Contact",
    personalQuotes: "Personal Quotes",
    qualityResults: "Quality Results",
    happyCustomers: "Happy Customers",
    processNote:
      "Clear communication, honest pricing, and a positive experience from start to finish.",
    processNoteHighlight:
      "That is what you can expect with Willy Premium Cleaning Services.",

    // Contact
    contactWilly: "Contact Willy",
    contactIntro:
      "Ready for a cleaner home and a friendly experience? Willy would love to hear from you.",
    getInTouch: "Get in Touch",
    getInTouchDesc:
      "Reach out to schedule a walk-through or ask any questions about services.",
    phoneLabel: "Phone",
    phoneDesc: "407-840-1428",
    phoneNote: "Call or text anytime",
    emailLabel: "Email",
    emailDesc: "willycleaning123@gmail.com",
    emailNote: "Send a message anytime",
    serviceAreaLabel: "Service Area",
    serviceAreaDesc: "Winter Park, Sanford, and surrounding areas",
    serviceAreaNote: "Local and trusted service",
    importantNoteTitle: "Important Note",
    importantNoteText:
      "Willy prefers to see the home before giving a quote. This helps ensure fair pricing and the best possible results for every customer.",
    requestQuoteTitle: "Request a Quote",
    nameLabel: "Name *",
    namePlaceholder: "Your full name",
    phoneLabelForm: "Phone Number *",
    phonePlaceholder: "(407) 555-0123",
    emailLabelForm: "Email",
    emailPlaceholder: "your.email@example.com",
    serviceNeeded: "Service Needed *",
    selectService: "Select a service",
    standardOption: "Standard Cleaning",
    deepOption: "Deep Cleaning",
    moveInOutOption: "Move-In / Move-Out",
    otherOption: "Other / Custom",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your cleaning needs...",
    sendMessage: "Send Message",
    contactFormNote:
      "Whether you need regular cleaning, a deep clean, or help with a move-in or move-out, you can expect clear communication, honest service, and a positive experience from start to finish.",

    // Footer
    footerBrand: "Willy Premium Cleaning Services",
    footerServiceArea: "Serving Winter Park, Sanford, and surrounding areas.",
    footerTagline: "Friendly, reliable, and always happy to help.",
    footerCopyright: "© Willy Premium Cleaning Services. All rights reserved.",
    footerBadges: "Licensed & Insured • Locally Owned • Customer Focused",
    quickLinks: "Quick Links",
    servicesLink: "Services",
    aboutLink: "About Willy",
    contactLink: "Contact",
    processLink: "Our Process",
  },
  es: {
    // Navigation
    phone: "407-840-1428",
    email: "willycleaning123@gmail.com",
    serviceArea: "Winter Park, Sanford y Alrededores",
    contact: "Contacto",

    // Hero
    heroTitle: "Limpieza Premium Con Toque Personal",
    heroSubtitle:
      "Un hogar más limpio y una experiencia más amigable. Eso es Willy.",
    heroTagline:
      "Limpieza profesional con una sonrisa en la que puedes confiar.",
    serviceAreas: "Sirviendo Winter Park, Sanford y áreas circundantes",
    requestQuote: "Solicitar Cotización",
    trustBadge: "Licenciado y Asegurado • Local y Confiable",

    // Introduction
    whenWillyArrives: "Cuando Llega Willy, Lo Sientes",
    introText:
      "La sonrisa, el calor y la energía positiva. Es el tipo de persona que hace que la limpieza se sienta fácil porque genuinamente disfruta ayudar a las personas. Con años de experiencia y una reputación de ser confiable y positivo, Willy trae tanto profesionalismo como corazón a cada hogar que limpia.",
    servicesOffered:
      "Ya necesites una limpieza estándar, una limpieza profunda, o ayuda para preparar un lugar para mudarse o mudarse, Willy llega preparado, enfocado y listo para hacer que tu espacio brille.",
    friendlyReliable: "Amigable. Confiable. Siempre feliz de ayudar.",
    thatIsWilly: "Eso es Willy Premium Cleaning Services.",

    // Services
    servicesTitle: "Servicios de Limpieza",
    servicesIntro:
      "Willy Premium Cleaning Services ofrece limpieza confiable y de alta calidad para hogares de todos los tamaños. Cada servicio se realiza con cuidado, atención al detalle y una actitud positiva que puedes sentir desde que llega Willy.",
    standardCleaning: "Limpieza Estándar",
    standardDesc:
      "Perfecta para mantenimiento regular y mantener un hogar limpio y cómodo.",
    dustingWiping: "Limpiar y quitar el polvo de las superficies",
    vacuumingMopping: "Aspirar y trapear los pisos",
    kitchenBathroom: "Limpieza de cocina y baño",
    trashRemoval: "Retirar la basura y ordenar ligeramente",
    deepCleaning: "Limpieza Profunda",
    deepDesc:
      "Una limpieza más detallada para hogares que necesitan atención extra.",
    standardCleanPlus: "Todo en la limpieza estándar, más:",
    detailedBathroom: "Limpieza detallada de baño y cocina",
    baseboardsHardToReach: "Zócalos y áreas de difícil acceso",
    builtUpGrime: "Eliminación de suciedad acumulada y residuos",
    moveInOut: "Limpieza de Mudanza",
    moveInOutDesc:
      "Ideal para preparar un hogar para nuevos ocupantes o dejar un espacio impecable.",
    thoroughCleaning: "Limpieza exhaustiva de todas las habitaciones",
    insideCabinets: "Dentro de gabinetes y cajones",
    appliancesCleaned: "Electrodomésticos limpios por dentro y por fuera",
    floorsBathroomsKitchens: "Pisos, baños y cocinas completamente renovados",
    addOnServices: "Servicios Adicionales",
    addOnDesc: "Disponibles bajo solicitud:",
    insideFridge: "Limpieza interior del refrigerador",
    insideOven: "Limpieza interior del horno",
    extraAttention: "Atención extra a habitaciones específicas",
    importantNote: "Importante:",
    quoteNote:
      "Willy prefiere ver el hogar antes de dar una cotización. Esto asegura precios justos y los mejores resultados posibles para cada cliente.",

    // Why Choose Willy
    whyChooseWilly: "Por Qué Elegir a Willy",
    whyChooseIntro:
      "Elegir un servicio de limpieza es sobre confianza. Willy lo toma en serio y trata cada hogar con cuidado, respeto y atención al detalle.",
    friendlyReliableTitle: "Amigable y Confiable",
    friendlyReliableDesc:
      "Willy es conocido por su energía positiva y servicio confiable. Llega a tiempo, listo para trabajar, y siempre con una sonrisa.",
    professionalQuality: "Calidad Profesional",
    professionalQualityDesc:
      "Cada limpieza se realiza minuciosamente y con cuidado. Willy trae sus propios suministros y usa métodos probados para entregar resultados consistentes de alta calidad.",
    personalService: "Servicio Personal",
    personalServiceDesc:
      "Esto no es una gran franquicia. Cuando reservas con Willy, sabes exactamente quién viene a tu hogar. Se enorgullece de construir relaciones reales con sus clientes.",
    fairHonestPricing: "Precios Justos y Honestos",
    fairHonestPricingDesc:
      "Willy prefiere ver el hogar antes de dar una cotización. Esto asegura precios precisos y sin sorpresas.",
    localTrusted: "Local y Confiable",
    localTrustedDesc:
      "Sirviendo Winter Park, Sanford y áreas cercanas, Willy se enorgullece de ser un negocio local con el que la gente se siente cómoda recomendando a amigos y familiares.",
    experiencedProfessional: "Profesional Experimentado",
    experiencedProfessionalDesc:
      "Con años de experiencia y una reputación de excelencia, Willy tiene las habilidades y conocimiento para manejar cualquier desafío de limpieza.",
    licensedInsured: "Licenciado y Asegurado",
    locallyOwned: "De Propiedad Local",
    customerFocused: "Enfocado en el Cliente",
    chooseWillyNote:
      "Cuando eliges a Willy, estás eligiendo calidad, confiabilidad y una cara amigable en la que puedes confiar.",

    // Trust Badges
    trustBadgesTitle: "Nuestro Compromiso Contigo",
    reliable: "Confiable",
    trustedExperienced: "Confiable y Experimentado",
    locallyOwnedBadge: "De Propiedad Local",
    professionalStaff: "Personal Profesional",
    customizedPlans: "Planes de Limpieza Personalizados",
    warranty24Hour: "Garantía de 24 Horas",
    noContracts: "Sin Contratos",
    cleaningSanitizing: "Servicios de Limpieza y Sanitización",
    neighborlyPromise: "Promesa Vecinal Bien Hecha",

    // Service Areas
    serviceAreasTitle: "Áreas de Servicio",
    serviceAreasList:
      "Altamonte Springs, Apopka, Casselberry, Geneva, Goldenrod, Longwood, Maitland, Orlando, Oviedo, Sanford, Winter Park, Winter Springs",

    // Additional Service Types
    homeCleaning: "Limpieza de Hogares",
    apartmentCondoCleaning: "Limpieza de Apartamentos y Condominios",
    ecoFriendlyCleaning: "Limpieza Ecológica",

    // About Willy
    aboutWilly: "Acerca de Willy",
    aboutText1:
      "Willy es el tipo de persona que ilumina una habitación desde que entra. Es cálido, positivo y genuinamente feliz de ayudar - el tipo de presencia amigable que la gente recuerda mucho después de que se va. Esa misma energía va en cada hogar que limpia.",
    aboutText2:
      "Comenzó Willy Premium Cleaning Services con un objetivo simple: dar a las personas un hogar más limpio y tranquilo sin estrés ni complicaciones. Trae sus propios suministros, llega preparado y trata cada espacio con el mismo cuidado que daría al suyo.",
    aboutText3:
      "Los clientes lo describen como confiable, optimista y fácil de trabajar con él. Es ruidoso de la mejor manera - alegre, seguro y siempre listo para hacer el trabajo correctamente. Ya sea una limpieza estándar, una limpieza profunda, o un trabajo de mudanza, Willy trae profesionalismo y corazón a cada visita.",
    aboutText4:
      "Si quieres un hogar más limpio y una cara amigable en la que puedas confiar, Willy es tu tipo.",
    willyMaldonado: "Willy Maldonado",
    founder: "Fundador y Limpiador Profesional",
    servingSince: "Sirviendo a la comunidad desde 2023",
    rating: "5★",
    ratingDesc: "Calificación",
    dedicated: "100%",
    dedicatedDesc: "Dedicado",
    established: "2023",
    establishedDesc: "Establecido",

    // What to Expect
    whatToExpect: "Qué Esperar",
    whatToExpectIntro:
      "Willy cree que una gran experiencia de limpieza debe ser simple y sin estrés. Es tan fácil como 1-2-3:",
    reachOut: "1. Contáctanos",
    reachOutDesc:
      "Contacta a Willy por teléfono o correo para hacerle saber qué tipo de limpieza necesitas.",
    walkthroughQuote: "2. Recorrido y Cotización",
    walkthroughQuoteDesc:
      "Willy prefiere ver el hogar antes de dar una cotización. Esto ayuda a asegurar precios justos y los mejores resultados posibles.",
    cleaningDay: "3. Día de Limpieza",
    cleaningDayDesc:
      "Willy llega a tiempo con sus propios suministros, listo para trabajar. Trata cada hogar con cuidado y atención al detalle.",
    clearCommunication: "Comunicación Clara, Servicio Honesto",
    directContact: "Contacto Directo",
    personalQuotes: "Cotizaciones Personales",
    qualityResults: "Resultados de Calidad",
    happyCustomers: "Clientes Felices",
    processNote:
      "Comunicación clara, precios honestos y una experiencia positiva de principio a fin.",
    processNoteHighlight:
      "Eso es lo que puedes esperar con Willy Premium Cleaning Services.",

    // Contact
    contactWilly: "Contacta a Willy",
    contactIntro:
      "¿Listo para un hogar más limpio y una experiencia amigable? A Willy le encantaría saber de ti.",
    getInTouch: "Ponte en Contacto",
    getInTouchDesc:
      "Comunícate para programar un recorrido o hacer cualquier pregunta sobre servicios.",
    phoneLabel: "Teléfono",
    phoneDesc: "407-840-1428",
    phoneNote: "Llama o escribe en cualquier momento",
    emailLabel: "Correo",
    emailDesc: "willycleaning123@gmail.com",
    emailNote: "Envía un mensaje en cualquier momento",
    serviceAreaLabel: "Área de Servicio",
    serviceAreaDesc: "Winter Park, Sanford y áreas circundantes",
    serviceAreaNote: "Servicio local y confiable",
    importantNoteTitle: "Nota Importante",
    importantNoteText:
      "Willy prefiere ver el hogar antes de dar una cotización. Esto ayuda a asegurar precios justos y los mejores resultados posibles para cada cliente.",
    requestQuoteTitle: "Solicitar Cotización",
    nameLabel: "Nombre *",
    namePlaceholder: "Tu nombre completo",
    phoneLabelForm: "Número de Teléfono *",
    phonePlaceholder: "(407) 555-0123",
    emailLabelForm: "Correo",
    emailPlaceholder: "tu.correo@ejemplo.com",
    serviceNeeded: "Servicio Necesario *",
    selectService: "Selecciona un servicio",
    standardOption: "Limpieza Estándar",
    deepOption: "Limpieza Profunda",
    moveInOutOption: "Limpieza de Mudanza",
    otherOption: "Otro / Personalizado",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntanos sobre tus necesidades de limpieza...",
    sendMessage: "Enviar Mensaje",
    contactFormNote:
      "Ya necesites limpieza regular, una limpieza profunda, o ayuda con una mudanza, puedes esperar comunicación clara, servicio honesto y una experiencia positiva de principio a fin.",

    // Footer
    footerBrand: "Willy Premium Cleaning Services",
    footerServiceArea: "Sirviendo Winter Park, Sanford y áreas circundantes.",
    footerTagline: "Amigable, confiable y siempre feliz de ayudar.",
    footerCopyright:
      "© Willy Premium Cleaning Services. Todos los derechos reservados.",
    footerBadges:
      "Licenciado y Asegurado • De Propiedad Local • Enfocado en el Cliente",
    quickLinks: "Enlaces Rápidos",
    servicesLink: "Servicios",
    aboutLink: "Acerca de Willy",
    contactLink: "Contacto",
    processLink: "Nuestro Proceso",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("willy-language") as Language;
      return savedLanguage === "en" || savedLanguage === "es"
        ? savedLanguage
        : "en";
    }
    return "en";
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("willy-language", lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
