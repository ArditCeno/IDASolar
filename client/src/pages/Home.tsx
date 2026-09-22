import {
  type CSSProperties,
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Briefcase,
  Building2,
  Check,
  ChevronDown,
  Clock,
  CloudSun,
  Cpu,
  Facebook,
  Factory,
  Home as HomeIcon,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Moon,
  PanelTop,
  PencilRuler,
  Phone,
  Play,
  Power,
  Search,
  Sun,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";
import { BrandLogo } from "@/components/SiteLayout";
import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGES, type Lang } from "@/i18n/translations";

const HERO_IMAGE = "/images/hero.jpg";
const PANEL_IMAGE = "/images/panels.jpg";
const PANEL_ROOF_IMAGE = "/images/panele2.jpg";
const BATTERY_IMAGE = "/images/battery.jpg";

const GALLERY_IMAGES = Array.from(
  { length: 10 },
  (_, index) => `/images/gallery-${String(index + 1).padStart(2, "0")}.jpg`,
);

const PANEL_LAYERS = [
  { n: 1, label: "Cornice in alluminio" },
  { n: 2, label: "Vetro solare temperato" },
  { n: 3, label: "Strato incapsulante EVA" },
  { n: 4, label: "Cella fotovoltaica" },
  { n: 5, label: "Foglio protettivo posteriore" },
] as const;

const PROPERTY_TYPES = [
  { key: "home", label: "Shtëpi private", factor: 3.2, Icon: HomeIcon },
  { key: "apartment", label: "Apartament", factor: 2.8, Icon: Building2 },
  { key: "business", label: "Biznes / Zyrë", factor: 5, Icon: Briefcase },
  { key: "industry", label: "Industri / Bujqësi", factor: 8, Icon: Factory },
] as const;

type PropertyKey = (typeof PROPERTY_TYPES)[number]["key"];

const PANEL_TIERS = [
  { maxKwp: 6, watt: 450, area: 1.95, name: "450 W All-black TOPCon" },
  { maxKwp: 20, watt: 550, area: 2.4, name: "550 W Monokristal" },
  {
    maxKwp: Number.POSITIVE_INFINITY,
    watt: 600,
    area: 2.6,
    name: "600 W Bifacial",
  },
] as const;

const IDA_PRODUCTS = [
  {
    name: "IDA PLUG",
    tag: "Mikroinvertor i integruar",
    image: "/images/ida-plug.jpg",
    p1: "IDA PLUG përfaqëson një zgjidhje kompakte dhe të thjeshtuar për aplikime rezidenciale. Sistemi integron mikroinvertorët direkt në modul, duke lejuar instalim të shpejtë dhe të lehtë pa konfigurime komplekse.",
    p2: "Falë monitorimit të aplikacionit dhe menaxhimit të decentralizuar të energjisë, ai ofron qasje të drejtpërdrejtë dhe të menjëhershme në energjinë diellore.",
  },
  {
    name: "IDA GLASS",
    tag: "Xham i dyfishtë",
    image: "/images/ida-glass.jpg",
    p1: "Modulet IDA GLASS janë projektuar për integrimin arkitektonik të fotovoltaikëve në fasada, çati dhe struktura ndërtesash.",
    p2: "Konfigurimi me xham të dyfishtë, i disponueshëm në versione transparente ose me ngjyra, lejon kombinimin e prodhimit të energjisë dhe funksionit strukturor në një element të vetëm.",
  },
  {
    name: "IDA ALPINE",
    tag: "Deri 8000 Pa borë",
    image: "/images/ida-alpine.jpg",
    p1: "Modulet IDA ALPINE janë projektuar për kushte ekstreme klimatike, ku forca strukturore është një kërkesë kyçe. Struktura e përforcuar mund t'i rezistojë ngarkesave të rënda, duke përfshirë ngarkesat e borës deri në 8000 Pa, duke ruajtur njëkohësisht performancë të qëndrueshme me kalimin e kohës.",
    p2: "Kjo zgjidhje është menduar për instalime në mjedise kritike, ku siguria, qëndrueshmëria dhe besueshmëria janë përparësi operacionale.",
  },
  {
    name: "IDA MAXIM",
    tag: "Optimizues i integruar",
    image: "/images/ida-maxim.jpg",
    p1: "Teknologjia IDA MAXIM prezanton një sistem inteligjent të optimizimit të integruar, i projektuar për të përmirësuar prodhimin e energjisë në prani të hijes. Përmes përdorimit të optimizuesve të integruar, sistemi zvogëlon humbjet dhe siguron prodhim të vazhdueshëm edhe në kushte jo optimale.",
    p2: "Kjo qasje përmirëson efikasitetin e përgjithshëm të sistemit pa pasur nevojë për komponentë shtesë.",
  },
  {
    name: "IDA CORE",
    tag: "Bifacial",
    image: "/images/ida-core.jpg",
    p1: "Të projektuara për aplikime rezidenciale dhe komerciale, ato integrojnë teknologjinë bifaciale dhe qelizat me performancë të lartë për të siguruar performancë të qëndrueshme me kalimin e kohës.",
    p2: "Konfigurimi me xham të dyfishtë dhe përdorimi i komponentëve të çertifikuar lejon stabilitet më të madh strukturor dhe prodhim të optimizuar të energjisë edhe në kushte të ndryshueshme.",
  },
  {
    name: "IDA POWER",
    tag: "All-black",
    image: "/images/ida-power.jpg",
    p1: "Linja IDA POWER është projektuar për aplikime me performancë të lartë, ku efikasiteti i energjisë dhe integrimi estetik duhet të bashkëjetojnë. Modulet përdorin teknologji të përparuar me xham të dyfishtë, kornizë të zezë dhe konfigurime dizajni të zi, duke siguruar një ndikim të kontrolluar vizual dhe rendiment superior të energjisë.",
    p2: "Kjo linjë është projektuar për projekte rezidenciale, mikpritëse dhe arkitekturore të nivelit të lartë, ku sistemi fotovoltaik bëhet pjesë integrale e projektit.",
  },
] as const;

