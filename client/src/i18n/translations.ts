export type Lang = "sq" | "en" | "it" | "es" | "fr" | "de";

export interface LanguageOption {
  code: Lang;
  label: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "it", label: "Italian" },
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "sq", label: "Albanian" },
];

export const DEFAULT_LANG: Lang = "it";

export const STORAGE_KEY = "ida-lang";

export const LOCALES: Record<Lang, string> = {
  sq: "sq-AL",
  en: "en-GB",
  it: "it-IT",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
};

export function isLang(value: unknown): value is Lang {
  return (
    value === "sq" ||
    value === "en" ||
    value === "it" ||
    value === "es" ||
    value === "fr" ||
    value === "de"
  );
}

export type Translation = Partial<
  Record<"en" | "it" | "es" | "fr" | "de", string>
>;

/**
 * Fjalor i përkthimit, i indeksuar sipas tekstit origjinal shqip.
 * `translateText` kthen përkthimin për gjuhën e zgjedhur (fallback në EN, pastaj origjinali).
 */
export const DICT: Record<string, Translation> = {
  // ---- Nav / Header ----
  Panelet: { en: "Panels", it: "Pannelli" },
  Bateria: { en: "Battery", it: "Batteria" },
  Aplikacioni: { en: "App", it: "App" },
  Kalkulatori: { en: "Calculator", it: "Calcolatore" },
  Projektet: { en: "Projects", it: "Progetti" },
  "Kërko ofertë": { en: "Request a quote", it: "Richiedi un preventivo" },
  "Navigimi kryesor": { en: "Main navigation", it: "Navigazione principale" },
  "IDA SOLAR - në krye": { en: "IDA SOLAR - back to top", it: "IDA SOLAR - torna su" },
  "Hap menunë": { en: "Open menu", it: "Apri il menu" },
  "Mbyll menunë": { en: "Close menu", it: "Chiudi il menu" },

  // ---- Hero ----
  "Energji e pastër.": { en: "Clean energy.", it: "Energia pulita." },
  "Pavarësi e plotë.": { en: "Total independence.", it: "Indipendenza totale." },
  "Prodhoni energjinë tuaj nga dielli, ruajeni për natën dhe ulni varësinë nga rrjeti me një sistem të projektuar për ju.":
    {
      en: "Generate your own energy from the sun, store it for the night and reduce your dependence on the grid with a system designed for you.",
      it: "Produci la tua energia dal sole, accumulala per la notte e riduci la dipendenza dalla rete con un sistema progettato per te.",
    },
  "Llogarit kursimin": { en: "Calculate savings", it: "Calcola il risparmio" },
  "Konsultë falas": { en: "Free consultation", it: "Consulenza gratuita" },
  "Eksploro sistemin": { en: "Explore the system", it: "Esplora il sistema" },
  "Sisteme që punojnë": { en: "Systems that work", it: "Sistemi che funzionano" },
  "edhe kur ti fle.": { en: "even while you sleep.", it: "anche mentre dormi." },
  vjet: { en: "years", it: "anni" },
  "garanci performance": {
    en: "performance warranty",
    it: "garanzia di prestazione",
  },
  emetime: { en: "emissions", it: "emissioni" },
  "gjatë përdorimit": { en: "during use", it: "durante l'uso" },
  monitorim: { en: "monitoring", it: "monitoraggio" },
  "nga aplikacioni": { en: "from the app", it: "dall'app" },

  // ---- Savings ----
  "01 / KURSIMI": { en: "01 / SAVINGS", it: "01 / RISPARMIO" },
  "Energjia e diellit është falas.": {
    en: "Solar energy is free.",
    it: "L'energia solare è gratuita.",
  },
  "Përdoreni sot.": { en: "Use it today.", it: "Usala oggi." },
  "Ndërto një burim energjie që prodhon për ty çdo ditë. Një sistem i dimensionuar saktë të jep më shumë kontroll mbi shpenzimet dhe më pak varësi nga çmimet e tregut.":
    {
      en: "Build an energy source that produces for you every day. A correctly sized system gives you more control over costs and less dependence on market prices.",
      it: "Crea una fonte di energia che produce per te ogni giorno. Un sistema dimensionato correttamente ti dà più controllo sui costi e meno dipendenza dai prezzi di mercato.",
    },
  "Mbrojtje nga rritja e kostove": {
    en: "Protection from rising costs",
    it: "Protezione dall'aumento dei costi",
  },
  "Çmimi i diellit mbetet zero. Ti përdor energjinë që prodhon vetë.": {
    en: "The price of the sun stays at zero. You use the energy you produce yourself.",
    it: "Il prezzo del sole resta zero. Usi l'energia che produci tu stesso.",
  },
  "Kthim i matshëm i investimit": {
    en: "Measurable return on investment",
    it: "Ritorno sull'investimento misurabile",
  },
  "Shiko prodhimin, kursimin dhe periudhën e kthimit përpara se të vendosësh.": {
    en: "See production, savings and payback time before you decide.",
    it: "Vedi produzione, risparmio e tempo di ritorno prima di decidere.",
  },
  "Vlerë e shtuar për pronën": {
    en: "Added value for the property",
    it: "Valore aggiunto per l'immobile",
  },
  "Një shtëpi më eficente është më e përgatitur për të ardhmen.": {
    en: "A more efficient home is better prepared for the future.",
    it: "Una casa più efficiente è più preparata per il futuro.",
  },
  "Prodhim i pastër": { en: "Clean production", it: "Produzione pulita" },
  "çdo ditë": { en: "every day", it: "ogni giorno" },
  "varësi nga rrjeti": { en: "grid dependence", it: "dipendenza dalla rete" },

  // ---- Panels ----
  "02 / PANËLET": { en: "02 / PANELS", it: "02 / PANNELLI" },
  "Estetikë e rafinuar.": { en: "Refined aesthetics.", it: "Estetica raffinata." },
  "Pa linja të dukshme.": {
    en: "No visible lines.",
    it: "Nessuna linea visibile.",
  },
  "Panelet all-black integrohen me arkitekturën e shtëpisë. Dizajni i pastër nuk tërheq vëmendje — përveçse kur sheh faturën.":
    {
      en: "All-black panels blend into the architecture of the house. The clean design draws no attention — except when you see the bill.",
      it: "I pannelli all-black si integrano con l'architettura della casa. Il design pulito non attira l'attenzione — tranne quando vedi la bolletta.",
    },
  "Shiko çfarë të përshtatet": {
    en: "See what fits you",
    it: "Scopri cosa fa per te",
  },
  "Qeliza me efikasitet të lartë": {
    en: "High-efficiency cells",
    it: "Celle ad alta efficienza",
  },
  "Prodhon më shumë energji edhe në ditë me re.": {
    en: "Produces more energy even on cloudy days.",
    it: "Produce più energia anche nelle giornate nuvolose.",
  },
  "Ndërtuar për kushte reale": {
    en: "Built for real conditions",
    it: "Costruito per condizioni reali",
  },
  "Materiale dhe certifikime sipas projektit.": {
    en: "Materials and certifications per project.",
    it: "Materiali e certificazioni in base al progetto.",
  },
  "Montim i pastër": { en: "Clean installation", it: "Installazione pulita" },
  "Instalim i sigurt, i rregullt dhe i integruar.": {
    en: "Safe, tidy and integrated installation.",
    it: "Installazione sicura, ordinata e integrata.",
  },

  // ---- Products ----
  "02 / PANËLET · LINJAT": {
    en: "02 / PANELS · LINES",
    it: "02 / PANNELLI · LINEE",
  },
  "Gjashtë linja.": { en: "Six lines.", it: "Sei linee." },
  "Një standard.": { en: "One standard.", it: "Un unico standard." },
  "Nga zgjidhjet kompakte rezidenciale te modulet për kushte ekstreme — secila linjë IDA është projektuar për një nevojë të qartë.":
    {
      en: "From compact residential solutions to modules for extreme conditions — each IDA line is designed for a clear need.",
      it: "Dalle soluzioni residenziali compatte ai moduli per condizioni estreme — ogni linea IDA è progettata per un'esigenza chiara.",
    },
  "Mikroinvertor i integruar": {
    en: "Integrated microinverter",
    it: "Microinverter integrato",
  },
  "Xham i dyfishtë": { en: "Double glass", it: "Doppio vetro" },
  "Deri 8000 Pa borë": { en: "Up to 8000 Pa snow", it: "Fino a 8000 Pa di neve" },
  "Optimizues i integruar": {
    en: "Integrated optimizer",
    it: "Ottimizzatore integrato",
  },
  Bifacial: { en: "Bifacial", it: "Bifacciale" },
  "All-black": { en: "All-black", it: "All-black" },
  "IDA PLUG përfaqëson një zgjidhje kompakte dhe të thjeshtuar për aplikime rezidenciale. Sistemi integron mikroinvertorët direkt në modul, duke lejuar instalim të shpejtë dhe të lehtë pa konfigurime komplekse.":
    {
      en: "IDA PLUG is a compact, simplified solution for residential applications. The system integrates microinverters directly into the module, allowing fast and easy installation with no complex configuration.",
      it: "IDA PLUG è una soluzione compatta e semplificata per applicazioni residenziali. Il sistema integra i microinverter direttamente nel modulo, consentendo un'installazione rapida e semplice senza configurazioni complesse.",
    },
  "Falë monitorimit të aplikacionit dhe menaxhimit të decentralizuar të energjisë, ai ofron qasje të drejtpërdrejtë dhe të menjëhershme në energjinë diellore.":
    {
      en: "Thanks to app monitoring and decentralized energy management, it offers direct and immediate access to solar energy.",
      it: "Grazie al monitoraggio tramite app e alla gestione decentralizzata dell'energia, offre un accesso diretto e immediato all'energia solare.",
    },
  "Modulet IDA GLASS janë projektuar për integrimin arkitektonik të fotovoltaikëve në fasada, çati dhe struktura ndërtesash.":
    {
      en: "IDA GLASS modules are designed for the architectural integration of photovoltaics into façades, roofs and building structures.",
      it: "I moduli IDA GLASS sono progettati per l'integrazione architettonica del fotovoltaico in facciate, tetti e strutture edilizie.",
    },
  "Konfigurimi me xham të dyfishtë, i disponueshëm në versione transparente ose me ngjyra, lejon kombinimin e prodhimit të energjisë dhe funksionit strukturor në një element të vetëm.":
    {
      en: "The double-glass configuration, available in transparent or colored versions, combines energy production and structural function in a single element.",
      it: "La configurazione con doppio vetro, disponibile in versioni trasparenti o colorate, combina produzione di energia e funzione strutturale in un unico elemento.",
    },
  "Modulet IDA ALPINE janë projektuar për kushte ekstreme klimatike, ku forca strukturore është një kërkesë kyçe. Struktura e përforcuar mund t'i rezistojë ngarkesave të rënda, duke përfshirë ngarkesat e borës deri në 8000 Pa, duke ruajtur njëkohësisht performancë të qëndrueshme me kalimin e kohës.":
    {
      en: "IDA ALPINE modules are designed for extreme climatic conditions, where structural strength is a key requirement. The reinforced structure withstands heavy loads, including snow loads up to 8000 Pa, while maintaining consistent performance over time.",
      it: "I moduli IDA ALPINE sono progettati per condizioni climatiche estreme, dove la resistenza strutturale è un requisito fondamentale. La struttura rinforzata resiste a carichi elevati, inclusi carichi di neve fino a 8000 Pa, mantenendo prestazioni costanti nel tempo.",
    },
  "Kjo zgjidhje është menduar për instalime në mjedise kritike, ku siguria, qëndrueshmëria dhe besueshmëria janë përparësi operacionale.":
    {
      en: "This solution is intended for installations in critical environments, where safety, durability and reliability are operational priorities.",
      it: "Questa soluzione è pensata per installazioni in ambienti critici, dove sicurezza, durabilità e affidabilità sono priorità operative.",
    },
  "Teknologjia IDA MAXIM prezanton një sistem inteligjent të optimizimit të integruar, i projektuar për të përmirësuar prodhimin e energjisë në prani të hijes. Përmes përdorimit të optimizuesve të integruar, sistemi zvogëlon humbjet dhe siguron prodhim të vazhdueshëm edhe në kushte jo optimale.":
    {
      en: "IDA MAXIM technology introduces an intelligent integrated optimization system, designed to improve energy production in the presence of shade. Using integrated optimizers, the system reduces losses and ensures continuous production even in non-optimal conditions.",
      it: "La tecnologia IDA MAXIM introduce un sistema intelligente di ottimizzazione integrata, progettato per migliorare la produzione di energia in presenza di ombra. Grazie agli ottimizzatori integrati, il sistema riduce le perdite e garantisce una produzione continua anche in condizioni non ottimali.",
    },
  "Kjo qasje përmirëson efikasitetin e përgjithshëm të sistemit pa pasur nevojë për komponentë shtesë.":
    {
      en: "This approach improves the overall efficiency of the system without the need for additional components.",
      it: "Questo approccio migliora l'efficienza complessiva del sistema senza bisogno di componenti aggiuntivi.",
    },
  "Të projektuara për aplikime rezidenciale dhe komerciale, ato integrojnë teknologjinë bifaciale dhe qelizat me performancë të lartë për të siguruar performancë të qëndrueshme me kalimin e kohës.":
    {
      en: "Designed for residential and commercial applications, they integrate bifacial technology and high-performance cells to ensure consistent performance over time.",
      it: "Progettati per applicazioni residenziali e commerciali, integrano tecnologia bifacciale e celle ad alte prestazioni per garantire prestazioni costanti nel tempo.",
    },
  "Konfigurimi me xham të dyfishtë dhe përdorimi i komponentëve të çertifikuar lejon stabilitet më të madh strukturor dhe prodhim të optimizuar të energjisë edhe në kushte të ndryshueshme.":
    {
      en: "The double-glass configuration and the use of certified components provide greater structural stability and optimized energy production even in variable conditions.",
      it: "La configurazione con doppio vetro e l'uso di componenti certificati garantiscono maggiore stabilità strutturale e una produzione di energia ottimizzata anche in condizioni variabili.",
    },
  "Linja IDA POWER është projektuar për aplikime me performancë të lartë, ku efikasiteti i energjisë dhe integrimi estetik duhet të bashkëjetojnë. Modulet përdorin teknologji të përparuar me xham të dyfishtë, kornizë të zezë dhe konfigurime dizajni të zi, duke siguruar një ndikim të kontrolluar vizual dhe rendiment superior të energjisë.":
    {
      en: "The IDA POWER line is designed for high-performance applications, where energy efficiency and aesthetic integration must coexist. The modules use advanced double-glass technology, black frame and all-black design configurations, ensuring a controlled visual impact and superior energy yield.",
      it: "La linea IDA POWER è progettata per applicazioni ad alte prestazioni, dove efficienza energetica e integrazione estetica devono convivere. I moduli utilizzano tecnologia avanzata con doppio vetro, cornice nera e configurazioni di design all-black, garantendo un impatto visivo controllato e una resa energetica superiore.",
    },
  "Kjo linjë është projektuar për projekte rezidenciale, mikpritëse dhe arkitekturore të nivelit të lartë, ku sistemi fotovoltaik bëhet pjesë integrale e projektit.":
    {
      en: "This line is designed for high-end residential, hospitality and architectural projects, where the photovoltaic system becomes an integral part of the design.",
      it: "Questa linea è progettata per progetti residenziali, ricettivi e architettonici di alto livello, dove il sistema fotovoltaico diventa parte integrante del progetto.",
    },

  // ---- Battery ----
  "03 / AKUMULIMI": { en: "03 / STORAGE", it: "03 / ACCUMULO" },
  "Stuhitë ndodhin.": { en: "Storms happen.", it: "Le tempeste accadono." },
  "Ndërprerjet jo domosdoshmërisht.": {
    en: "Outages don't have to.",
    it: "Le interruzioni no.",
  },
  "Ruaj energjinë e ditës dhe përdore kur të duhet. Me një bateri backup, qarqet e rëndësishme mund të vazhdojnë të punojnë edhe kur rrjeti ndalon.":
    {
      en: "Store the day's energy and use it when you need it. With a backup battery, critical circuits can keep running even when the grid goes down.",
      it: "Accumula l'energia del giorno e usala quando ti serve. Con una batteria di backup, i circuiti importanti possono continuare a funzionare anche quando la rete si interrompe.",
    },
  "Ditë & natë": { en: "Day & night", it: "Giorno e notte" },
  "Energjia jote, kur të duhet.": {
    en: "Your energy, when you need it.",
    it: "La tua energia, quando ti serve.",
  },
  "Karikim inteligjent para motit të keq.": {
    en: "Smart charging before bad weather.",
    it: "Ricarica intelligente prima del maltempo.",
  },
  "Konsultohu për baterinë": {
    en: "Consult about the battery",
    it: "Consulenza sulla batteria",
  },
  "autonomi e mbetur": { en: "remaining autonomy", it: "autonomia residua" },
  FUQI: { en: "POWER", it: "POTENZA" },
  AUTONOMI: { en: "AUTONOMY", it: "AUTONOMIA" },

  // ---- App ----
  "04 / APLIKACIONI": { en: "04 / APP", it: "04 / APP" },
  "Kontroll i plotë nga": { en: "Full control from", it: "Pieno controllo dal" },
  "pëllëmba e dorës.": { en: "palm of your hand.", it: "palmo della mano." },
  "Shiko prodhimin, konsumin dhe baterinë në kohë reale. Kupto ku shkon energjia dhe merr vendime më të zgjuara për shtëpinë.":
    {
      en: "See production, consumption and battery in real time. Understand where the energy goes and make smarter decisions for your home.",
      it: "Vedi produzione, consumo e batteria in tempo reale. Capisci dove va l'energia e prendi decisioni più intelligenti per la casa.",
    },
  "Grafikë të qartë": { en: "Clear charts", it: "Grafici chiari" },
  "Ditore, mujore dhe vjetore.": {
    en: "Daily, monthly and yearly.",
    it: "Giornalieri, mensili e annuali.",
  },
  "Siguri 24/7": { en: "24/7 security", it: "Sicurezza 24/7" },
  "Njoftime dhe shëndet sistemi.": {
    en: "Alerts and system health.",
    it: "Avvisi e salute del sistema.",
  },
  "Kontroll nga kudo": { en: "Control from anywhere", it: "Controllo da ovunque" },
  "Energjia jote në telefon.": {
    en: "Your energy on your phone.",
    it: "La tua energia sul telefono.",
  },
  "Projektimi fillon këtu": {
    en: "Design starts here",
    it: "La progettazione inizia qui",
  },
  "Mirëmëngjes, Arta": { en: "Good morning, Arta", it: "Buongiorno, Arta" },
  "Energjia jote": { en: "Your energy", it: "La tua energia" },
  SOT: { en: "TODAY", it: "OGGI" },
  "Sistem optimal": { en: "Optimal system", it: "Sistema ottimale" },
  "Fluksi i energjisë": { en: "Energy flow", it: "Flusso di energia" },
  Dielli: { en: "Sun", it: "Sole" },
  Shtëpia: { en: "Home", it: "Casa" },
  "Bateria 76%": { en: "Battery 76%", it: "Batteria 76%" },
  "Prodhimi ditor": { en: "Daily production", it: "Produzione giornaliera" },
  "kursim këtë muaj": { en: "savings this month", it: "risparmio questo mese" },
  "Sistemi aktiv": { en: "System active", it: "Sistema attivo" },
  "monitorim 24/7": { en: "monitoring 24/7", it: "monitoraggio 24/7" },
  "Mockup i aplikacionit IDA SOLAR": {
    en: "IDA SOLAR app mockup",
    it: "Mockup dell'app IDA SOLAR",
  },

  // ---- Calculator (first) ----
  Objekti: { en: "Property", it: "Immobile" },
  Fatura: { en: "Bill", it: "Bolletta" },
  Rezultati: { en: "Result", it: "Risultato" },
  Konsumi: { en: "Consumption", it: "Consumo" },
  "HAPI 01": { en: "STEP 01", it: "PASSO 01" },
  "HAPI 02": { en: "STEP 02", it: "PASSO 02" },
  "Çfarë lloj objekti ke?": {
    en: "What type of property do you have?",
    it: "Che tipo di immobile hai?",
  },
  "Zgjidh llojin e objektit": {
    en: "Choose the property type",
    it: "Scegli il tipo di immobile",
  },
  "Shtëpi private": { en: "Private home", it: "Casa privata" },
  "Objekt biznesi": { en: "Business property", it: "Immobile commerciale" },
  Apartament: { en: "Apartment", it: "Appartamento" },
  "Biznes / Zyrë": { en: "Business / Office", it: "Business / Ufficio" },
  "Industri / Bujqësi": { en: "Industry / Agriculture", it: "Industria / Agricoltura" },
  "Sa paguan mesatarisht në muaj?": {
    en: "What do you pay on average per month?",
    it: "Quanto paghi in media al mese?",
  },
  "Fatura mujore në euro": {
    en: "Monthly bill in euro",
    it: "Bolletta mensile in euro",
    es: "Factura mensual en euros",
    fr: "Facture mensuelle en euros",
    de: "Monatliche Rechnung in Euro",
  },
  "Lëvize për të parë ndikimin e konsumit në sistemin tënd.": {
    en: "Drag to see the impact of consumption on your system.",
    it: "Trascina per vedere l'impatto dei consumi sul tuo sistema.",
  },
  "Shto bateri backup": {
    en: "Add backup battery",
    it: "Aggiungi batteria di backup",
  },
  "Ruaj energjinë dhe mbrohu nga ndërprerjet.": {
    en: "Store energy and protect yourself from outages.",
    it: "Accumula energia e proteggiti dalle interruzioni.",
  },
  "VLERËSIMI YT": { en: "YOUR ESTIMATE", it: "LA TUA STIMA" },
  "Sistemi i rekomanduar": {
    en: "Recommended system",
    it: "Sistema consigliato",
  },
  panele: { en: "panels", it: "pannelli" },
  çati: { en: "roof", it: "tetto" },
  bateri: { en: "battery", it: "batteria" },
  "Produksion vjetor": { en: "Annual production", it: "Produzione annua" },
  "Kursimi i mundshëm në 20 vjet": {
    en: "Potential savings over 20 years",
    it: "Risparmio potenziale in 20 anni",
  },
  "Vlerësim orientues. Oferta finale bazohet në çatinë, konsumin dhe kushtet reale të instalimit.":
    {
      en: "Indicative estimate. The final offer is based on the roof, consumption and real installation conditions.",
      it: "Stima indicativa. L'offerta finale si basa sul tetto, sui consumi e sulle condizioni reali di installazione.",
    },
  "Merr ofertën e detajuar": {
    en: "Get the detailed offer",
    it: "Richiedi l'offerta dettagliata",
  },
  "Dërgo kërkesën": { en: "Send request", it: "Invia richiesta" },
  "U krye.": { en: "Done.", it: "Fatto." },
  "Do të të kontaktojmë për analizën teknike.": {
    en: "We will contact you for the technical analysis.",
    it: "Ti contatteremo per l'analisi tecnica.",
  },
  "Emri dhe mbiemri": { en: "Full name", it: "Nome e cognome" },
  "Numri i telefonit": { en: "Phone number", it: "Numero di telefono" },
  "Kërkesa u regjistrua": {
    en: "Request registered",
    it: "Richiesta registrata",
  },
  "Faleminderit! Ekipi i IDA SOLAR do të të kontaktojë së shpejti.": {
    en: "Thank you! The IDA SOLAR team will contact you soon.",
    it: "Grazie! Il team IDA SOLAR ti contatterà presto.",
  },

  // ---- Sizing calculator ----
  "Madhësia e shtëpisë": { en: "Home size", it: "Dimensione della casa" },
  "Madhësia e shtëpisë në metra katrorë": {
    en: "Home size in square meters",
    it: "Dimensione della casa in metri quadrati",
  },
  "Konsumi mujor": { en: "Monthly consumption", it: "Consumo mensile" },
  "Konsumi mujor në kilovat-orë": {
    en: "Monthly consumption in kilowatt-hours",
    it: "Consumo mensile in chilowattora",
  },
  "Konsumi tipik për": { en: "Typical consumption for", it: "Consumo tipico per" },
  "m²": { en: "m²", it: "m²" },
  ": ~": { en: ": ~", it: ": ~" },
  "kWh në muaj.": { en: "kWh per month.", it: "kWh al mese." },
  "shtëpi private": { en: "private home", it: "casa privata" },
  apartament: { en: "apartment", it: "appartamento" },
  "biznes / zyrë": { en: "business / office", it: "business / ufficio" },
  "industri / bujqësi": { en: "industry / agriculture", it: "industria / agricoltura" },
  "DIMENSIONIMI YT": { en: "YOUR SIZING", it: "IL TUO DIMENSIONAMENTO" },
  "Lloji & madhësia e sistemit": {
    en: "System type & size",
    it: "Tipo e dimensione del sistema",
  },
  "Çatia e nevojshme mund të tejkalojë sipërfaqen e shtëpisë — konsulto një ekspert për vendosjen.":
    {
      en: "The required roof area may exceed the home's surface — consult an expert for the layout.",
      it: "L'area del tetto necessaria potrebbe superare la superficie della casa — consulta un esperto per la disposizione.",
    },
  "Vlerësim orientues bazuar në konsumin mujor dhe rrezatimin mesatar. Oferta finale bazohet në çatinë dhe kushtet reale.":
    {
      en: "Indicative estimate based on monthly consumption and average irradiation. The final offer is based on the roof and real conditions.",
      it: "Stima indicativa basata sul consumo mensile e sull'irraggiamento medio. L'offerta finale si basa sul tetto e sulle condizioni reali.",
    },

  // ---- Calculator section ----
  "05 / KALKULATORI": { en: "05 / CALCULATOR", it: "05 / CALCOLATORE" },
  "Projektimi yt": { en: "Your design", it: "La tua progettazione" },
  "fillon me një numër.": {
    en: "starts with a number.",
    it: "inizia con un numero.",
  },
  "Zgjidh kalkulatorin sipas asaj që di: faturën mujore ose konsumin dhe madhësinë e objektit.":
    {
      en: "Choose the calculator based on what you know: your monthly bill, or consumption and property size.",
      it: "Scegli il calcolatore in base a ciò che sai: la bolletta mensile, oppure i consumi e la dimensione dell'immobile.",
    },
  "Nga fatura mujore": { en: "From the monthly bill", it: "Dalla bolletta mensile" },
  "Nga konsumi & madhësia e shtëpisë": {
    en: "From consumption & home size",
    it: "Da consumi e dimensione della casa",
  },

  // ---- Process ----
  "06 / PROCESI": { en: "06 / PROCESS", it: "06 / PROCESSO" },
  "Thjesht nga ideja": { en: "Simply from the idea", it: "Semplicemente dall'idea" },
  "te energjia aktive.": { en: "to active energy.", it: "all'energia attiva." },
  "Një ekip i vetëm për analizën, dokumentacionin, instalimin dhe aktivizimin e sistemit.":
    {
      en: "A single team for analysis, documentation, installation and system activation.",
      it: "Un unico team per analisi, documentazione, installazione e attivazione del sistema.",
    },
  "Analiza & dizajni": { en: "Analysis & design", it: "Analisi e progettazione" },
  "Lexojmë çatinë, konsumin dhe orientimin përpara se të propozojmë zgjidhjen.": {
    en: "We read the roof, consumption and orientation before proposing the solution.",
    it: "Analizziamo il tetto, i consumi e l'orientamento prima di proporre la soluzione.",
  },
  "Lejet & dokumentacioni": {
    en: "Permits & documentation",
    it: "Permessi e documentazione",
  },
  "Ti nuk humbet kohë me procedurat. Ekipi ynë i ndjek hapat me ty.": {
    en: "You don't waste time on procedures. Our team follows the steps with you.",
    it: "Non perdi tempo con le procedure. Il nostro team segue i passaggi con te.",
  },
  "Montimi profesional": {
    en: "Professional installation",
    it: "Installazione professionale",
  },
  "Instalim i rregullt, i sigurt dhe i koordinuar me jetën e shtëpisë.": {
    en: "Tidy, safe installation coordinated with your home life.",
    it: "Installazione ordinata, sicura e coordinata con la vita domestica.",
  },
  "Ndezja e sistemit": { en: "System activation", it: "Attivazione del sistema" },
  "Aktivizim, dorëzim i aplikacionit dhe një sistem që nis të punojë për ty.": {
    en: "Activation, app handover and a system that starts working for you.",
    it: "Attivazione, consegna dell'app e un sistema che inizia a lavorare per te.",
  },

  // ---- Projects ----
  "07 / PROJEKTET": { en: "07 / PROJECTS", it: "07 / PROGETTI" },
  "Punë reale.": { en: "Real work.", it: "Lavoro reale." },
  "Rezultate të matshme.": {
    en: "Measurable results.",
    it: "Risultati misurabili.",
  },
  "Disa nga projektet ku IDA SOLAR ka projektuar, instaluar dhe integruar sisteme energjie për nevoja reale operacionale.":
    {
      en: "Some of the projects where IDA SOLAR has designed, installed and integrated energy systems for real operational needs.",
      it: "Alcuni dei progetti in cui IDA SOLAR ha progettato, installato e integrato sistemi energetici per reali esigenze operative.",
    },
  "Hoteleri dhe Mikpritje": {
    en: "Hotels and Hospitality",
    it: "Hotel e Ospitalità",
  },
  "Industriale dhe Prodhimi": {
    en: "Industrial and Manufacturing",
    it: "Industriale e Produzione",
  },
  "Komerciale dhe Zyra": {
    en: "Commercial and Offices",
    it: "Commerciale e Uffici",
  },
  "Objekt Biznesi Urban": {
    en: "Urban Business Property",
    it: "Immobile Commerciale Urbano",
  },
  "Sistem i integruar energjie i zhvilluar për një strukturë mikpritëse me shumë persona, i projektuar për të siguruar vazhdimësi operacionale, konsum të reduktuar dhe menaxhim efikas të energjisë gjatë gjithë vitit.":
    {
      en: "An integrated energy system developed for a multi-person hospitality structure, designed to ensure operational continuity, reduced consumption and efficient energy management throughout the year.",
      it: "Un sistema energetico integrato sviluppato per una struttura ricettiva con molte persone, progettato per garantire continuità operativa, consumi ridotti e una gestione efficiente dell'energia durante tutto l'anno.",
    },
  "Sistemi i Mikpritjes: Module fotovoltaike + Inverter hibrid + Magazinim": {
    en: "Hospitality system: Photovoltaic modules + Hybrid inverter + Storage",
    it: "Sistema per l'ospitalità: Moduli fotovoltaici + Inverter ibrido + Accumulo",
  },
  "Sistem fotovoltaik i projektuar për të mbështetur aktivitetet e prodhimit dhe logjistikës, duke optimizuar kostot e energjisë dhe duke siguruar stabilitet operativ në proceset e biznesit.":
    {
      en: "A photovoltaic system designed to support production and logistics activities, optimizing energy costs and ensuring operational stability in business processes.",
      it: "Un sistema fotovoltaico progettato per supportare le attività di produzione e logistica, ottimizzando i costi energetici e garantendo stabilità operativa nei processi aziendali.",
    },
  "Sistemi industrial: Module fotovoltaike + inverter trefazor": {
    en: "Industrial system: Photovoltaic modules + three-phase inverter",
    it: "Sistema industriale: Moduli fotovoltaici + inverter trifase",
  },
  "Sistem i integruar energjie për ndërtesa zyrash dhe hapësira tregtare, i zhvilluar për të përmirësuar efikasitetin e energjisë dhe për të zvogëluar varësinë nga rrjeti.":
    {
      en: "An integrated energy system for office buildings and commercial spaces, developed to improve energy efficiency and reduce dependence on the grid.",
      it: "Un sistema energetico integrato per edifici per uffici e spazi commerciali, sviluppato per migliorare l'efficienza energetica e ridurre la dipendenza dalla rete.",
    },
  "Sistem Komercial: Module fotovoltaike + Sistem menaxhimi të energjisë": {
    en: "Commercial system: Photovoltaic modules + Energy management system",
    it: "Sistema commerciale: Moduli fotovoltaici + Sistema di gestione dell'energia",
  },
  "Zgjidhje energjetike e projektuar për aktivitete urbane që kërkojnë shumë energji, me fokus në besueshmëri, vazhdimësi dhe optimizim të konsumit.":
    {
      en: "An energy solution designed for energy-intensive urban activities, focusing on reliability, continuity and consumption optimization.",
      it: "Una soluzione energetica progettata per attività urbane ad alto consumo, con focus su affidabilità, continuità e ottimizzazione dei consumi.",
    },
  "Sistemi i biznesit: Fotovoltaik + Magazinim + Inverter": {
    en: "Business system: Photovoltaic + Storage + Inverter",
    it: "Sistema aziendale: Fotovoltaico + Accumulo + Inverter",
  },
  Zbatimi: { en: "Implementation", it: "Implementazione" },

  // ---- Final CTA ----
  "IDA SOLAR / NEXT": { en: "IDA SOLAR / NEXT", it: "IDA SOLAR / NEXT" },
  "Gati të marrësh": { en: "Ready to take", it: "Pronto a prendere" },
  "kontrollin?": { en: "control?", it: "il controllo?" },
  "Një konsultë e shkurtër. Një ide më e qartë. Një hap drejt pavarësisë.": {
    en: "A short consultation. A clearer idea. A step toward independence.",
    it: "Una breve consulenza. Un'idea più chiara. Un passo verso l'indipendenza.",
  },
  "Bëj kërkesë tani": { en: "Make a request now", it: "Fai una richiesta ora" },

  // ---- Footer ----
  "Mbështetje dhe email": { en: "Support and email", it: "Supporto ed email" },
  "Shërbimi ndaj Klientit": {
    en: "Customer Service",
    it: "Servizio Clienti",
  },
  "Pozicioni ynë": { en: "Our location", it: "La nostra posizione" },
  Italia: { en: "Italy", it: "Italia" },
  "IDA Solar është një prodhues italian i sistemeve fotovoltaike që zhvillon module, invertorë dhe sisteme ruajtjeje për ndërtesa, biznese dhe infrastrukturë energjetike.":
    {
      en: "IDA Solar is an Italian manufacturer of photovoltaic systems that develops modules, inverters and storage systems for buildings, businesses and energy infrastructure.",
      it: "IDA Solar è un produttore italiano di sistemi fotovoltaici che sviluppa moduli, inverter e sistemi di accumulo per edifici, aziende e infrastrutture energetiche.",
    },
  Agjenci: { en: "Agency", it: "Azienda" },
  "Kush jemi ne": { en: "Who we are", it: "Chi siamo" },
  Projekte: { en: "Projects", it: "Progetti" },
  Kontaktet: { en: "Contacts", it: "Contatti" },
  Produkte: { en: "Products", it: "Prodotti" },
  "Module fotovoltaike": { en: "Photovoltaic modules", it: "Moduli fotovoltaici" },
  "Sistemi e Magazinimit": { en: "Storage systems", it: "Sistemi di accumulo" },
  Inverter: { en: "Inverter", it: "Inverter" },
  Informacion: { en: "Information", it: "Informazioni" },
  "Të drejtat e autorit © 2026 IDA SOLAR. Të gjitha të drejtat e rezervuara.": {
    en: "Copyright © 2026 IDA SOLAR. All rights reserved.",
    it: "Copyright © 2026 IDA SOLAR. Tutti i diritti riservati.",
  },
  "Zgjidh gjuhën": { en: "Choose language", it: "Scegli la lingua" },

  // ---- Modal ----
  "FOL ME NJË EKSPERT": { en: "TALK TO AN EXPERT", it: "PARLA CON UN ESPERTO" },
  "Le ta projektojmë": { en: "Let's design it", it: "Progettiamolo" },
  "së bashku.": { en: "together.", it: "insieme." },
  "Na lër të dhënat bazë dhe një ekspert i IDA SOLAR do të të kontaktojë.": {
    en: "Leave your basic details and an IDA SOLAR expert will contact you.",
    it: "Lasciaci i dati di base e un esperto IDA SOLAR ti contatterà.",
  },
  "Kërkesa u dërgua!": { en: "Request sent!", it: "Richiesta inviata!" },
  "Faleminderit. Një ekspert i IDA SOLAR do të të kontaktojë së shpejti për të projektuar sistemin tënd.":
    {
      en: "Thank you. An IDA SOLAR expert will contact you soon to design your system.",
      it: "Grazie. Un esperto IDA SOLAR ti contatterà presto per progettare il tuo sistema.",
    },
  "Dërgo një kërkesë tjetër": {
    en: "Send another request",
    it: "Invia un'altra richiesta",
  },
  Mbyll: { en: "Close", it: "Chiudi" },
  "Mbyll dialogun": { en: "Close dialog", it: "Chiudi la finestra" },
  "Kërko konsultën": { en: "Request the consultation", it: "Richiedi la consulenza" },
  "Ne e përdorim këtë informacion vetëm për të të kontaktuar rreth kërkesës.": {
    en: "We use this information only to contact you about your request.",
    it: "Usiamo queste informazioni solo per contattarti in merito alla tua richiesta.",
  },
  "Konsulta u kërkua": { en: "Consultation requested", it: "Consulenza richiesta" },
  "Faleminderit! Një ekspert i IDA SOLAR do të të kontaktojë.": {
    en: "Thank you! An IDA SOLAR expert will contact you.",
    it: "Grazie! Un esperto IDA SOLAR ti contatterà.",
  },
  "p.sh. Arta Hoxha": { en: "e.g. Arta Hoxha", it: "es. Arta Hoxha" },
  "Panele diellore të integruara në çati": {
    en: "Solar panels integrated into the roof",
    it: "Pannelli solari integrati nel tetto",
  },
  "Mbyll dialogun ": { en: "Close dialog", it: "Chiudi la finestra" },

  // ---- Made in Italy ----
  "Prodhim MADE IN ITALY": {
    en: "Production MADE IN ITALY",
    it: "Produzione MADE IN ITALY",
    es: "Producción MADE IN ITALY",
    fr: "Production MADE IN ITALY",
    de: "Produktion MADE IN ITALY",
  },
  "Sistemet IDA Solar projektohen dhe prodhohen në Itali për të garantuar cilësi, besueshmëri dhe kontroll të drejtpërdrejtë mbi zinxhirin e prodhimit. Kompania projekton, prodhon dhe integron sisteme të plota energjetike, duke operuar në çdo shkallë: rezidenciale, mikpritje, industriale dhe parqe fotovoltaike.":
    {
      en: "IDA Solar systems are designed and produced in Italy to guarantee quality, reliability and direct control over the production chain. The company designs, produces and integrates complete energy systems, operating at every scale: residential, hospitality, industrial and photovoltaic parks.",
      it: "I sistemi IDA Solar sono progettati e prodotti in Italia per garantire qualità, affidabilità e controllo diretto sulla filiera produttiva. L'azienda progetta, produce e integra sistemi energetici completi, operando su ogni scala: residenziale, hospitality, industriale e parchi fotovoltaici.",
      es: "Los sistemas IDA Solar se diseñan y producen en Italia para garantizar calidad, fiabilidad y control directo sobre la cadena de producción. La empresa diseña, produce e integra sistemas energéticos completos, operando a todas las escalas: residencial, hostelería, industrial y parques fotovoltaicos.",
      fr: "Les systèmes IDA Solar sont conçus et produits en Italie pour garantir qualité, fiabilité et contrôle direct de la chaîne de production. L'entreprise conçoit, produit et intègre des systèmes énergétiques complets, à toutes les échelles : résidentiel, hôtellerie, industriel et parcs photovoltaïques.",
      de: "Die IDA Solar Systeme werden in Italien entworfen und produziert, um Qualität, Zuverlässigkeit und direkte Kontrolle über die Produktionskette zu gewährleisten. Das Unternehmen entwickelt, produziert und integriert komplette Energiesysteme in jeder Größenordnung: Wohnbereich, Hotellerie, Industrie und Photovoltaikparks.",
    },

  // ---- Why IDA Solar ----
  "PSE IDA SOLAR": {
    en: "WHY IDA SOLAR",
    it: "PERCHÉ IDA SOLAR",
    es: "POR QUÉ IDA SOLAR",
    fr: "POURQUOI IDA SOLAR",
    de: "WARUM IDA SOLAR",
  },
  "Pse të zgjidhni IDA Solar?": {
    en: "Why choose IDA Solar?",
    it: "Perché scegliere IDA Solar?",
    es: "¿Por qué elegir IDA Solar?",
    fr: "Pourquoi choisir IDA Solar ?",
    de: "Warum IDA Solar wählen?",
  },
  "Energjia e qëndrueshme": {
    en: "Sustainable energy",
    it: "Energia sostenibile",
    es: "Energía sostenible",
    fr: "Énergie durable",
    de: "Nachhaltige Energie",
  },
  "Prodhoni energji të pastër direkt nga dielli dhe furnizoni shtëpinë ose biznesin tuaj me një burim të rinovueshëm dhe me emetime të ulëta.":
    {
      en: "Produce clean energy directly from the sun and power your home or business with a renewable, low-emission source.",
      it: "Produci energia pulita direttamente dal sole e alimenta la tua casa o azienda con una fonte rinnovabile e a basse emissioni.",
      es: "Produce energía limpia directamente del sol y alimenta tu casa o empresa con una fuente renovable y de bajas emisiones.",
      fr: "Produisez une énergie propre directement à partir du soleil et alimentez votre maison ou votre entreprise avec une source renouvelable et à faibles émissions.",
      de: "Erzeuge saubere Energie direkt aus der Sonne und versorge dein Zuhause oder Unternehmen mit einer erneuerbaren, emissionsarmen Quelle.",
    },
  "Ulja e faturave": {
    en: "Lower bills",
    it: "Riduzione delle bollette",
    es: "Reducción de las facturas",
    fr: "Réduction des factures",
    de: "Niedrigere Rechnungen",
  },
  "Të prodhosh energjinë tënde do të thotë të reduktosh kostot e energjisë dhe të mbrohesh nga luhatjet e çmimeve të energjisë elektrike.":
    {
      en: "Producing your own energy means reducing energy costs and protecting yourself from electricity price fluctuations.",
      it: "Produrre la propria energia significa ridurre i costi energetici e proteggersi dalle variazioni dei prezzi dell'elettricità.",
      es: "Producir tu propia energía significa reducir los costos energéticos y protegerte de las variaciones del precio de la electricidad.",
      fr: "Produire sa propre énergie signifie réduire les coûts énergétiques et se protéger des variations du prix de l'électricité.",
      de: "Eigene Energie zu erzeugen bedeutet, Energiekosten zu senken und sich vor Strompreisschwankungen zu schützen.",
    },
  "Jetëgjatësia": {
    en: "Long lifespan",
    it: "Lunga durata",
    es: "Larga duración",
    fr: "Longue durée de vie",
    de: "Lange Lebensdauer",
  },
  "Sistemet fotovoltaike IDA Solar janë projektuar për performancë të besueshme afatgjatë, me komponentë të zhvilluar për stabilitet operativ për mbi 25 vjet.":
    {
      en: "IDA Solar photovoltaic systems are designed for reliable long-term performance, with components developed for operational stability for over 25 years.",
      it: "I sistemi fotovoltaici IDA Solar sono progettati per prestazioni affidabili nel lungo periodo, con componenti sviluppati per garantire stabilità operativa per oltre 25 anni.",
      es: "Los sistemas fotovoltaicos IDA Solar están diseñados para un rendimiento fiable a largo plazo, con componentes desarrollados para garantizar estabilidad operativa durante más de 25 años.",
      fr: "Les systèmes photovoltaïques IDA Solar sont conçus pour des performances fiables à long terme, avec des composants développés pour une stabilité opérationnelle de plus de 25 ans.",
      de: "Die Photovoltaiksysteme von IDA Solar sind auf zuverlässige Langzeitleistung ausgelegt, mit Komponenten für über 25 Jahre Betriebsstabilität.",
    },
  "Kontroll inteligjent i energjisë": {
    en: "Smart energy control",
    it: "Controllo intelligente dell'energia",
    es: "Control inteligente de la energía",
    fr: "Contrôle intelligent de l'énergie",
    de: "Intelligente Energiesteuerung",
  },
  "Sistemet IDA Solar ju lejojnë të monitoroni dhe menaxhoni prodhimin dhe konsumin e energjisë, duke optimizuar përdorimin e energjisë së prodhuar.":
    {
      en: "IDA Solar systems let you monitor and manage energy production and consumption, optimizing the use of the energy produced.",
      it: "I sistemi IDA Solar permettono di monitorare e gestire la produzione e il consumo energetico, ottimizzando l'utilizzo dell'energia prodotta.",
      es: "Los sistemas IDA Solar permiten monitorizar y gestionar la producción y el consumo de energía, optimizando el uso de la energía producida.",
      fr: "Les systèmes IDA Solar permettent de surveiller et de gérer la production et la consommation d'énergie, en optimisant l'utilisation de l'énergie produite.",
      de: "Mit den IDA Solar Systemen kannst du Energieerzeugung und -verbrauch überwachen und steuern und die Nutzung der erzeugten Energie optimieren.",
    },

  // ---- How it works ----
  "SI FUNKSIONON": {
    en: "HOW IT WORKS",
    it: "COME FUNZIONA",
    es: "CÓMO FUNCIONA",
    fr: "COMMENT ÇA MARCHE",
    de: "WIE ES FUNKTIONIERT",
  },
  "Si funksionon sistemi IDA Solar": {
    en: "How the IDA Solar system works",
    it: "Come funziona il sistema IDA Solar",
    es: "Cómo funciona el sistema IDA Solar",
    fr: "Comment fonctionne le système IDA Solar",
    de: "Wie das IDA Solar System funktioniert",
  },
  "Qasja IDA Solar integron projektimin, teknologjinë dhe menaxhimin e energjisë për t'i kthyer ndërtesat dhe infrastrukturat në sisteme të besueshme të prodhimit të energjisë.":
    {
      en: "The IDA Solar approach integrates design, technology and energy management to turn buildings and infrastructure into reliable energy production systems.",
      it: "L'approccio IDA Solar integra progettazione, tecnologia e gestione energetica per trasformare edifici e infrastrutture in sistemi di produzione energetica affidabili.",
      es: "El enfoque IDA Solar integra diseño, tecnología y gestión energética para convertir edificios e infraestructuras en sistemas fiables de producción de energía.",
      fr: "L'approche IDA Solar intègre conception, technologie et gestion énergétique pour transformer bâtiments et infrastructures en systèmes de production d'énergie fiables.",
      de: "Der IDA Solar Ansatz verbindet Planung, Technologie und Energiemanagement, um Gebäude und Infrastrukturen in zuverlässige Energieerzeugungssysteme zu verwandeln.",
    },
  "Analiza energjetike": {
    en: "Energy analysis",
    it: "Analisi energetica",
    es: "Análisis energético",
    fr: "Analyse énergétique",
    de: "Energieanalyse",
  },
  "Çdo projekt fillon me një studim teknik të konsumit, sipërfaqes së disponueshme dhe kushteve të ekspozimit. Kjo analizë lejon përcaktimin e konfigurimit më efikas energjetik.":
    {
      en: "Every project starts with a technical study of consumption, available surface and exposure conditions. This analysis defines the most efficient energy configuration.",
      it: "Ogni progetto inizia con uno studio tecnico dei consumi, della superficie disponibile e delle condizioni di esposizione. Questa analisi permette di definire la configurazione energetica più efficiente.",
      es: "Cada proyecto comienza con un estudio técnico de los consumos, la superficie disponible y las condiciones de exposición. Este análisis permite definir la configuración energética más eficiente.",
      fr: "Chaque projet commence par une étude technique des consommations, de la surface disponible et des conditions d'exposition. Cette analyse permet de définir la configuration énergétique la plus efficace.",
      de: "Jedes Projekt beginnt mit einer technischen Analyse von Verbrauch, verfügbarer Fläche und Ausrichtungsbedingungen. Diese Analyse definiert die effizienteste Energiekonfiguration.",
    },
  "Projektimi i sistemit": {
    en: "System design",
    it: "Progettazione del sistema",
    es: "Diseño del sistema",
    fr: "Conception du système",
    de: "Systemplanung",
  },
  "Sistemi konfigurohet duke kombinuar module fotovoltaike, inverter dhe sisteme akumulimi për të krijuar një platformë energjetike të qëndrueshme dhe të zgjerueshme.":
    {
      en: "The system is configured by combining photovoltaic modules, inverters and storage systems to create a stable and scalable energy platform.",
      it: "Il sistema viene configurato combinando moduli fotovoltaici, inverter e sistemi di accumulo per creare una piattaforma energetica stabile e scalabile.",
      es: "El sistema se configura combinando módulos fotovoltaicos, inversores y sistemas de almacenamiento para crear una plataforma energética estable y escalable.",
      fr: "Le système est configuré en combinant modules photovoltaïques, onduleurs et systèmes de stockage pour créer une plateforme énergétique stable et évolutive.",
      de: "Das System wird durch die Kombination von Photovoltaikmodulen, Wechselrichtern und Speichersystemen zu einer stabilen und skalierbaren Energieplattform konfiguriert.",
    },
  "Prodhimi i vazhdueshëm i energjisë": {
    en: "Continuous energy production",
    it: "Produzione energetica continua",
    es: "Producción energética continua",
    fr: "Production d'énergie continue",
    de: "Kontinuierliche Energieproduktion",
  },
  "Pasi aktivizohet, sistemi prodhon energji të rinovueshme për të furnizuar ndërtesat dhe infrastrukturat, duke reduktuar varësinë nga rrjeti elektrik.":
    {
      en: "Once active, the system produces renewable energy to power buildings and infrastructure, reducing dependence on the electricity grid.",
      it: "Una volta attivo, il sistema produce energia rinnovabile per alimentare edifici e infrastrutture, riducendo la dipendenza dalla rete elettrica.",
      es: "Una vez activo, el sistema produce energía renovable para alimentar edificios e infraestructuras, reduciendo la dependencia de la red eléctrica.",
      fr: "Une fois actif, le système produit de l'énergie renouvelable pour alimenter bâtiments et infrastructures, en réduisant la dépendance au réseau électrique.",
      de: "Einmal aktiv, erzeugt das System erneuerbare Energie für Gebäude und Infrastrukturen und reduziert die Abhängigkeit vom Stromnetz.",
    },

  // ---- Solutions ----
  "ZGJIDHJET FOTOVOLTAIKE": {
    en: "PHOTOVOLTAIC SOLUTIONS",
    it: "SOLUZIONI FOTOVOLTAICHE",
    es: "SOLUCIONES FOTOVOLTAICAS",
    fr: "SOLUTIONS PHOTOVOLTAÏQUES",
    de: "PHOTOVOLTAIK-LÖSUNGEN",
  },
  "Zgjidhje fotovoltaike": {
    en: "Photovoltaic solutions",
    it: "Soluzioni fotovoltaiche",
    es: "Soluciones fotovoltaicas",
    fr: "Solutions photovoltaïques",
    de: "Photovoltaik-Lösungen",
  },
  "Energjia diellore e projektuar për ndërtesa dhe infrastruktura. Module, inverter dhe akumulim në një sistem të vetëm të integruar.":
    {
      en: "Solar energy designed for buildings and infrastructure. Modules, inverters and storage in a single integrated system.",
      it: "Energia solare progettata per edifici e infrastrutture. Moduli, inverter e accumulo in un unico sistema integrato.",
      es: "Energía solar diseñada para edificios e infraestructuras. Módulos, inversores y almacenamiento en un único sistema integrado.",
      fr: "Énergie solaire conçue pour les bâtiments et les infrastructures. Modules, onduleurs et stockage dans un seul système intégré.",
      de: "Solarenergie für Gebäude und Infrastrukturen. Module, Wechselrichter und Speicher in einem einzigen integrierten System.",
    },
  "Sistemi 3 kW": {
    en: "3 kW system",
    it: "Sistema da 3 kW",
    es: "Sistema de 3 kW",
    fr: "Système de 3 kW",
    de: "3 kW System",
  },
  "Ideal për familje me 2 persona": {
    en: "Ideal for households of 2 people",
    it: "Ideale per famiglie di 2 persone",
    es: "Ideal para familias de 2 personas",
    fr: "Idéal pour les familles de 2 personnes",
    de: "Ideal für Haushalte mit 2 Personen",
  },
  "Sistemi 4 kW": {
    en: "4 kW system",
    it: "Sistema da 4 kW",
    es: "Sistema de 4 kW",
    fr: "Système de 4 kW",
    de: "4 kW System",
  },
  "Zgjedhja më e përhapur midis familjeve": {
    en: "The most common choice among families",
    it: "La scelta più diffusa tra le famiglie",
    es: "La opción más común entre las familias",
    fr: "Le choix le plus répandu parmi les familles",
    de: "Die häufigste Wahl unter Familien",
  },
  "Sistemi 5 kW": {
    en: "5 kW system",
    it: "Sistema da 5 kW",
    es: "Sistema de 5 kW",
    fr: "Système de 5 kW",
    de: "5 kW System",
  },
  "Ideal për shtëpi plotësisht elektrike": {
    en: "Ideal for fully electric homes",
    it: "Ideale per case completamente elettriche",
    es: "Ideal para viviendas totalmente eléctricas",
    fr: "Idéal pour les maisons entièrement électriques",
    de: "Ideal für vollelektrische Häuser",
  },
  "Perfekt për banesa private": {
    en: "Perfect for private homes",
    it: "Perfetto per abitazioni private",
    es: "Perfecto para viviendas privadas",
    fr: "Parfait pour les habitations privées",
    de: "Perfekt für Privathäuser",
  },
  "Zgjidhje ekonomike dhe efikase": {
    en: "Economical and efficient solution",
    it: "Soluzione economica ed efficiente",
    es: "Solución económica y eficiente",
    fr: "Solution économique et efficace",
    de: "Wirtschaftliche und effiziente Lösung",
  },
  "Subvencione deri në 50%": {
    en: "Incentives up to 50%",
    it: "Incentivi fino al 50%",
    es: "Incentivos de hasta el 50%",
    fr: "Incitations jusqu'à 50 %",
    de: "Förderungen bis zu 50 %",
  },
  "Mundësi për të injektuar dhe shitur energji në rrjet": {
    en: "Ability to feed and sell energy to the grid",
    it: "Possibilità di immettere e vendere energia in rete",
    es: "Posibilidad de inyectar y vender energía a la red",
    fr: "Possibilité d'injecter et de vendre de l'énergie au réseau",
    de: "Möglichkeit, Energie ins Netz einzuspeisen und zu verkaufen",
  },
  "I përshtatshëm për familje me 3–4 persona": {
    en: "Suitable for households of 3–4 people",
    it: "Adatto per famiglie di 3–4 persone",
    es: "Adecuado para familias de 3–4 personas",
    fr: "Adapté aux familles de 3 à 4 personnes",
    de: "Geeignet für Haushalte mit 3–4 Personen",
  },
  "Rendiment i shkëlqyer energjetik gjatë gjithë vitit": {
    en: "Excellent energy yield throughout the year",
    it: "Ottima resa energetica durante tutto l'anno",
    es: "Excelente rendimiento energético durante todo el año",
    fr: "Excellent rendement énergétique toute l'année",
    de: "Hervorragender Energieertrag das ganze Jahr über",
  },
  "Menduar për familje me konsum të lartë": {
    en: "Designed for high-consumption households",
    it: "Pensato per famiglie con consumi elevati",
    es: "Pensado para familias con consumos elevados",
    fr: "Pensé pour les familles à forte consommation",
    de: "Für Haushalte mit hohem Verbrauch",
  },
  "Nivel i lartë i autonomisë energjetike": {
    en: "High level of energy autonomy",
    it: "Alto livello di autonomia energetica",
    es: "Alto nivel de autonomía energética",
    fr: "Haut niveau d'autonomie énergétique",
    de: "Hohes Maß an Energieautonomie",
  },

  // ---- Accumulo / module ----
  "Energjia e prodhuar nga modulet fotovoltaike menaxhohet nga inverteri dhe mund të ruhet në sistemet e akumulimit për t'u përdorur kur është e nevojshme, duke garantuar vazhdimësi energjetike edhe në orët e mbrëmjes ose në momentet e konsumit më të lartë.":
    {
      en: "The energy produced by the photovoltaic modules is managed by the inverter and can be stored in the accumulation systems to be used when needed, guaranteeing energy continuity even in the evening hours or at times of highest consumption.",
      it: "L'energia prodotta dai moduli fotovoltaici viene gestita dall'inverter e può essere immagazzinata nei sistemi di accumulo per essere utilizzata quando necessario, garantendo continuità energetica anche nelle ore serali o nei momenti di maggiore consumo.",
      es: "La energía producida por los módulos fotovoltaicos es gestionada por el inversor y puede almacenarse en los sistemas de acumulación para usarse cuando sea necesario, garantizando continuidad energética incluso por la noche o en los momentos de mayor consumo.",
      fr: "L'énergie produite par les modules photovoltaïques est gérée par l'onduleur et peut être stockée dans les systèmes d'accumulation pour être utilisée quand nécessaire, garantissant une continuité énergétique même le soir ou aux moments de plus forte consommation.",
      de: "Die von den Photovoltaikmodulen erzeugte Energie wird vom Wechselrichter gesteuert und kann in den Speichersystemen gespeichert werden, um bei Bedarf genutzt zu werden – für Energiekontinuität auch abends oder bei Spitzenverbrauch.",
    },
  "Çdo modul përbëhet nga shtresa të ndryshme të projektuara për të mbrojtur qelizat fotovoltaike dhe për të garantuar efikasitet, stabilitet dhe qëndrueshmëri me kalimin e kohës.":
    {
      en: "Every module consists of different layers designed to protect the photovoltaic cells and guarantee efficiency, stability and durability over time.",
      it: "Ogni modulo è composto da diversi strati progettati per proteggere le celle fotovoltaiche e garantire efficienza, stabilità e durata nel tempo.",
      es: "Cada módulo consta de diferentes capas diseñadas para proteger las células fotovoltaicas y garantizar eficiencia, estabilidad y durabilidad en el tiempo.",
      fr: "Chaque module est composé de différentes couches conçues pour protéger les cellules photovoltaïques et garantir efficacité, stabilité et durabilité dans le temps.",
      de: "Jedes Modul besteht aus verschiedenen Schichten, die die Photovoltaikzellen schützen und Effizienz, Stabilität und Langlebigkeit gewährleisten.",
    },

  // ---- New sections v2 (matching idasolar.it) ----
  "Energji diellore": {
    en: "Solar energy",
    it: "Energia solare",
    es: "Energía solar",
    fr: "Énergie solaire",
    de: "Solarenergie",
  },
  "Projektuar për të ardhmen": {
    en: "Designed for the future",
    it: "Progettata per il futuro",
    es: "Diseñada para el futuro",
    fr: "Conçue pour l'avenir",
    de: "Für die Zukunft gemacht",
  },
  "Shfrytëzo subvencionet 2026": {
    en: "Take advantage of the 2026 incentives",
    it: "Sfrutta gli incentivi 2026",
    es: "Aprovecha los incentivos 2026",
    fr: "Profitez des incitations 2026",
    de: "Nutze die Förderungen 2026",
  },
  "Kërko konsultë": {
    en: "Request a consultation",
    it: "Richiedi consulenza",
    es: "Solicita asesoría",
    fr: "Demander un conseil",
    de: "Beratung anfordern",
  },
  "Prodhim italian": {
    en: "Italian production",
    it: "Produzione italiana",
    es: "Producción italiana",
    fr: "Production italienne",
    de: "Italienische Produktion",
  },
  "Sistem i plotë energjetik": {
    en: "Complete energy system",
    it: "Sistema energetico completo",
    es: "Sistema energético completo",
    fr: "Système énergétique complet",
    de: "Komplettes Energiesystem",
  },
  "Prodhimi, projektimi dhe instalimi janë të integruar për të garantuar cilësi, efikasitet dhe besueshmëri me kalimin e kohës.":
    {
      en: "Production, design and installation are integrated to guarantee quality, efficiency and reliability over time.",
      it: "Produzione, progettazione e installazione sono integrate per garantire qualità, efficienza e affidabilità nel tempo.",
      es: "La producción, el diseño y la instalación están integrados para garantizar calidad, eficiencia y fiabilidad a lo largo del tiempo.",
      fr: "La production, la conception et l'installation sont intégrées pour garantir qualité, efficacité et fiabilité dans le temps.",
      de: "Produktion, Planung und Installation sind integriert, um Qualität, Effizienz und Zuverlässigkeit über die Zeit zu gewährleisten.",
    },
  "Prodhim Made in Italy": {
    en: "Production Made in Italy",
    it: "Produzione Made in Italy",
    es: "Producción Made in Italy",
    fr: "Production Made in Italy",
    de: "Produktion Made in Italy",
  },
  "Sistemet IDA Solar projektohen dhe prodhohen në Itali sipas standardeve industriale evropiane.":
    {
      en: "IDA Solar systems are designed and produced in Italy according to European industrial standards.",
      it: "I sistemi IDA Solar sono progettati e prodotti in Italia secondo standard industriali europei.",
      es: "Los sistemas IDA Solar se diseñan y producen en Italia según estándares industriales europeos.",
      fr: "Les systèmes IDA Solar sont conçus et produits en Italie selon des normes industrielles européennes.",
      de: "Die IDA Solar Systeme werden in Italien nach europäischen Industriestandards entwickelt und produziert.",
    },
  "kontroll i drejtpërdrejtë mbi cilësinë": {
    en: "direct control over quality",
    it: "controllo diretto sulla qualità",
    es: "control directo sobre la calidad",
    fr: "contrôle direct de la qualité",
    de: "direkte Qualitätskontrolle",
  },
  "zinxhir prodhimi i gjurmueshëm": {
    en: "traceable production chain",
    it: "filiera produttiva tracciabile",
    es: "cadena de producción trazable",
    fr: "chaîne de production traçable",
    de: "nachverfolgbare Produktionskette",
  },
  "mbështetje teknike e specializuar": {
    en: "specialized technical support",
    it: "supporto tecnico specializzato",
    es: "soporte técnico especializado",
    fr: "support technique spécialisé",
    de: "spezialisierter technischer Support",
  },
  "besueshmëri afatgjatë": {
    en: "long-term reliability",
    it: "affidabilità nel lungo periodo",
    es: "fiabilidad a largo plazo",
    fr: "fiabilité à long terme",
    de: "langfristige Zuverlässigkeit",
  },
  "Sisteme energjetike të integruara": {
    en: "Integrated energy systems",
    it: "Sistemi energetici integrati",
    es: "Sistemas energéticos integrados",
    fr: "Systèmes énergétiques intégrés",
    de: "Integrierte Energiesysteme",
  },
  "module fotovoltaike me efikasitet të lartë": {
    en: "high-efficiency photovoltaic modules",
    it: "moduli fotovoltaici ad alta efficienza",
    es: "módulos fotovoltaicos de alta eficiencia",
    fr: "modules photovoltaïques à haut rendement",
    de: "hocheffiziente Photovoltaikmodule",
  },
  "inverter inteligjentë": {
    en: "smart inverters",
    it: "inverter intelligenti",
    es: "inversores inteligentes",
    fr: "onduleurs intelligents",
    de: "intelligente Wechselrichter",
  },
  "sisteme akumulimi energjetik": {
    en: "energy storage systems",
    it: "sistemi di accumulo energetico",
    es: "sistemas de almacenamiento de energía",
    fr: "systèmes de stockage d'énergie",
    de: "Energiespeichersysteme",
  },
  "menaxhim dhe monitorim i sistemit": {
    en: "system management and monitoring",
    it: "gestione e monitoraggio del sistema",
    es: "gestión y monitorización del sistema",
    fr: "gestion et surveillance du système",
    de: "Systemverwaltung und -überwachung",
  },
  "Çdo komponent është projektuar për të punuar së bashku.": {
    en: "Every component is designed to work together.",
    it: "Ogni componente è progettato per lavorare insieme.",
    es: "Cada componente está diseñado para trabajar en conjunto.",
    fr: "Chaque composant est conçu pour fonctionner ensemble.",
    de: "Jede Komponente ist darauf ausgelegt, zusammenzuarbeiten.",
  },
  "ENERGJI DIELLORE": {
    en: "SOLAR ENERGY",
    it: "ENERGIA SOLARE",
    es: "ENERGÍA SOLAR",
    fr: "ÉNERGIE SOLAIRE",
    de: "SOLARENERGIE",
  },
  "Kurseni energji": {
    en: "Save energy",
    it: "Risparmiare energia",
    es: "Ahorrar energía",
    fr: "Économiser l'énergie",
    de: "Energie sparen",
  },
  "Prodho vlerë": {
    en: "Produce value",
    it: "Produrre valore",
    es: "Producir valor",
    fr: "Produire de la valeur",
    de: "Wert erzeugen",
  },
  "IDA Solar zhvillon module fotovoltaike, inverter dhe sisteme akumulimi të projektuar për të funksionuar si një ekosistem i vetëm energjetik. Çdo produkt është projektuar për të garantuar efikasitet, besueshmëri dhe integrim të plotë brenda platformës energjetike IDA.":
    {
      en: "IDA Solar develops photovoltaic modules, inverters and storage systems designed to work as a single energy ecosystem. Every product is designed to guarantee efficiency, reliability and complete integration within the IDA energy platform.",
      it: "IDA Solar sviluppa moduli fotovoltaici, inverter e sistemi di accumulo progettati per funzionare come un unico ecosistema energetico. Ogni prodotto è progettato per garantire efficienza, affidabilità e integrazione completa all'interno della piattaforma energetica IDA.",
      es: "IDA Solar desarrolla módulos fotovoltaicos, inversores y sistemas de almacenamiento diseñados para funcionar como un único ecosistema energético. Cada producto está diseñado para garantizar eficiencia, fiabilidad e integración completa dentro de la plataforma energética IDA.",
      fr: "IDA Solar développe des modules photovoltaïques, des onduleurs et des systèmes de stockage conçus pour fonctionner comme un seul écosystème énergétique. Chaque produit est conçu pour garantir efficacité, fiabilité et intégration complète au sein de la plateforme énergétique IDA.",
      de: "IDA Solar entwickelt Photovoltaikmodule, Wechselrichter und Speichersysteme, die als ein einziges Energie-Ökosystem funktionieren. Jedes Produkt ist darauf ausgelegt, Effizienz, Zuverlässigkeit und vollständige Integration in die IDA-Energieplattform zu gewährleisten.",
    },
  "Kthe ndërtesën tënde në një burim energjie": {
    en: "Turn your building into an energy source",
    it: "Trasforma il tuo edificio in una fonte di energia",
    es: "Convierte tu edificio en una fuente de energía",
    fr: "Transformez votre bâtiment en source d'énergie",
    de: "Mach dein Gebäude zu einer Energiequelle",
  },
  "Sistemet IDA Solar e kthejnë dritën e diellit në energji të besueshme për ndërtesa, biznesa dhe infrastruktura.":
    {
      en: "IDA Solar systems turn sunlight into reliable energy for buildings, businesses and infrastructure.",
      it: "I sistemi IDA Solar trasformano la luce del sole in energia affidabile per edifici, aziende e infrastrutture.",
      es: "Los sistemas IDA Solar convierten la luz del sol en energía fiable para edificios, empresas e infraestructuras.",
      fr: "Les systèmes IDA Solar transforment la lumière du soleil en énergie fiable pour les bâtiments, les entreprises et les infrastructures.",
      de: "Die IDA Solar Systeme verwandeln Sonnenlicht in zuverlässige Energie für Gebäude, Unternehmen und Infrastrukturen.",
    },
  "Zbulo Sistemet": {
    en: "Discover the systems",
    it: "Scopri i Sistemi",
    es: "Descubre los sistemas",
    fr: "Découvrir les systèmes",
    de: "Systeme entdecken",
  },

  // ---- Project descriptions (ida solar real /progetti) ----
  "Sistem i integruar energjie i zhvilluar për një strukturë mikpritëse me zënie të lartë, i projektuar për të garantuar vazhdimësi operacionale, reduktim të konsumit dhe menaxhim efikas të energjisë gjatë gjithë vitit.":
    {
      it: "Sistema energetico integrato sviluppato per una struttura hospitality ad alta occupazione, progettato per garantire continuità operativa, riduzione dei consumi e gestione efficiente dell'energia durante tutto l'anno.",
      en: "Integrated energy system developed for a high-occupancy hospitality facility, designed to ensure operational continuity, reduced consumption and efficient energy management throughout the year.",
      es: "Sistema energético integrado desarrollado para una estructura hotelera de alta ocupación, diseñado para garantizar continuidad operativa, reducción de consumos y gestión eficiente de la energía durante todo el año.",
      fr: "Système énergétique intégré développé pour une structure hôtelière à forte occupation, conçu pour garantir la continuité opérationnelle, la réduction des consommations et une gestion efficace de l'énergie toute l'année.",
      de: "Integriertes Energiesystem für eine stark ausgelastete Hospitality-Einrichtung, ausgelegt auf Betriebskontinuität, reduzierten Verbrauch und effizientes Energiemanagement das ganze Jahr.",
    },
  "Impiant fotovoltaik i projektuar për të mbështetur aktivitete prodhuese dhe logjistike, duke optimizuar kostot energjetike dhe duke garantuar stabilitet operativ në proceset e biznesit.":
    {
      it: "Impianto fotovoltaico progettato per supportare attività produttive e logistiche, ottimizzando i costi energetici e garantendo stabilità operativa nei processi aziendali.",
      en: "Photovoltaic system designed to support production and logistics activities, optimizing energy costs and ensuring operational stability in business processes.",
      es: "Instalación fotovoltaica diseñada para apoyar actividades productivas y logísticas, optimizando los costes energéticos y garantizando estabilidad operativa en los procesos empresariales.",
      fr: "Installation photovoltaïque conçue pour soutenir les activités de production et de logistique, en optimisant les coûts énergétiques et en garantissant la stabilité opérationnelle des processus.",
      de: "Photovoltaikanlage zur Unterstützung von Produktions- und Logistikprozessen, die Energiekosten optimiert und Betriebsstabilität gewährleistet.",
    },
  "Sistem i integruar energjie për ndërtesë drejtuese dhe hapësira tregtare, i zhvilluar për të përmirësuar efikasitetin energjetik dhe për të reduktuar varësinë nga rrjeti.":
    {
      it: "Sistema energetico integrato per edificio direzionale e spazi commerciali, sviluppato per migliorare l'efficienza energetica e ridurre la dipendenza dalla rete.",
      en: "Integrated energy system for an office building and commercial spaces, developed to improve energy efficiency and reduce dependence on the grid.",
      es: "Sistema energético integrado para edificio de oficinas y espacios comerciales, desarrollado para mejorar la eficiencia energética y reducir la dependencia de la red.",
      fr: "Système énergétique intégré pour immeuble de bureaux et espaces commerciaux, développé pour améliorer l'efficacité énergétique et réduire la dépendance au réseau.",
      de: "Integriertes Energiesystem für Bürogebäude und Gewerbeflächen, entwickelt zur Verbesserung der Energieeffizienz und Verringerung der Netzabhängigkeit.",
    },
  "Zgjidhje energjetike e projektuar për aktivitete urbane me përdorim të lartë energjie, me fokus në besueshmëri, vazhdimësi dhe optimizim të konsumit.":
    {
      it: "Soluzione energetica progettata per attività urbane ad elevato utilizzo energetico, con focus su affidabilità, continuità e ottimizzazione dei consumi.",
      en: "Energy solution designed for energy-intensive urban activities, focusing on reliability, continuity and consumption optimization.",
      es: "Solución energética diseñada para actividades urbanas de alto consumo energético, con enfoque en fiabilidad, continuidad y optimización del consumo.",
      fr: "Solution énergétique conçue pour des activités urbaines à forte consommation d'énergie, axée sur la fiabilité, la continuité et l'optimisation des consommations.",
      de: "Energielösung für energieintensive städtische Aktivitäten mit Fokus auf Zuverlässigkeit, Kontinuität und Verbrauchsoptimierung.",
    },

  // ---- Battery page (ida solar /sistemi-di-accumulo) ----
  "Sistemet e akumulimit IDA Solar mundësojnë ruajtjen e energjisë së prodhuar për të optimizuar përdorimin e saj, për të reduktuar varësinë nga rrjeti dhe për të garantuar vazhdimësi operacionale. Të integruara në sistem, përmirësojnë efikasitetin e përgjithshëm dhe kontrollin energjetik.":
    {
      it: "I sistemi di accumulo Ida Solar permettono di immagazzinare l'energia prodotta per ottimizzarne l'utilizzo, ridurre la dipendenza dalla rete e garantire continuità operativa. Integrati nel sistema, migliorano l'efficienza complessiva e il controllo energetico.",
      en: "IDA Solar storage systems allow you to store the energy produced to optimize its use, reduce dependence on the grid and guarantee operational continuity. Integrated into the system, they improve overall efficiency and energy control.",
      es: "Los sistemas de almacenamiento IDA Solar permiten almacenar la energía producida para optimizar su uso, reducir la dependencia de la red y garantizar la continuidad operativa. Integrados en el sistema, mejoran la eficiencia global y el control energético.",
      fr: "Les systèmes de stockage IDA Solar permettent de stocker l'énergie produite pour en optimiser l'utilisation, réduire la dépendance au réseau et garantir la continuité opérationnelle. Intégrés au système, ils améliorent l'efficacité globale et le contrôle énergétique.",
      de: "Die Speichersysteme von IDA Solar ermöglichen die Speicherung der erzeugten Energie zur Optimierung der Nutzung, zur Verringerung der Netzabhängigkeit und zur Gewährleistung der Betriebskontinuität. In das System integriert, verbessern sie die Gesamteffizienz und die Energiesteuerung.",
    },
  "Sistem modular me efikasitet të lartë i bazuar në teknologjinë LiFePO4, i projektuar për të garantuar siguri, jetëgjatësi dhe performancë konstante me kalimin e kohës. Konfigurimi i zgjerueshëm lejon përshtatjen e kapacitetit sipas nevojave të projektit.":
    {
      it: "Sistema modulare ad alta efficienza basato su tecnologia LiFePO4, progettato per garantire sicurezza, durata e prestazioni costanti nel tempo. La configurazione espandibile consente di adattare la capacità alle esigenze del progetto.",
      en: "High-efficiency modular system based on LiFePO4 technology, designed to guarantee safety, durability and constant performance over time. The expandable configuration allows the capacity to be adapted to project needs.",
      es: "Sistema modular de alta eficiencia basado en tecnología LiFePO4, diseñado para garantizar seguridad, durabilidad y rendimiento constante en el tiempo. La configuración ampliable permite adaptar la capacidad a las necesidades del proyecto.",
      fr: "Système modulaire à haut rendement basé sur la technologie LiFePO4, conçu pour garantir sécurité, durabilité et performances constantes dans le temps. La configuration évolutive permet d'adapter la capacité aux besoins du projet.",
      de: "Hocheffizientes modulares System auf Basis der LiFePO4-Technologie, ausgelegt auf Sicherheit, Langlebigkeit und konstante Leistung über die Zeit. Die erweiterbare Konfiguration ermöglicht die Anpassung der Kapazität an die Projektanforderungen.",
    },
  "Zgjidhje për aplikacione industriale dhe në shkallë të gjerë, me sisteme të integruara akumulimi dhe inverteri. Projektuar për instalim të shpejtë dhe menaxhim efikas të energjisë.":
    {
      it: "Soluzione per applicazioni industriali e su larga scala, con sistemi integrati di accumulo e inverter. Progettata per installazione rapida e gestione efficiente dell'energia.",
      en: "Solution for industrial and large-scale applications, with integrated storage and inverter systems. Designed for quick installation and efficient energy management.",
      es: "Solución para aplicaciones industriales y a gran escala, con sistemas integrados de almacenamiento e inversor. Diseñada para una instalación rápida y una gestión eficiente de la energía.",
      fr: "Solution pour applications industrielles et à grande échelle, avec systèmes intégrés de stockage et onduleur. Conçue pour une installation rapide et une gestion efficace de l'énergie.",
      de: "Lösung für industrielle und großtechnische Anwendungen mit integrierten Speicher- und Wechselrichtersystemen. Konzipiert für schnelle Installation und effizientes Energiemanagement.",
    },
  "Sistem kompakt për përdorim rezidencial, i integrueshëm me module plug & play. Mundëson akumulim lokal dhe monitorim të thjeshtë përmes aplikacionit.":
    {
      it: "Sistema compatto per uso residenziale, integrabile con moduli plug & play. Permette accumulo locale e monitoraggio semplice tramite applicazione.",
      en: "Compact system for residential use, integrable with plug & play modules. Enables local storage and simple monitoring via app.",
      es: "Sistema compacto para uso residencial, integrable con módulos plug & play. Permite almacenamiento local y monitorización sencilla mediante aplicación.",
      fr: "Système compact pour usage résidentiel, intégrable avec modules plug & play. Permet un stockage local et un suivi simple via l'application.",
      de: "Kompaktes System für den Wohnbereich, integrierbar mit Plug-&-Play-Modulen. Ermöglicht lokale Speicherung und einfache Überwachung per App.",
    },
  "Sistem i integruar me kapacitet të lartë, i projektuar për aplikacione të avancuara. Përfshin menaxhim inteligjent, ftohje dhe kontroll të plotë të sistemit.":
    {
      it: "Sistema integrato ad alta capacità, progettato per applicazioni avanzate. Include gestione intelligente, raffreddamento e controllo completo del sistema.",
      en: "Integrated high-capacity system, designed for advanced applications. Includes intelligent management, cooling and full system control.",
      es: "Sistema integrado de alta capacidad, diseñado para aplicaciones avanzadas. Incluye gestión inteligente, refrigeración y control completo del sistema.",
      fr: "Système intégré à haute capacité, conçu pour des applications avancées. Comprend gestion intelligente, refroidissement et contrôle complet du système.",
      de: "Integriertes System mit hoher Kapazität für anspruchsvolle Anwendungen. Enthält intelligentes Management, Kühlung und vollständige Systemsteuerung.",
    },
  "Shkarko fletën teknike": {
    en: "Download datasheet",
    it: "Scarica scheda tecnica",
    es: "Descargar ficha técnica",
    fr: "Télécharger la fiche technique",
    de: "Datenblatt herunterladen",
  },
  "Akumulimi plotëson sistemin energjetik": {
    en: "Storage completes the energy system",
    it: "L'accumulo completa il sistema energetico",
    es: "El almacenamiento completa el sistema energético",
    fr: "Le stockage complète le système énergétique",
    de: "Der Speicher vervollständigt das Energiesystem",
  },

  // ---- Inverter page (ida solar /inverter) ----
  "Inverterët IDA Solar menaxhojnë dhe transformojnë energjinë e prodhuar, duke garantuar kontroll, siguri dhe vazhdimësi operacionale brenda sistemit.":
    {
      it: "Gli inverter Ida Solar gestiscono e trasformano l'energia prodotta, garantendo controllo, sicurezza e continuità operativa all'interno del sistema.",
      en: "IDA Solar inverters manage and transform the energy produced, guaranteeing control, safety and operational continuity within the system.",
      es: "Los inversores IDA Solar gestionan y transforman la energía producida, garantizando control, seguridad y continuidad operativa dentro del sistema.",
      fr: "Les onduleurs IDA Solar gèrent et transforment l'énergie produite, garantissant contrôle, sécurité et continuité opérationnelle au sein du système.",
      de: "Die Wechselrichter von IDA Solar steuern und wandeln die erzeugte Energie um und gewährleisten Kontrolle, Sicherheit und Betriebskontinuität im System.",
    },
  "Inverterët hibridë monofazë janë projektuar për aplikacione rezidenciale, me integrim të drejtpërdrejtë midis prodhimit dhe akumulimit. Mundësojnë menaxhim inteligjent të energjisë, monitorim të vazhdueshëm dhe funksion emergjence të integruar.":
    {
      it: "Gli inverter ibridi monofase sono progettati per applicazioni residenziali, con integrazione diretta tra produzione e accumulo. Consentono gestione intelligente dell'energia, monitoraggio continuo e funzione di emergenza integrata.",
      en: "Single-phase hybrid inverters are designed for residential applications, with direct integration between production and storage. They enable intelligent energy management, continuous monitoring and an integrated emergency function.",
      es: "Los inversores híbridos monofásicos están diseñados para aplicaciones residenciales, con integración directa entre producción y almacenamiento. Permiten gestión inteligente de la energía, monitorización continua y función de emergencia integrada.",
      fr: "Les onduleurs hybrides monophasés sont conçus pour les applications résidentielles, avec une intégration directe entre production et stockage. Ils permettent une gestion intelligente de l'énergie, un suivi continu et une fonction d'urgence intégrée.",
      de: "Einphasige Hybrid-Wechselrichter sind für Wohnanwendungen konzipiert, mit direkter Integration von Erzeugung und Speicher. Sie ermöglichen intelligentes Energiemanagement, kontinuierliche Überwachung und eine integrierte Notstromfunktion.",
    },
  "Versioni trefazor është zhvilluar për sisteme më komplekse, duke garantuar stabilitet operativ dhe menaxhim të ngarkesave të larta. Integrimi me sistemet e akumulimit mundëson autonomi më të madhe energjetike dhe vazhdimësi.":
    {
      it: "La versione trifase è sviluppata per sistemi più complessi, garantendo stabilità operativa e gestione di carichi elevati. L'integrazione con sistemi di accumulo consente maggiore autonomia energetica e continuità.",
      en: "The three-phase version is developed for more complex systems, guaranteeing operational stability and management of high loads. Integration with storage systems enables greater energy autonomy and continuity.",
      es: "La versión trifásica está desarrollada para sistemas más complejos, garantizando estabilidad operativa y gestión de cargas elevadas. La integración con sistemas de almacenamiento permite mayor autonomía energética y continuidad.",
      fr: "La version triphasée est conçue pour des systèmes plus complexes, garantissant stabilité opérationnelle et gestion de fortes charges. L'intégration avec des systèmes de stockage permet une plus grande autonomie énergétique et continuité.",
      de: "Die dreiphasige Version ist für komplexere Systeme entwickelt und gewährleistet Betriebsstabilität und die Bewältigung hoher Lasten. Die Integration mit Speichersystemen ermöglicht größere Energieautonomie und Kontinuität.",
    },
  "Linja Hybrid PRO është menduar për aplikacione të avancuara dhe industriale, me kapacitet të lartë menaxhimi dhe mundësi zgjerimi. Suporton konfigurime të shumta dhe garanton performancë të qëndrueshme në shkallë të gjerë.":
    {
      it: "La linea Hybrid PRO è pensata per applicazioni avanzate e industriali, con capacità di gestione elevata e possibilità di espansione. Supporta configurazioni multiple e garantisce prestazioni stabili su larga scala.",
      en: "The Hybrid PRO line is designed for advanced and industrial applications, with high management capacity and expansion possibilities. It supports multiple configurations and guarantees stable performance at scale.",
      es: "La línea Hybrid PRO está pensada para aplicaciones avanzadas e industriales, con alta capacidad de gestión y posibilidades de ampliación. Admite múltiples configuraciones y garantiza un rendimiento estable a gran escala.",
      fr: "La gamme Hybrid PRO est pensée pour des applications avancées et industrielles, avec une capacité de gestion élevée et des possibilités d'extension. Elle prend en charge plusieurs configurations et garantit des performances stables à grande échelle.",
      de: "Die Hybrid PRO Serie ist für anspruchsvolle und industrielle Anwendungen konzipiert, mit hoher Managementkapazität und Erweiterungsmöglichkeiten. Sie unterstützt mehrere Konfigurationen und gewährleistet stabile Leistung im großen Maßstab.",
    },
  "Inverterët standard përfaqësojnë një zgjidhje të besueshme për konfigurime bazë, me monitorim inteligjent dhe instalim të thjeshtuar.":
    {
      it: "Gli inverter standard rappresentano una soluzione affidabile per configurazioni base, con monitoraggio intelligente e installazione semplificata.",
      en: "Standard inverters are a reliable solution for basic configurations, with intelligent monitoring and simplified installation.",
      es: "Los inversores estándar son una solución fiable para configuraciones básicas, con monitorización inteligente e instalación simplificada.",
      fr: "Les onduleurs standard constituent une solution fiable pour les configurations de base, avec suivi intelligent et installation simplifiée.",
      de: "Standard-Wechselrichter sind eine zuverlässige Lösung für Basiskonfigurationen, mit intelligenter Überwachung und vereinfachter Installation.",
    },
  "Të projektuar për impiante në shkallë të gjerë, inverterët project mundësojnë menaxhim të drejtpërdrejtë të stringjeve dhe performancë të lartë në kontekste industriale dhe utility.":
    {
      it: "Progettati per impianti su larga scala, gli inverter project permettono gestione diretta delle stringhe e prestazioni elevate in contesti industriali e utility.",
      en: "Designed for large-scale plants, project inverters allow direct string management and high performance in industrial and utility contexts.",
      es: "Diseñados para plantas a gran escala, los inversores project permiten la gestión directa de las cadenas y un alto rendimiento en contextos industriales y de utility.",
      fr: "Conçus pour les installations à grande échelle, les onduleurs project permettent une gestion directe des chaînes et des performances élevées dans les contextes industriels et utilitaires.",
      de: "Für großtechnische Anlagen konzipiert, ermöglichen Project-Wechselrichter die direkte String-Verwaltung und hohe Leistung in industriellen und Utility-Kontexten.",
    },
  "Zbulo konfigurimin": {
    en: "Discover the configuration",
    it: "Scopri la configurazione",
    es: "Descubre la configuración",
    fr: "Découvrir la configuration",
    de: "Konfiguration entdecken",
  },
  "Kontroll, stabilitet, integrim": {
    en: "Control, stability, integration",
    it: "Controllo, stabilità, integrazione",
    es: "Control, estabilidad, integración",
    fr: "Contrôle, stabilité, intégration",
    de: "Kontrolle, Stabilität, Integration",
  },

  // ---- Contacts page ----
  "Na kontakto për një konsultë teknike ose për më shumë informacion mbi zgjidhjet IDA Solar.":
    {
      it: "Contattaci per una consulenza tecnica o per maggiori informazioni sulle soluzioni IDA Solar.",
      en: "Contact us for a technical consultation or for more information about IDA Solar solutions.",
      es: "Contáctanos para una consulta técnica o para más información sobre las soluciones IDA Solar.",
      fr: "Contactez-nous pour une consultation technique ou pour plus d'informations sur les solutions IDA Solar.",
      de: "Kontaktiere uns für eine technische Beratung oder weitere Informationen zu den IDA Solar Lösungen.",
    },
  Kontakt: {
    it: "Contatti",
    en: "Contact",
    es: "Contacto",
    fr: "Contact",
    de: "Kontakt",
  },
  Lokacioni: {
    it: "Localizzazione",
    en: "Location",
    es: "Ubicación",
    fr: "Localisation",
    de: "Standort",
  },
  Mesazhi: {
    it: "Messaggio",
    en: "Message",
    es: "Mensaje",
    fr: "Message",
    de: "Nachricht",
  },
  "Shkruaj kërkesën tënde…": {
    it: "Scrivi la tua richiesta…",
    en: "Write your request…",
    es: "Escribe tu solicitud…",
    fr: "Écrivez votre demande…",
    de: "Schreibe deine Anfrage…",
  },
  "Kërkesa u dërgua": {
    it: "Richiesta inviata",
    en: "Request sent",
    es: "Solicitud enviada",
    fr: "Demande envoyée",
    de: "Anfrage gesendet",
  },
  "Moduli Fotovoltaici": {
    it: "Moduli Fotovoltaici",
    en: "Photovoltaic modules",
    es: "Módulos fotovoltaicos",
    fr: "Modules photovoltaïques",
    de: "Photovoltaikmodule",
  },
  Calcolatore: {
    it: "Calcolatore",
    en: "Calculator",
    es: "Calculadora",
    fr: "Calculateur",
    de: "Rechner",
  },
};

export function translateText(lang: Lang, text: string): string {
  if (lang === "sq") return text;
  const entry = DICT[text];
  if (!entry) return text;
  return entry[lang] ?? entry.en ?? text;
}

export const PAGE_TITLE = "IDA SOLAR — Energji e pastër. Pavarësi e plotë.";

export const PAGE_TITLE_BY_LANG: Record<Lang, string> = {
  sq: PAGE_TITLE,
  en: "IDA SOLAR — Clean energy. Total independence.",
  it: "IDA SOLAR — Energia pulita. Indipendenza totale.",
  es: "IDA SOLAR — Energía limpia. Independencia total.",
  fr: "IDA SOLAR — Énergie propre. Indépendance totale.",
  de: "IDA SOLAR — Saubere Energie. Volle Unabhängigkeit.",
};
