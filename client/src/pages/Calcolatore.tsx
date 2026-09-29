import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { CalcOptionsPanel } from "@/components/CalcOptions";
import { asset } from "@/lib/asset";
import { ENERGY_TARIFF, EXPORT_TARIFF, type CalcOptions } from "@/lib/solar";
import { Calculator, SizingCalculator } from "./Home";

export default function Calcolatore() {
  const [options, setOptions] = useState<CalcOptions>({
    zone: "center",
    azimuth: 180,
    battery: true,
    energyTariff: ENERGY_TARIFF,
    exportTariff: EXPORT_TARIFF,
  });

  return (
    <SiteLayout>
      <PageHero
        title="Calcolatore"
        intro="Zgjidh kalkulatorin sipas asaj që di: faturën mujore ose konsumin dhe madhësinë e objektit. Rezultati përditësohet menjëherë."
        image={asset("/images/page-calcolatore.webp")}
        fallback={asset("/images/panels.jpg")}
      />
      <section className="section calculator-section" id="calculator">
        <div className="calculator-backdrop" />
        <div className="container calculator-stack">
          <div className="calculator-block">
            <span className="calc-subtitle">Konteksti i sistemit</span>
            <CalcOptionsPanel value={options} onChange={setOptions} />
          </div>

          <div className="calculator-block">
            <span className="calc-subtitle">Nga fatura mujore</span>
            <Calculator options={options} />
          </div>

          <div className="calculator-block">
            <span className="calc-subtitle">
              Nga konsumi & madhësia e shtëpisë
            </span>
            <SizingCalculator options={options} />
          </div>

          <div className="calculator-block calc-method">
            <span className="calc-subtitle">Metodologjia</span>
            <p>
              Llogaritjet bazohen në mesatare italiane: rendiment 1.150–1.550
              kWh/kWp në vit sipas zonës gjeografike, çmim energjie 0,20 €/kWh,
              shitje e tepricës 0,10 €/kWh, degradim 0,5% në vit, jetëgjatësi 20
              vjet dhe vetëkonsum 30–65% sipas llojit të objektit dhe pranisë së
              baterisë. Kthimi i investimit përdor një çmim orientues prej 1.300
              €/kWp. Të gjitha vlerat janë orientuese — oferta përfundimtare
              përcaktohet nga kushtet reale të çatisë dhe instalimit.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