const IDA_PROJECTS = [
  {
    name: "Malpensa White Suites",
    category: "Hotel & Hospitality",
    image: "/images/project-malpensa.jpg",
    description:
      "Sistem i integruar energjie i zhvilluar për një strukturë mikpritëse me zënie të lartë, i projektuar për të garantuar vazhdimësi operacionale, reduktim të konsumit dhe menaxhim efikas të energjisë gjatë gjithë vitit.",
    implementation:
      "Moduli fotovoltaici + Inverter ibrido + Accumulo",
  },
  {
    name: "Nuova Siga",
    category: "Industrial & Production",
    image: "/images/project-siga-e-re.jpg",
    description:
      "Impiant fotovoltaik i projektuar për të mbështetur aktivitete prodhuese dhe logjistike, duke optimizuar kostot energjetike dhe duke garantuar stabilitet operativ në proceset e biznesit.",
    implementation:
      "Moduli fotovoltaici + Inverter trifase",
  },
  {
    name: "One Active",
    category: "Commercial & Office",
    image: "/images/project-nje-aktiv.jpg",
    description:
      "Sistem i integruar energjie për ndërtesë drejtuese dhe hapësira tregtare, i zhvilluar për të përmirësuar efikasitetin energjetik dhe për të reduktuar varësinë nga rrjeti.",
    implementation:
      "Moduli fotovoltaici + Sistema di gestione energetica",
  },
  {
    name: "Alo Pronto",
    category: "Urban Business Facility",
    image: "/images/project-alo-pronto.jpg",
    description:
      "Zgjidhje energjetike e projektuar për aktivitete urbane me përdorim të lartë energjie, me fokus në besueshmëri, vazhdimësi dhe optimizim të konsumit.",
    implementation:
      "Fotovoltaico + Accumulo + Inverter",
  },
] as const;

const formatEur = (value: number, locale: string) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="IDA SOLAR - në krye">
      <BrandLogo />
    </a>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function ItalyFlag() {
  return (
    <svg width="18" height="12" viewBox="0 0 3 2" aria-hidden="true">
      <rect width="1" height="2" fill="#009246" />
      <rect x="1" width="1" height="2" fill="#ffffff" />
      <rect x="2" width="1" height="2" fill="#ce2b37" />
    </svg>
  );
}

function AlbaniaFlag() {
  return (
    <svg width="18" height="12" viewBox="0 0 100 67" aria-hidden="true">
      <rect width="100" height="67" fill="#e41e20" />
      <path
        fill="#000000"
        d="M50 13c3 0 5.6 1.7 6.9 4.2l5.6-3.6-2.5 6.1 6.2-1.2-4.6 4.5 5.3 1.3-5.7 2.4 3.7 3.6-6.5-.8 1.7 5.3-5.4-2.9-1.8 5.7h-1.8l-1.8-5.7-5.4 2.9 1.7-5.3-6.5.8 3.7-3.6-5.7-2.4 5.3-1.3-4.6-4.5 6.2 1.2-2.5-6.1 5.6 3.6C44.4 14.7 47 13 50 13z"
      />
    </svg>
  );
}

function EnglishFlag() {
  return (
    <svg width="18" height="12" viewBox="0 0 60 30" aria-hidden="true">
      <rect width="60" height="30" fill="#00247d" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#cf142b" strokeWidth="3" />
      <path d="M30,0 V30 M0,15 H60" stroke="#ffffff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#cf142b" strokeWidth="6" />
    </svg>
  );
}

function SpainFlag() {
  return (
    <svg width="18" height="12" viewBox="0 0 3 2" aria-hidden="true">
      <rect width="3" height="2" fill="#aa151b" />
      <rect y="0.5" width="3" height="1" fill="#f1bf00" />
    </svg>
  );
}

function FranceFlag() {
  return (
    <svg width="18" height="12" viewBox="0 0 3 2" aria-hidden="true">
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#ffffff" />
      <rect x="2" width="1" height="2" fill="#ed2939" />
    </svg>
  );
}

function GermanyFlag() {
  return (
    <svg width="18" height="12" viewBox="0 0 3 2" aria-hidden="true">
      <rect width="3" height="0.667" fill="#000000" />
      <rect y="0.667" width="3" height="0.667" fill="#dd0000" />
      <rect y="1.334" width="3" height="0.666" fill="#ffce00" />
    </svg>
  );
}

function Flag({ code }: { code: Lang }) {
  if (code === "it") return <ItalyFlag />;
  if (code === "en") return <EnglishFlag />;
  if (code === "es") return <SpainFlag />;
  if (code === "fr") return <FranceFlag />;
  if (code === "de") return <GermanyFlag />;
  return <AlbaniaFlag />;
}

