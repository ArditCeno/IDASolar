import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero, useConsultation } from "@/components/SiteLayout";

const BATTERY_TYPES = [
  {
    name: "IDA Battery SK-B",
    image: "/images/battery-sk-b.jpg",
    text: "Sistem modular me efikasitet të lartë i bazuar në teknologjinë LiFePO4, i projektuar për të garantuar siguri, jetëgjatësi dhe performancë konstante me kalimin e kohës. Konfigurimi i zgjerueshëm lejon përshtatjen e kapacitetit sipas nevojave të projektit.",
  },
  {
    name: "Battery Container",
    image: "/images/battery-container.jpg",
    text: "Zgjidhje për aplikacione industriale dhe në shkallë të gjerë, me sisteme të integruara akumulimi dhe inverteri. Projektuar për instalim të shpejtë dhe menaxhim efikas të energjisë.",
  },
  {
    name: "Balcony Storage System",
    image: "/images/battery-balcony.jpg",
    text: "Sistem kompakt për përdorim rezidencial, i integrueshëm me module plug & play. Mundëson akumulim lokal dhe monitorim të thjeshtë përmes aplikacionit.",
  },
  {
    name: "All-in-One Storage System",
    image: "/images/battery-allinone.jpg",
    text: "Sistem i integruar me kapacitet të lartë, i projektuar për aplikacione të avancuara. Përfshin menaxhim inteligjent, ftohje dhe kontroll të plotë të sistemit.",
  },
] as const;

function AccumuloCta() {
  const { openConsultation } = useConsultation();
  return (
    <button
      className="button button-primary"
      type="button"
      onClick={openConsultation}
    >
      Kërko konsultë <ArrowRight size={16} />
    </button>
  );
}

export default function Accumulo() {
  return (
    <SiteLayout>
      <PageHero
        title="Bateria"
        intro="Sistemet e akumulimit IDA Solar mundësojnë ruajtjen e energjisë së prodhuar për të optimizuar përdorimin e saj, për të reduktuar varësinë nga rrjeti dhe për të garantuar vazhdimësi operacionale. Të integruara në sistem, përmirësojnë efikasitetin e përgjithshëm dhe kontrollin energjetik."
        image="/images/page-accumulo.jpg"
        fallback="/images/battery.jpg"
      />
      <section className="section accumulo-section">
        <div className="container battery-grid">
          {BATTERY_TYPES.map(type => (
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
              <button className="button button-primary battery-cta" type="button">
                Shkarko fletën teknike <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>

        <div className="container accumulo-cta">
          <h3>Akumulimi plotëson sistemin energjetik</h3>
          <AccumuloCta />
        </div>
      </section>
    </SiteLayout>
  );
}
