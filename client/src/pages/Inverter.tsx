import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero, useConsultation } from "@/components/SiteLayout";

const INVERTER_TYPES = [
  {
    name: "Inverter Hybrid 1-Phase",
    image: "/images/inverter-1phase.jpg",
    text: "Inverterët hibridë monofazë janë projektuar për aplikacione rezidenciale, me integrim të drejtpërdrejtë midis prodhimit dhe akumulimit. Mundësojnë menaxhim inteligjent të energjisë, monitorim të vazhdueshëm dhe funksion emergjence të integruar.",
  },
  {
    name: "Inverter Hybrid 3-Phase",
    image: "/images/inverter-3phase.jpg",
    text: "Versioni trefazor është zhvilluar për sisteme më komplekse, duke garantuar stabilitet operativ dhe menaxhim të ngarkesave të larta. Integrimi me sistemet e akumulimit mundëson autonomi më të madhe energjetike dhe vazhdimësi.",
  },
  {
    name: "Hybrid PRO",
    image: "/images/inverter-pro.jpg",
    text: "Linja Hybrid PRO është menduar për aplikacione të avancuara dhe industriale, me kapacitet të lartë menaxhimi dhe mundësi zgjerimi. Suporton konfigurime të shumta dhe garanton performancë të qëndrueshme në shkallë të gjerë.",
  },
  {
    name: "Inverter Standard",
    image: "/images/inverter-standard.jpg",
    text: "Inverterët standard përfaqësojnë një zgjidhje të besueshme për konfigurime bazë, me monitorim inteligjent dhe instalim të thjeshtuar.",
  },
  {
    name: "Inverter Project",
    image: "/images/inverter-project.jpg",
    text: "Të projektuar për impiante në shkallë të gjerë, inverterët project mundësojnë menaxhim të drejtpërdrejtë të stringjeve dhe performancë të lartë në kontekste industriale dhe utility.",
  },
] as const;

function InverterCta() {
  const { openConsultation } = useConsultation();
  return (
    <button
      className="button button-primary"
      type="button"
      onClick={openConsultation}
    >
      Zbulo konfigurimin <ArrowRight size={16} />
    </button>
  );
}

export default function Inverter() {
  return (
    <SiteLayout>
      <PageHero
        title="Inverter"
        intro="Inverterët IDA Solar menaxhojnë dhe transformojnë energjinë e prodhuar, duke garantuar kontroll, siguri dhe vazhdimësi operacionale brenda sistemit."
        image="/images/page-inverter.jpg"
        fallback="/images/panels.jpg"
      />
      <section className="section accumulo-section">
        <div className="container battery-grid">
          {INVERTER_TYPES.map(type => (
            <article className="battery-card" key={type.name}>
              <figure className="battery-media" data-name={type.name}>
                <img
                  src={type.image}
                  alt={type.name}
                  loading="lazy"
                  decoding="async"
                  onError={event => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement?.classList.add("is-empty");
                  }}
                />
              </figure>
              <h3>{type.name}</h3>
              <p>{type.text}</p>
              <button
                className="button button-primary battery-cta"
                type="button"
              >
                Shkarko fletën teknike <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>

        <div className="container accumulo-cta">
          <h3>Kontroll, stabilitet, integrim</h3>
          <InverterCta />
        </div>
      </section>
    </SiteLayout>
  );
}
