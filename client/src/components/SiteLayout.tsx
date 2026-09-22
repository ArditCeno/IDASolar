import {
  type FormEvent,
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGES, type Lang } from "@/i18n/translations";

const NAV = [
  { label: "Panelet", href: "/moduli-fotovoltaici" },
  { label: "Inverter", href: "/inverter" },
  { label: "Bateria", href: "/sistemi-di-accumulo" },
  { label: "Aplikacioni", href: "/app" },
  { label: "Kalkulatori", href: "/calcolatore" },
  { label: "Projektet", href: "/progetti" },
  { label: "Contatti", href: "/contatti" },
];

export function BrandLogo() {
  return (
    <svg
      className="brand-logo"
      viewBox="0 0 816.89 118.96"
      role="img"
      aria-label="IDA SOLAR"
    >
      <rect width="21.8" height="117.16" fill="#222c38" />
      <path
        fill="#222c38"
        d="M141.58,16.77C130.94,5.8,116.15,0,98.82,0h-44.75v117.16h44.75c17.34,0,32.12-5.8,42.76-16.77,10.2-10.51,15.82-25.36,15.82-41.81s-5.62-31.3-15.82-41.81ZM76.03,20.82h21.97c22.2,0,37.11,15.17,37.11,37.76s-14.91,37.76-37.11,37.76h-21.97V20.82Z"
      />
      <path
        fill="#222c38"
        d="M348.28,85.77h16.64c.58,10.13,8.1,17.07,22.71,17.07s22.86-4.92,22.86-14.18c0-7.81-6.37-12.01-16.06-13.89l-14.9-2.75c-16.35-3.04-27.92-11.58-27.92-28.36s13.75-29.08,36.31-29.08,37.62,13.6,37.76,30.82h-16.64c-.43-8.25-7.23-15.34-21.12-15.34-11.72,0-19.53,4.92-19.53,13.31,0,6.8,5.79,10.56,14.61,12.15l15.34,3.04c19.39,3.62,29.08,14.47,29.08,29.37,0,20.11-17.51,30.53-39.79,30.53-24.6,0-38.49-13.02-39.35-32.7Z"
      />
      <path fill="#222c38" d="M574.7,0h21.71v117.16h-21.71V0Z" />
      <path
        fill="#222c38"
        d="M628.69,85.98c0-16.58,12.04-31.18,36.51-31.18h30.59v-2.37c0-9.87-6.91-19.94-22.5-19.94-13.42,0-20.13,7.7-21.51,15.4h-20.13c2.96-21.12,19.54-34.15,41.84-34.15,29.01,0,43.03,19.54,43.03,38.69v45.4h9.87v19.34h-16.78c-8.49,0-12.24-4.74-12.24-11.45v-2.57c-4.14,8.29-14.01,15.79-32.17,15.79-19.94,0-36.51-12.83-36.51-32.96ZM695.8,77.29v-4.54h-30.59c-7.9,0-14.8,4.74-14.8,13.03,0,8.88,7.3,14.41,18.16,14.41,18.16,0,27.24-11.25,27.24-22.9Z"
      />
      <path
        fill="#222c38"
        d="M758.66,15.52h21.71v19.74c2.37-9.87,13.03-19.74,27.83-19.74h8.68v21.91h-11.65c-15.39,0-24.87,11.45-24.87,26.84v52.9h-21.71V15.52Z"
      />
      <path
        fill="#222c38"
        d="M277.93,113.3l-1.51-4.2L237.26,0h-26.53l-40.48,113.21-1.42,3.95h23.04l9.11-26.04h45.87l9.11,26.04h23.36l-1.39-3.86ZM208.46,69.98l15.45-43.78,15.44,43.78h-30.89Z"
      />
      <path
        fill="#55bf5d"
        d="M478.33,46.45v10.45c0,3.15,3.74,6.46,6.78,6.46h9.88v2.1h-10.19c-2.81,0-6.47,3.48-6.47,6.36v10.56h-2.17v-10.77c0-2.69-3.75-6.15-6.37-6.15h-10.19v-2.1h9.78c2.9,0,6.78-3.2,6.78-6.25v-10.67h2.17Z"
      />
      <rect
        x="487.77"
        y="18.38"
        width="22.04"
        height="5.5"
        fill="#55bf5d"
        transform="translate(348.98 497.36) rotate(-74.96)"
      />
      <rect
        x="507.27"
        y="29.83"
        width="22.04"
        height="5.5"
        fill="#55bf5d"
        transform="translate(128.77 376.03) rotate(-45)"
      />
      <rect
        x="514.27"
        y="39.29"
        width="22.04"
        height="5.5"
        fill="#55bf5d"
        transform="translate(49.35 268.28) rotate(-30)"
      />
      <rect
        x="518.83"
        y="50.21"
        width="22.04"
        height="5.5"
        fill="#55bf5d"
        transform="translate(3.8 135.52) rotate(-14.63)"
      />
      <rect x="520.15" y="61.72" width="22.04" height="5.5" fill="#55bf5d" />
      <rect
        x="498.11"
        y="22.78"
        width="22.04"
        height="5.5"
        fill="#55bf5d"
        transform="translate(241.68 459.51) rotate(-61.23)"
      />
      <rect
        x="518.84"
        y="73.3"
        width="22.04"
        height="5.5"
        fill="#55bf5d"
        transform="translate(36.41 -131.42) rotate(14.64)"
      />
      <rect
        x="507.13"
        y="93.32"
        width="22.04"
        height="5.5"
        fill="#55bf5d"
        transform="translate(216.67 -336.15) rotate(44.6)"
      />
      <rect
        x="497.8"
        y="100.85"
        width="22.04"
        height="5.5"
        fill="#55bf5d"
        transform="translate(340.7 -387.69) rotate(59.6)"
      />
      <rect
        x="487.77"
        y="104.85"
        width="22.04"
        height="5.5"
        fill="#55bf5d"
        transform="translate(473.39 -402.03) rotate(74.97)"
      />
      <rect
        x="514.37"
        y="83.99"
        width="22.04"
        height="5.5"
        fill="#55bf5d"
        transform="translate(118.09 -256.29) rotate(30.73)"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="IDA SOLAR - në krye">
      <BrandLogo />
    </Link>
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
        <Flag code={current.code} /> {current.label} <ChevronDown size={14} />
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

const HeroToneContext = createContext<{
  setTone: (tone: "light" | "dark") => void;
}>({ setTone: () => {} });

function measureTopTone(img: HTMLImageElement): "light" | "dark" {
  try {
    const w = 32;
    const h = 16;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "light";
    ctx.drawImage(
      img,
      0,
      0,
      img.naturalWidth,
      Math.max(1, img.naturalHeight * 0.22),
      0,
      0,
      w,
      h,
    );
    const { data } = ctx.getImageData(0, 0, w, h);
    let sum = 0;
    for (let i = 0; i < data.length; i += 4) {
      sum +=
        (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
    }
    return sum / (data.length / 4) > 0.62 ? "light" : "dark";
  } catch {
    return "light";
  }
}

export function PageHero({
  title,
  intro,
  image,
  fallback,
}: {
  title: string;
  intro?: string;
  image: string;
  fallback?: string;
}) {
  const { setTone } = useContext(HeroToneContext);
  return (
    <header className="page-hero">
      <img
        className="page-hero-img"
        src={image}
        alt=""
        onLoad={event => setTone(measureTopTone(event.currentTarget))}
        onError={event => {
          const el = event.currentTarget;
          if (fallback && el.dataset.fb !== "1") {
            el.dataset.fb = "1";
            el.src = fallback;
          } else {
            el.style.display = "none";
          }
        }}
      />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <h1 className="page-hero-title pop-in">{title}</h1>
        {intro ? <p className="page-hero-intro pop-in delay-1">{intro}</p> : null}
      </div>
    </header>
  );
}

export function SectionLabel({
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

interface ConsultationContextValue {
  openConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextValue | null>(
  null,
);

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within SiteLayout");
  }
  return context;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [tone, setTone] = useState<"light" | "dark">("light");
  const [showConsultation, setShowConsultation] = useState(false);
  const [consultationSent, setConsultationSent] = useState(false);
  const consultationRef = useRef<HTMLDivElement>(null);

  const closeConsultation = () => {
    setShowConsultation(false);
    setConsultationSent(false);
  };

  const openConsultation = () => {
    setConsultationSent(false);
    setShowConsultation(true);
    setMenuOpen(false);
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
    setMenuOpen(false);
    setTone("light");
    window.scrollTo({ top: 0 });
  }, [location]);

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

  const submitConsultation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConsultationSent(true);
    toast.success("Konsulta u kërkuа", {
      description: "Faleminderit! Një ekspert i IDA SOLAR do të të kontaktojë.",
    });
  };

  return (
    <ConsultationContext.Provider value={{ openConsultation }}>
      <HeroToneContext.Provider value={{ setTone }}>
      <div className="site-shell" id="top">
        <header
          className={`site-header ${scrolled ? "header-scrolled" : ""} ${
            hidden && !menuOpen ? "header-hidden" : ""
          } ${!scrolled && tone === "dark" ? "tone-dark" : ""}`}
        >
          <div className="container header-inner">
            <Logo />
            <nav
              className={`desktop-nav ${menuOpen ? "nav-open" : ""}`}
              aria-label="Navigimi kryesor"
            >
              {NAV.map(item => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <button
                className="nav-mobile-cta button button-primary"
                type="button"
                onClick={openConsultation}
              >
                Kërko ofertë
              </button>
            </nav>
            <div className="header-actions">
              <button
                className="button button-primary header-cta"
                type="button"
                onClick={openConsultation}
              >
                Kërko ofertë <ArrowRight size={15} />
              </button>
              <button
                className="menu-button"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Mbyll menunë" : "Hap menunë"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-contactbar">
            <div className="footer-contact-item">
              <span>Mbështetje dhe email</span>
              <a href="mailto:info@idasolar.it">info@idasolar.it</a>
            </div>
            <div className="footer-contact-item">
              <span>Shërbimi ndaj Klientit</span>
              <a href="tel:+393463530429">+39 346 353 0429</a>
            </div>
            <div className="footer-contact-item">
              <span>Pozicioni ynë</span>
              <b>Italia</b>
            </div>
          </div>

          <div className="container footer-main">
            <div className="footer-brand">
              <Logo />
              <p>
                IDA Solar është një prodhues italian i sistemeve fotovoltaike
                që zhvillon module, invertorë dhe sisteme ruajtjeje për
                ndërtesa, biznese dhe infrastrukturë energjetike.
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
              <Link href="/">Kush jemi ne</Link>
              <Link href="/progetti">Projekte</Link>
              <Link href="/contatti">Kontaktet</Link>
            </div>

            <div className="footer-col">
              <span className="footer-heading">Produkte</span>
              <Link href="/moduli-fotovoltaici">Module fotovoltaike</Link>
              <Link href="/sistemi-di-accumulo">Sistemi e Magazinimit</Link>
              <Link href="/inverter">Inverter</Link>
            </div>

            <div className="footer-col">
              <span className="footer-heading">Informacion</span>
              <Link href="/moduli-fotovoltaici">Module fotovoltaike</Link>
              <Link href="/sistemi-di-accumulo">Sistemi e Magazinimit</Link>
              <Link href="/inverter">Inverter</Link>
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
                      placeholder="+355 6X XXX XXXX"
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
                      placeholder="arta@email.com"
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
      </HeroToneContext.Provider>
    </ConsultationContext.Provider>
  );
}