function LanguageMenu() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = LANGUAGES.find(option => option.code === lang) ?? LANGUAGES[0];

  return (
    <div className="footer-lang-wrap" ref={wrapRef}>
      <button
        className="footer-lang"
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Zgjidh gjuhën"
        onClick={() => setOpen(value => !value)}
      >
        <Flag code={current.code} /> {current.label}{" "}
        <ChevronDown size={14} />
      </button>
      {open ? (
        <ul className="footer-lang-menu" role="menu">
          {LANGUAGES.map(option => (
            <li key={option.code} role="none">
              <button
                type="button"
                role="menuitemradio"
                aria-checked={option.code === lang}
                className={`footer-lang-option${
                  option.code === lang ? " is-active" : ""
                }`}
                onClick={() => {
                  setLang(option.code);
                  setOpen(false);
                }}
              >
                <Flag code={option.code} />
                <span>{option.label}</span>
                {option.code === lang ? <Check size={14} /> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <div className={`section-label ${light ? "section-label-light" : ""}`}>
      <span className="label-line" />
      <span>{children}</span>
    </div>
  );
}

export function AppMockup() {
  return (
    <div className="app-scene" aria-label="Mockup i aplikacionit IDA SOLAR">
      <div className="app-glow" />
      <div className="app-phone">
        <div className="phone-topbar">
          <span className="phone-time">09:41</span>
          <span className="phone-status">
            <span /> <span /> <span />
          </span>
        </div>
        <div className="app-header">
          <div>
            <span className="eyebrow">Mirëmëngjes, Arta</span>
            <h4>Energjia jote</h4>
          </div>
          <div className="avatar">A</div>
        </div>
        <div className="energy-score">
          <div className="score-ring">
            <span>82</span>
            <small>%</small>
          </div>
          <div>
            <span className="micro-label">SOT</span>
            <strong>+ 36.4 kWh</strong>
            <span className="positive">Sistem optimal</span>
          </div>
        </div>
        <div className="flow-card">
          <div className="flow-title">
            <span>Fluksi i energjisë</span>
            <span className="live-dot">LIVE</span>
          </div>
          <div className="flow-row">
            <div className="flow-node sun-node">
              <Sun size={15} />
              <span>Dielli</span>
              <b>4.8 kW</b>
            </div>
            <ArrowRight className="flow-arrow" size={17} />
            <div className="flow-node home-node">
              <HomeIcon size={15} />
              <span>Shtëpia</span>
              <b>2.1 kW</b>
            </div>
          </div>
          <div className="flow-progress">
            <span />
          </div>
          <div className="flow-footer">
            <span>
              <BatteryCharging size={13} /> Bateria 76%
            </span>
            <span>+2.7 kW</span>
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-head">
            <span>Prodhimi ditor</span>
            <strong>36.4 kWh</strong>
          </div>
          <div className="chart-grid">
            <span />
            <span />
            <span />
          </div>
          <svg
            viewBox="0 0 250 66"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#55BF5D" stopOpacity=".22" />
                <stop offset="1" stopColor="#55BF5D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 61 C21 60 26 51 44 49 C62 47 65 39 82 38 C96 37 101 20 118 22 C137 24 141 7 157 10 C174 13 181 5 196 12 C212 20 215 27 230 29 C240 31 245 23 250 19 V66 H0 Z"
              fill="url(#chartFill)"
            />
            <path
              d="M0 61 C21 60 26 51 44 49 C62 47 65 39 82 38 C96 37 101 20 118 22 C137 24 141 7 157 10 C174 13 181 5 196 12 C212 20 215 27 230 29 C240 31 245 23 250 19"
              fill="none"
              stroke="#55BF5D"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="chart-days">
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
          </div>
        </div>
      </div>
      <div className="floating-stat stat-top">
        <span className="stat-icon">
          <Zap size={15} />
        </span>
        <span>
          <b>284 €</b>
          <small>kursim këtë muaj</small>
        </span>
      </div>
      <div className="floating-stat stat-bottom">
        <span className="pulse-dot" />
        <span>
          <b>Sistemi aktiv</b>
          <small>monitorim 24/7</small>
        </span>
      </div>
    </div>
  );
}

export function Calculator() {
  const [property, setProperty] = useState<"home" | "business">("home");
  const [bill, setBill] = useState(80);
  const [battery, setBattery] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const { locale } = useLanguage();

  const result = useMemo(() => {
    const baseKw = property === "home" ? bill / 34 : bill / 39;
    const kw = clamp(Math.round(baseKw * 2) / 2, 3, 100);
    const panelWatt = 450;
    const panels = Math.ceil((kw * 1000) / panelWatt);
    const annualSaving = bill * 12 * 0.78;
    const twentyYearSaving = annualSaving * 20;
    const roof = Math.ceil(kw * 6.2);
    const batteryKwh = Math.max(5, Math.round((kw * 1.3) / 5) * 5);
    return { kw, panels, annualSaving, twentyYearSaving, roof, batteryKwh };
  }, [bill, property]);

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Kërkesa u regjistrua", {
      description:
        "Faleminderit! Ekipi i IDA SOLAR do të të kontaktojë së shpejti.",
    });
    requestAnimationFrame(() =>
      statusRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      }),
    );
  };

  return (
    <div className="calculator-shell">
      <div className="calculator-steps">
        <div className="calc-step active">
          <span>01</span>
          <small>Objekti</small>
        </div>
        <div className="step-connector active" />
        <div className="calc-step active">
          <span>02</span>
          <small>Fatura</small>
        </div>
        <div className="step-connector active" />
        <div className="calc-step active">
          <span>03</span>
          <small>Rezultati</small>
        </div>
      </div>

      <div className="calculator-grid">
        <div className="calculator-inputs">
          <div className="calc-block">
            <div className="calc-kicker">HAPI 01</div>
            <h3>Çfarë lloj objekti ke?</h3>
            <div
              className="property-switch"
              role="group"
              aria-label="Zgjidh llojin e objektit"
            >
              <button
                type="button"
                className={property === "home" ? "selected" : ""}
                onClick={() => setProperty("home")}
                aria-pressed={property === "home"}
              >
                <HomeIcon size={19} />
                <span>Shtëpi private</span>
                <Check size={17} />
              </button>
              <button
                type="button"
                className={property === "business" ? "selected" : ""}
                onClick={() => setProperty("business")}
                aria-pressed={property === "business"}
              >
                <PanelTop size={19} />
                <span>Objekt biznesi</span>
                <Check size={17} />
              </button>
            </div>
          </div>

          <div className="calc-block bill-block">
            <div className="calc-kicker">HAPI 02</div>
            <div className="bill-heading">
              <h3>Sa paguan mesatarisht në muaj?</h3>
              <strong>{formatEur(bill, locale)}</strong>
            </div>
            <input
              className="solar-range"
              type="range"
              min="20"
              max="600"
              step="10"
              value={bill}
              onChange={event => setBill(Number(event.target.value))}
              style={
                {
                  "--range": `${((bill - 20) / 580) * 100}%`,
                } as CSSProperties
              }
              aria-label="Fatura mujore në euro"
            />
            <div className="range-labels">
              <span>20 €</span>
              <span>300 €</span>
              <span>600+ €</span>
            </div>
            <div className="range-note">
              <CloudSun size={15} /> Lëvize për të parë ndikimin e konsumit në
              sistemin tënd.
            </div>
          </div>

          <div className="battery-toggle-row">
            <div className="battery-mini-icon">
              <BatteryCharging size={19} />
            </div>
            <div>
              <strong>Shto bateri backup</strong>
              <span>Ruaj energjinë dhe mbrohu nga ndërprerjet.</span>
            </div>
            <button
              type="button"
              className={`toggle ${battery ? "on" : ""}`}
              onClick={() => setBattery(!battery)}
              aria-pressed={battery}
              aria-label="Shto bateri backup"
            >
              <span />
            </button>
          </div>
        </div>

        <div className="calculator-result">
          <div className="result-topline">
            <span>VLERËSIMI YT</span>
            <span className="result-live">
              <span /> Live estimate
            </span>
          </div>
          <h3>Sistemi i rekomanduar</h3>
          <div className="kw-result">
            <strong>{result.kw}</strong>
            <span>kWp</span>
          </div>
          <div className="result-meta">
            <span>
              <b>{result.panels}</b> panele
            </span>
            <span>
              <b>~{result.roof} m²</b> çati
            </span>
            {battery && (
              <span>
                <b>{result.batteryKwh} kWh</b> bateri
              </span>
            )}
          </div>
          <div className="result-chart" aria-hidden="true">
            <div className="chart-labels">
              <span>Produksion vjetor</span>
              <b>{Math.round(result.kw * 1.42).toLocaleString(locale)} MWh</b>
            </div>
            <div className="bar-track">
              <span
                style={{ width: `${Math.min(92, 32 + result.kw * 0.7)}%` }}
              />
            </div>
            <div className="chart-years">
              <span>2026</span>
              <span>2036</span>
              <span>2046</span>
            </div>
          </div>
          <div className="saving-callout">
            <span className="saving-icon">
              <Zap size={16} />
            </span>
            <div>
              <small>Kursimi i mundshëm në 20 vjet</small>
              <strong>{formatEur(result.twentyYearSaving, locale)}</strong>
            </div>
          </div>
          <p className="result-disclaimer">
            Vlerësim orientues. Oferta finale bazohet në çatinë, konsumin dhe
            kushtet reale të instalimit.
          </p>
          {!showForm && !submitted ? (
            <button
              className="button button-primary result-cta"
              type="button"
              onClick={() => setShowForm(true)}
            >
              Merr ofertën e detajuar <ArrowRight size={17} />
            </button>
          ) : null}
          {showForm && !submitted ? (
            <form className="mini-lead-form" onSubmit={submitLead}>
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Emri dhe mbiemri"
                aria-label="Emri dhe mbiemri"
              />
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Numri i telefonit"
                aria-label="Numri i telefonit"
              />
              <button className="button button-primary" type="submit">
                Dërgo kërkesën <ArrowRight size={16} />
              </button>
            </form>
          ) : null}
          {submitted ? (
            <div
              className="submitted-state"
              ref={statusRef}
              role="status"
              aria-live="polite"
            >
              <Check size={22} />
              <div>
                <strong>U krye.</strong>
                <span>Do të të kontaktojmë për analizën teknike.</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function SizingCalculator() {
  const [property, setProperty] = useState<PropertyKey>("home");
  const [area, setArea] = useState(120);
  const [monthlyKwh, setMonthlyKwh] = useState(400);
  const [battery, setBattery] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const { locale } = useLanguage();

  const result = useMemo(() => {
    const dailyKwh = monthlyKwh / 30;
    const kwp = clamp(Math.round((dailyKwh / 3.9) * 2) / 2, 1, 250);
    const tier =
      PANEL_TIERS.find(entry => kwp <= entry.maxKwp) ??
      PANEL_TIERS[PANEL_TIERS.length - 1];
    const panels = Math.ceil((kwp * 1000) / tier.watt);
    const roof = Math.ceil(panels * tier.area);
    const batteryKwh = battery
      ? Math.min(80, Math.max(5, Math.round((kwp * 1.2) / 5) * 5))
      : 0;
    const annualKwh = kwp * 1400;
    const annualSaving = annualKwh * 18;
    const profile =
      PROPERTY_TYPES.find(entry => entry.key === property) ?? PROPERTY_TYPES[0];
    const typicalKwh = Math.round(area * profile.factor);
    const roofTight = roof > area * 1.15;
    return {
      kwp,
      panels,
      tier,
      roof,
      batteryKwh,
      annualKwh,
      annualSaving,
      typicalKwh,
      roofTight,
      profile,
    };
  }, [monthlyKwh, area, property, battery]);

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Kërkesa u regjistrua", {
      description:
        "Faleminderit! Ekipi i IDA SOLAR do të të kontaktojë së shpejti.",
    });
    requestAnimationFrame(() =>
      statusRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      }),
    );
  };

  return (
    <div className="calculator-shell">
      <div className="calculator-steps">
        <div className="calc-step active">
          <span>01</span>
          <small>Objekti</small>
        </div>
        <div className="step-connector active" />
        <div className="calc-step active">
          <span>02</span>
          <small>Konsumi</small>
        </div>
        <div className="step-connector active" />
        <div className="calc-step active">
          <span>03</span>
          <small>Rezultati</small>
        </div>
      </div>

      <div className="calculator-grid">
        <div className="calculator-inputs">
          <div className="calc-block">
            <div className="calc-kicker">HAPI 01</div>
            <h3>Çfarë lloj objekti ke?</h3>
            <div
              className="property-switch quad"
              role="group"
              aria-label="Zgjidh llojin e objektit"
            >
              {PROPERTY_TYPES.map(entry => (
                <button
                  key={entry.key}
                  type="button"
                  className={property === entry.key ? "selected" : ""}
                  onClick={() => setProperty(entry.key)}
                  aria-pressed={property === entry.key}
                >
                  <entry.Icon size={19} />
                  <span>{entry.label}</span>
                  <Check size={17} />
                </button>
              ))}
            </div>
          </div>

          <div className="calc-block">
            <div className="calc-kicker">HAPI 02</div>
            <div className="bill-heading">
              <h3>Madhësia e shtëpisë</h3>
              <strong>{area.toLocaleString(locale)} m²</strong>
            </div>
            <div className="dual-input">
              <input
                className="solar-range"
                type="range"
                min="20"
                max="2000"
                step="10"
                value={area}
                onChange={event => setArea(Number(event.target.value))}
                style={
                  {
                    "--range": `${((area - 20) / 1980) * 100}%`,
                  } as CSSProperties
                }
                aria-label="Madhësia e shtëpisë në metra katrorë"
              />
              <div className="calc-number">
                <input
                  type="number"
                  min="20"
                  max="2000"
                  step="10"
                  inputMode="numeric"
                  value={area}
                  onChange={event =>
                    setArea(
                      event.target.value === ""
                        ? 0
                        : Number(event.target.value),
                    )
                  }
                  onBlur={() => setArea(prev => clamp(prev || 20, 20, 2000))}
                  aria-label="Madhësia e shtëpisë në metra katrorë"
                />
                <span>m²</span>
              </div>
            </div>
          </div>

          <div className="calc-block">
            <div className="bill-heading">
              <h3>Konsumi mujor</h3>
              <strong>{monthlyKwh.toLocaleString(locale)} kWh</strong>
            </div>
            <div className="dual-input">
              <input
                className="solar-range"
                type="range"
                min="50"
                max="20000"
                step="50"
                value={monthlyKwh}
                onChange={event => setMonthlyKwh(Number(event.target.value))}
                style={
                  {
                    "--range": `${((monthlyKwh - 50) / 19950) * 100}%`,
                  } as CSSProperties
                }
                aria-label="Konsumi mujor në kilovat-orë"
              />
              <div className="calc-number">
                <input
                  type="number"
                  min="50"
                  max="20000"
                  step="10"
                  inputMode="numeric"
                  value={monthlyKwh}
                  onChange={event =>
                    setMonthlyKwh(
                      event.target.value === ""
                        ? 0
                        : Number(event.target.value),
                    )
                  }
                  onBlur={() =>
                    setMonthlyKwh(prev => clamp(prev || 50, 50, 20000))
                  }
                  aria-label="Konsumi mujor në kilovat-orë"
                />
                <span>kWh</span>
              </div>
            </div>
            <div className="calc-hint">
              <CloudSun size={15} /> Konsumi tipik për {area} m²{" "}
              {result.profile.label.toLowerCase()}: ~
              {result.typicalKwh.toLocaleString(locale)} kWh në muaj.
            </div>
          </div>

          <div className="battery-toggle-row">
            <div className="battery-mini-icon">
              <BatteryCharging size={19} />
            </div>
            <div>
              <strong>Shto bateri backup</strong>
              <span>Ruaj energjinë dhe mbrohu nga ndërprerjet.</span>
            </div>
            <button
              type="button"
              className={`toggle ${battery ? "on" : ""}`}
              onClick={() => setBattery(!battery)}
              aria-pressed={battery}
              aria-label="Shto bateri backup"
            >
              <span />
            </button>
          </div>
        </div>

        <div className="calculator-result">
          <div className="result-topline">
            <span>DIMENSIONIMI YT</span>
            <span className="result-live">
              <span /> Live estimate
            </span>
          </div>
          <h3>Lloji & madhësia e sistemit</h3>
          <div className="kw-result">
            <strong>{result.kwp}</strong>
            <span>kWp</span>
          </div>
          <div className="panel-type-badge">
            <PanelTop size={15} /> {result.tier.name}
          </div>
          <div className="result-meta">
            <span>
              <b>{result.panels}</b> panele
            </span>
            <span>
              <b>~{result.roof} m²</b> çati
            </span>
            {battery && (
              <span>
                <b>{result.batteryKwh} kWh</b> bateri
              </span>
            )}
          </div>
          <div className="result-chart" aria-hidden="true">
            <div className="chart-labels">
              <span>Produksion vjetor</span>
              <b>{Math.round(result.annualKwh).toLocaleString(locale)} kWh</b>
            </div>
            <div className="bar-track">
              <span
                style={{ width: `${Math.min(92, 32 + result.kwp * 0.7)}%` }}
              />
            </div>
            <div className="chart-years">
              <span>2026</span>
              <span>2036</span>
              <span>2046</span>
            </div>
          </div>
          <div className="saving-callout">
            <span className="saving-icon">
              <Zap size={16} />
            </span>
            <div>
              <small>Kursimi i mundshëm në 20 vjet</small>
              <strong>{formatEur(result.annualSaving * 20, locale)}</strong>
            </div>
          </div>
          {result.roofTight ? (
            <p className="calc-warning">
              Çatia e nevojshme mund të tejkalojë sipërfaqen e shtëpisë —
              konsulto një ekspert për vendosjen.
            </p>
          ) : null}
          <p className="result-disclaimer">
            Vlerësim orientues bazuar në konsumin mujor dhe rrezatimin mesatar.
            Oferta finale bazohet në çatinë dhe kushtet reale.
          </p>
          {!showForm && !submitted ? (
            <button
              className="button button-primary result-cta"
              type="button"
              onClick={() => setShowForm(true)}
            >
              Merr ofertën e detajuar <ArrowRight size={17} />
            </button>
          ) : null}
          {showForm && !submitted ? (
            <form className="mini-lead-form" onSubmit={submitLead}>
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Emri dhe mbiemri"
                aria-label="Emri dhe mbiemri"
              />
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Numri i telefonit"
                aria-label="Numri i telefonit"
              />
              <button className="button button-primary" type="submit">
                Dërgo kërkesën <ArrowRight size={16} />
              </button>
            </form>
          ) : null}
          {submitted ? (
            <div
              className="submitted-state"
              ref={statusRef}
              role="status"
              aria-live="polite"
            >
              <Check size={22} />
              <div>
                <strong>U krye.</strong>
                <span>Do të të kontaktojmë për analizën teknike.</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function MarqueeRow({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right";
}) {
  const loop = [...images, ...images];
  return (
    <div className="marquee-row">
      <div className={`marquee-track marquee-${direction}`}>
        {loop.map((src, index) => (
          <figure className="marquee-item" key={`${src}-${index}`}>
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              onError={event => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement?.classList.add("is-empty");
              }}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function GalleryMarquee() {
  const rowOne = GALLERY_IMAGES.slice(0, 5);
  const rowTwo = GALLERY_IMAGES.slice(5, 10);
  return (
    <div className="gallery-marquee" aria-hidden="true">
      <MarqueeRow images={rowOne} direction="left" />
      <MarqueeRow images={rowTwo} direction="right" />
    </div>
  );
}

export function ProductGrid() {
  return (
    <div className="product-grid">
      {IDA_PRODUCTS.map(product => (
        <article className="product-card reveal-up" key={product.name}>
          <figure className="product-media" data-name={product.name}>
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              decoding="async"
              onError={event => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement?.classList.add("is-empty");
              }}
            />
          </figure>
          <span className="product-tag">{product.tag}</span>
          <h3>{product.name}</h3>
          <p>{product.p1}</p>
          <p className="muted">{product.p2}</p>
        </article>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <div className="project-rows">
      {IDA_PROJECTS.map((project, index) => (
        <article
          className={`project-row${index % 2 === 1 ? " reverse" : ""}`}
          key={project.name}
        >
          <figure className="project-media" data-name={project.name}>
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              decoding="async"
              onError={event => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement?.classList.add("is-empty");
              }}
            />
          </figure>
          <div className="project-copy">
            <span className="project-tag">{project.category}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-impl">
              <span className="impl-label">
                <Zap size={14} /> Sistema
              </span>
              <span>{project.implementation}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);
  const [consultationSent, setConsultationSent] = useState(false);
  const consultationRef = useRef<HTMLDivElement>(null);

  const closeConsultation = () => {
    setShowConsultation(false);
    setConsultationSent(false);
  };

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > lastY && y > 120) setHidden(true);
      else if (y < lastY - 4) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!showConsultation) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    consultationRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeConsultation();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [showConsultation]);

  const openConsultation = () => {
    setConsultationSent(false);
    setShowConsultation(true);
    setMenuOpen(false);
  };

  const submitConsultation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConsultationSent(true);
    toast.success("Konsulta u kërkua", {
      description: "Faleminderit! Një ekspert i IDA SOLAR do të të kontaktojë.",
    });
  };

  return (
    <div className="site-shell" id="top">
      <header
        className={`site-header ${scrolled ? "header-scrolled" : ""} ${
          hidden && !menuOpen ? "header-hidden" : ""
        }`}
      >
        <div className="container header-inner">
          <Logo />
          <nav
            className={`desktop-nav ${menuOpen ? "nav-open" : ""}`}
            aria-label="Navigimi kryesor"
          >
            <Link href="/moduli-fotovoltaici">Panelet</Link>
            <Link href="/inverter">Inverter</Link>
            <Link href="/sistemi-di-accumulo">Bateria</Link>
            <Link href="/app">Aplikacioni</Link>
            <Link href="/calcolatore">Kalkulatori</Link>
            <Link href="/progetti">Projektet</Link>
            <Link href="/contatti">Contatti</Link>
            <button
              className="nav-mobile-cta button button-primary"
              onClick={openConsultation}
            >
              Kërko ofertë
            </button>
          </nav>
          <div className="header-actions">
            <button
              className="button button-primary header-cta"
              onClick={openConsultation}
            >
              Kërko ofertë <ArrowRight size={15} />
            </button>
            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Mbyll menunë" : "Hap menunë"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy reveal-up">
              <h1>Energji diellore</h1>
              <p>Projektuar për të ardhmen</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#solutions">
                  Shfrytëzo subvencionet 2026 <ArrowRight size={17} />
                </a>
                <button
                  className="button button-ghost"
                  onClick={openConsultation}
                >
                  <span className="play-icon">
                    <Play size={12} fill="currentColor" />
                  </span>{" "}
                  Kërko konsultë
                </button>
              </div>
            </div>
            <div className="hero-foot reveal-up delay-2">
              <a className="scroll-cue" href="#solar">
                <ArrowDown size={15} /> <span>Eksploro sistemin</span>
              </a>
              <div className="hero-note">
                <strong>IDA / 01</strong>
                <span>
                  Sisteme që punojnë
                  <br />
                  edhe kur ti fle.
                </span>
              </div>
            </div>
          </div>
          <div className="hero-statbar">
            <div>
              <strong>25</strong>
              <span>
                vjet
                <br />
                garanci performance
              </span>
            </div>
            <div>
              <strong>0</strong>
              <span>
                emetime
                <br />
                gjatë përdorimit
              </span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>
                monitorim
                <br />
                nga aplikacioni
              </span>
            </div>
          </div>
        </section>

        <section className="section savings-section" id="savings">
          <div className="container savings-grid">
            <div className="savings-copy reveal-up">
              <h2>
                Energjia e diellit është falas. <em>Përdoreni sot.</em>
              </h2>
              <p className="lead-copy">
                Ndërto një burim energjie që prodhon për ty çdo ditë. Një sistem
                i dimensionuar saktë të jep më shumë kontroll mbi shpenzimet dhe
                më pak varësi nga çmimet e tregut.
              </p>
              <div className="benefit-list">
                <div className="benefit-item">
                  <span className="benefit-number">01</span>
                  <div>
                    <h3>Mbrojtje nga rritja e kostove</h3>
                    <p>
                      Çmimi i diellit mbetet zero. Ti përdor energjinë që
                      prodhon vetë.
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-number">02</span>
                  <div>
                    <h3>Kthim i matshëm i investimit</h3>
                    <p>
                      Shiko prodhimin, kursimin dhe periudhën e kthimit përpara
                      se të vendosësh.
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-number">03</span>
                  <div>
                    <h3>Vlerë e shtuar për pronën</h3>
                    <p>
                      Një shtëpi më eficente është më e përgatitur për të
                      ardhmen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="savings-visual reveal-up delay-1">
              <div className="visual-frame">
                <div
                  className="visual-image"
                  style={{ backgroundImage: `url(${PANEL_IMAGE})` }}
                />
                <div className="visual-gradient" />
                <div className="visual-caption">
                  <span className="caption-line" />
                  <span>
                    Prodhim i pastër
                    <br />
                    <b>çdo ditë</b>
                  </span>
                </div>
              </div>
              <div className="savings-badge">
                <span>−78%</span>
                <small>varësi nga rrjeti</small>
              </div>
              <div className="vertical-note">PANEL / ALL-BLACK / 450 W</div>
            </div>
          </div>
        </section>

        <section className="section dark-section panel-section" id="solar">
          <div className="section-orbit orbit-one" />
          <div className="section-orbit orbit-two" />
          <div className="container panel-grid">
            <div className="panel-copy reveal-up">
              <h2>
                Estetikë e rafinuar.
                <br />
                <em>Pa linja të dukshme.</em>
              </h2>
              <p>
                Panelet all-black integrohen me arkitekturën e shtëpisë. Dizajni
                i pastër nuk tërheq vëmendje — përveçse kur sheh faturën.
              </p>
              <a className="text-link light-link" href="#calculator">
                Shiko çfarë të përshtatet <ArrowRight size={16} />
              </a>
            </div>
            <div className="panel-visual reveal-up delay-1">
              <div className="panel-crop">
                <img
                  className="panel-roof-photo"
                  src={PANEL_ROOF_IMAGE}
                  alt="Panele diellore të integruara në çati"
                  loading="lazy"
                  decoding="async"
                  onError={event => {
                    if (!event.currentTarget.dataset.fallback) {
                      event.currentTarget.dataset.fallback = "1";
                      event.currentTarget.src = PANEL_IMAGE;
                    }
                  }}
                />
                {PANEL_LAYERS.map(layer => (
                  <span
                    className={`layer-label layer-${layer.n}`}
                    key={layer.n}
                  >
                    {layer.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <GalleryMarquee />
          <div className="panel-features container">
            <div>
              <span className="feature-icon">1</span>
              <strong>Qeliza me efikasitet të lartë</strong>
              <p>Prodhon më shumë energji edhe në ditë me re.</p>
            </div>
            <div>
              <span className="feature-icon">2</span>
              <strong>Ndërtuar për kushte reale</strong>
              <p>Materiale dhe certifikime sipas projektit.</p>
            </div>
            <div>
              <span className="feature-icon">3</span>
              <strong>Montim i pastër</strong>
              <p>Instalim i sigurt, i rregullt dhe i integruar.</p>
            </div>
          </div>
        </section>

        

        <section className="section made-section">
          <div className="container made-grid">
            <h2>Prodhim MADE IN ITALY</h2>
            <p className="lead-copy">
              Sistemet IDA Solar projektohen dhe prodhohen në Itali për të
              garantuar cilësi, besueshmëri dhe kontroll të drejtpërdrejtë mbi
              zinxhirin e prodhimit. Kompania projekton, prodhon dhe integron
              sisteme të plota energjetike, duke operuar në çdo shkallë:
              rezidenciale, mikpritje, industriale dhe parqe fotovoltaike.
            </p>
          </div>
        </section>

        <section className="section why-section" id="why">
          <div className="container why-heading">
            <div>
              <h2>Pse të zgjidhni IDA Solar?</h2>
            </div>
          </div>
          <div className="container why-columns">
            <div className="why-left">
              <h3 className="why-sub">
                Prodhim italian
                <br />
                Sistem i plotë energjetik
              </h3>
              <div
                className="why-photo"
                style={{ backgroundImage: `url(${PANEL_ROOF_IMAGE})` }}
              />
              <p>
                Prodhimi, projektimi dhe instalimi janë të integruar për të
                garantuar cilësi, efikasitet dhe besueshmëri me kalimin e
                kohës.
              </p>
            </div>
            <div className="why-right">
              <div className="why-block">
                <h3>Prodhim Made in Italy</h3>
                <p>
                  Sistemet IDA Solar projektohen dhe prodhohen në Itali sipas
                  standardeve industriale evropiane.
                </p>
                <ul>
                  <li>kontroll i drejtpërdrejtë mbi cilësinë</li>
                  <li>zinxhir prodhimi i gjurmueshëm</li>
                  <li>mbështetje teknike e specializuar</li>
                  <li>besueshmëri afatgjatë</li>
                </ul>
              </div>
              <div className="why-block">
                <h3>Sisteme energjetike të integruara</h3>
                <ul>
                  <li>module fotovoltaike me efikasitet të lartë</li>
                  <li>inverter inteligjentë</li>
                  <li>sisteme akumulimi energjetik</li>
                  <li>menaxhim dhe monitorim i sistemit</li>
                </ul>
                <p>Çdo komponent është projektuar për të punuar së bashku.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section energia-section">
          <div className="container energia-head">
            <h2>
              Kurseni energji
              <br />
              Prodho vlerë
            </h2>
            <p>
              IDA Solar zhvillon module fotovoltaike, inverter dhe sisteme
              akumulimi të projektuar për të funksionuar si një ekosistem i
              vetëm energjetik. Çdo produkt është projektuar për të garantuar
              efikasitet, besueshmëri dhe integrim të plotë brenda platformës
              energjetike IDA.
            </p>
          </div>
          <div className="container why-grid">
            <article className="why-card">
              <span className="why-icon">
                <Leaf size={20} />
              </span>
              <h3>Energjia e qëndrueshme</h3>
              <p>
                Prodhoni energji të pastër direkt nga dielli dhe furnizoni
                shtëpinë ose biznesin tuaj me një burim të rinovueshëm dhe me
                emetime të ulëta.
              </p>
            </article>
            <article className="why-card">
              <span className="why-icon">
                <Wallet size={20} />
              </span>
              <h3>Ulja e faturave</h3>
              <p>
                Të prodhosh energjinë tënde do të thotë të reduktosh kostot e
                energjisë dhe të mbrohesh nga luhatjet e çmimeve të energjisë
                elektrike.
              </p>
            </article>
            <article className="why-card">
              <span className="why-icon">
                <Clock size={20} />
              </span>
              <h3>Jetëgjatësia</h3>
              <p>
                Sistemet fotovoltaike IDA Solar janë projektuar për performancë
                të besueshme afatgjatë, me komponentë të zhvilluar për
                stabilitet operativ për mbi 25 vjet.
              </p>
            </article>
            <article className="why-card">
              <span className="why-icon">
                <Cpu size={20} />
              </span>
              <h3>Kontroll inteligjent i energjisë</h3>
              <p>
                Sistemet IDA Solar ju lejojnë të monitoroni dhe menaxhoni
                prodhimin dhe konsumin e energjisë, duke optimizuar përdorimin
                e energjisë së prodhuar.
              </p>
            </article>
          </div>
        </section>

        <section className="infobar-section">
          <div className="container">
            <div className="infobar">
              <h2>Kthe ndërtesën tënde në një burim energjie</h2>
              <p>
                Sistemet IDA Solar e kthejnë dritën e diellit në energji të
                besueshme për ndërtesa, biznese dhe infrastruktura.
              </p>
              <div className="infobar-actions">
                <a className="button button-primary" href="#solutions">
                  Zbulo Sistemet <ArrowRight size={16} />
                </a>
                <button
                  className="button button-light"
                  type="button"
                  onClick={openConsultation}
                >
                  Kërko konsultë
                </button>
              </div>
            </div>
          </div>
        </section>

        

        <section className="section how-section" id="how">
          <div className="container how-heading">
            <div>
              <h2>Si funksionon sistemi IDA Solar</h2>
            </div>
            <p>
              Qasja IDA Solar integron projektimin, teknologjinë dhe menaxhimin
              e energjisë për t'i kthyer ndërtesat dhe infrastrukturat në
              sisteme të besueshme të prodhimit të energjisë.
            </p>
          </div>
          <div className="container how-grid">
            <article className="how-card">
              <span className="how-index">01</span>
              <span className="how-icon">
                <Search size={20} />
              </span>
              <h3>Analiza energjetike</h3>
              <p>
                Çdo projekt fillon me një studim teknik të konsumit, sipërfaqes
                së disponueshme dhe kushteve të ekspozimit. Kjo analizë lejon
                përcaktimin e konfigurimit më efikas energjetik.
              </p>
            </article>
            <article className="how-card">
              <span className="how-index">02</span>
              <span className="how-icon">
                <PencilRuler size={20} />
              </span>
              <h3>Projektimi i sistemit</h3>
              <p>
                Sistemi konfigurohet duke kombinuar module fotovoltaike,
                inverter dhe sisteme akumulimi për të krijuar një platformë
                energjetike të qëndrueshme dhe të zgjerueshme.
              </p>
            </article>
            <article className="how-card">
              <span className="how-index">03</span>
              <span className="how-icon">
                <Power size={20} />
              </span>
              <h3>Prodhimi i vazhdueshëm i energjisë</h3>
              <p>
                Pasi aktivizohet, sistemi prodhon energji të rinovueshme për të
                furnizuar ndërtesat dhe infrastrukturat, duke reduktuar
                varësinë nga rrjeti elektrik.
              </p>
            </article>
          </div>
        </section>

        <section className="section solutions-section" id="solutions">
          <div className="container solutions-heading">
            <div>
              <h2>Zgjidhje fotovoltaike</h2>
            </div>
            <p>
              Energjia diellore e projektuar për ndërtesa dhe infrastruktura.
              Module, inverter dhe akumulim në një sistem të vetëm të
              integruar.
            </p>
          </div>
          <div className="container solutions-grid">
            {[
              {
                title: "Sistemi 3 kW",
                sub: "Ideal për familje me 2 persona",
                items: [
                  "Perfekt për banesa private",
                  "Zgjidhje ekonomike dhe efikase",
                  "Subvencione deri në 50%",
                  "Mundësi për të injektuar dhe shitur energji në rrjet",
                ],
              },
              {
                title: "Sistemi 4 kW",
                sub: "Zgjedhja më e përhapur midis familjeve",
                items: [
                  "I përshtatshëm për familje me 3–4 persona",
                  "Rendiment i shkëlqyer energjetik gjatë gjithë vitit",
                  "Subvencione deri në 50%",
                  "Mundësi për të injektuar dhe shitur energji në rrjet",
                ],
              },
              {
                title: "Sistemi 5 kW",
                sub: "Ideal për shtëpi plotësisht elektrike",
                items: [
                  "Menduar për familje me konsum të lartë",
                  "Nivel i lartë i autonomisë energjetike",
                  "Subvencione deri në 50%",
                  "Mundësi për të injektuar dhe shitur energji në rrjet",
                ],
              },
            ].map(plan => (
              <article className="solution-card" key={plan.title}>
                <h3>{plan.title}</h3>
                <span className="solution-sub">{plan.sub}</span>
                <ul className="solution-list">
                  {plan.items.map(item => (
                    <li key={item}>
                      <Check size={14} /> {item}
                    </li>
                  ))}
                </ul>
                <button
                  className="button button-primary solution-cta"
                  onClick={openConsultation}
                >
                  Kërko ofertë <ArrowRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </section>

        

        

        <section className="section process-section">
          <div className="container process-heading">
            <div>
              <h2>
                Thjesht nga ideja
                <br />
                <em>te energjia aktive.</em>
              </h2>
            </div>
            <p>
              Një ekip i vetëm për analizën, dokumentacionin, instalimin dhe
              aktivizimin e sistemit.
            </p>
          </div>
          <div className="container process-grid">
            <div className="process-card featured">
              <span className="process-index">01</span>
              <div className="process-icon">
                <Sun size={21} />
              </div>
              <h3>Analiza & dizajni</h3>
              <p>
                Lexojmë çatinë, konsumin dhe orientimin përpara se të propozojmë
                zgjidhjen.
              </p>
              <span className="process-arrow">
                <ArrowRight size={17} />
              </span>
            </div>
            <div className="process-card">
              <span className="process-index">02</span>
              <div className="process-icon">
                <MessageCircle size={21} />
              </div>
              <h3>Lejet & dokumentacioni</h3>
              <p>
                Ti nuk humbet kohë me procedurat. Ekipi ynë i ndjek hapat me ty.
              </p>
              <span className="process-arrow">
                <ArrowRight size={17} />
              </span>
            </div>
            <div className="process-card">
              <span className="process-index">03</span>
              <div className="process-icon">
                <Zap size={21} />
              </div>
              <h3>Montimi profesional</h3>
              <p>
                Instalim i rregullt, i sigurt dhe i koordinuar me jetën e
                shtëpisë.
              </p>
              <span className="process-arrow">
                <ArrowRight size={17} />
              </span>
            </div>
            <div className="process-card">
              <span className="process-index">04</span>
              <div className="process-icon">
                <MonitorSmartphone size={21} />
              </div>
              <h3>Ndezja e sistemit</h3>
              <p>
                Aktivizim, dorëzim i aplikacionit dhe një sistem që nis të
                punojë për ty.
              </p>
              <span className="process-arrow">
                <ArrowRight size={17} />
              </span>
            </div>
          </div>
        </section>

        

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div>
              <h2>
                Gati të marrësh
                <br />
                <em>kontrollin?</em>
              </h2>
            </div>
            <div className="final-cta-action">
              <p>
                Një konsultë e shkurtër. Një ide më e qartë. Një hap drejt
                pavarësisë.
              </p>
              <button
                className="button button-primary"
                onClick={openConsultation}
              >
                Bëj kërkesë tani <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-contactbar">
          <div className="footer-contact-item">
            <Mail size={15} />
            <span>Mbështetje dhe email</span>
            <a href="mailto:info@idasolar.it">info@idasolar.it</a>
          </div>
          <div className="footer-contact-item">
            <Phone size={15} />
            <span>Shërbimi ndaj Klientit</span>
            <a href="tel:+393463530429">+39 346 353 0429</a>
          </div>
          <div className="footer-contact-item">
            <MapPin size={15} />
            <span>Pozicioni ynë</span>
            <b>Italia</b>
          </div>
        </div>

        <div className="container footer-main">
          <div className="footer-brand">
            <Logo />
            <p>
              IDA Solar është një prodhues italian i sistemeve fotovoltaike që
              zhvillon module, invertorë dhe sisteme ruajtjeje për ndërtesa,
              biznese dhe infrastrukturë energjetike.
            </p>
            <div className="footer-social">
              <a href="#top" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/idasolar.it/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-heading">Agjenci</span>
            <a href="#top">Kush jemi ne</a>
            <a href="#projects">Projekte</a>
            <Link href="/contatti">Kontaktet</Link>
          </div>

          <div className="footer-col">
            <span className="footer-heading">Produkte</span>
            <a href="#solar">Module fotovoltaike</a>
            <a href="#battery">Sistemi e Magazinimit</a>
            <a href="/inverter">Inverter</a>
          </div>

          <div className="footer-col">
            <span className="footer-heading">Informacion</span>
            <a href="#solar">Module fotovoltaike</a>
            <a href="#battery">Sistemi e Magazinimit</a>
            <a href="/inverter">Inverter</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <a
            className="footer-whatsapp"
            href="https://wa.me/393463530429"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
          <span className="footer-copy">
            Të drejtat e autorit © 2026 IDA SOLAR. Të gjitha të drejtat e
            rezervuara.
          </span>
          <LanguageMenu />
        </div>
      </footer>

      {showConsultation && (
        <div
          className="modal-backdrop"
          onMouseDown={event => {
            if (event.target === event.currentTarget) closeConsultation();
          }}
        >
          <div
            className="consultation-modal"
            ref={consultationRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-title"
          >
            <button
              className="modal-close"
              type="button"
              onClick={closeConsultation}
              aria-label="Mbyll dialogun"
            >
              <X size={19} />
            </button>
            <h2 id="consultation-title">
              Le ta projektojmë
              <br />
              <em>së bashku.</em>
            </h2>
            <p>
              Na lër të dhënat bazë dhe një ekspert i IDA SOLAR do të të
              kontaktojë.
            </p>
            {consultationSent ? (
              <div className="modal-success" role="status" aria-live="polite">
                <span className="modal-success-icon">
                  <Check size={26} />
                </span>
                <h3>Kërkesa u dërgua!</h3>
                <p>
                  Faleminderit. Një ekspert i IDA SOLAR do të të kontaktojë së
                  shpejti për të projektuar sistemin tënd.
                </p>
                <button
                  className="button button-primary"
                  type="button"
                  onClick={() => setConsultationSent(false)}
                >
                  Dërgo një kërkesë tjetër <ArrowRight size={16} />
                </button>
                <button
                  className="button button-ghost"
                  type="button"
                  onClick={closeConsultation}
                >
                  Mbyll
                </button>
              </div>
            ) : (
              <form onSubmit={submitConsultation}>
                <label>
                  Emri dhe mbiemri
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="p.sh. Arta Hoxha"
                  />
                </label>
                <label>
                  Numri i telefonit
                  <input
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+39 3XX XXX XXXX"
                  />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="email@gmail.com"
                  />
                </label>
                <button className="button button-primary" type="submit">
                  Kërko konsultën <ArrowRight size={16} />
                </button>
              </form>
            )}
            <small>
              Ne e përdorim këtë informacion vetëm për të të kontaktuar rreth
              kërkesës.
            </small>
          </div>
        </div>
      )}
    </div>
  );
}
