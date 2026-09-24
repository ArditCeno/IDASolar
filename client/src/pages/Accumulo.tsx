import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero, useConsultation } from "@/components/SiteLayout";
import { BatteryGrid } from "@/components/BatteryGrid";
import { asset } from "@/lib/asset";

const BATTERY_TYPES = [
  {
    name: "IDA Battery SK-B",
    image: asset("/images/battery-sk-b.jpg"),
    text: "Sistem modular me efikasitet të lartë i bazuar në teknologjinë LiFePO4, i projektuar për të garantuar siguri, jetëgjatësi dhe performancë konstante me kalimin e kohës. Konfigurimi i zgjerueshëm lejon përshtatjen e kapacitetit sipas nevojave të projektit.",
  },
  {
    name: "Battery Container",
    image: asset("/images/battery-container.jpg"),
    text: "Zgjidhje për aplikacione industriale dhe në shkallë të gjerë, me sisteme të integruara akumulimi dhe inverteri. Projektuar për instalim të shpejtë dhe menaxhim efikas të energjisë.",
  },
  {
    name: "Balcony Storage System",
    image: asset("/images/battery-balcony.jpg"),
    text: "Sistem kompakt për përdorim rezidencial, i integrueshëm me module plug & play. Mundëson akumulim lokal dhe monitorim të thjeshtë përmes aplikacionit.",
  },
  {
    name: "All-in-One Storage System",
    image: asset("/images/battery-allinone.jpg"),
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
        image={asset("/images/page-accumulo.webp")}
        fallback={asset("/images/battery.jpg")}
      />
      <section className="section accumulo-section">
        <BatteryGrid items={BATTERY_TYPES} />

        <div className="container accumulo-cta">
          <h3>Akumulimi plotëson sistemin energjetik</h3>
          <AccumuloCta />
        </div>
      </section>
    </SiteLayout>
  );
}
