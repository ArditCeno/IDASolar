import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { OrientationCompass } from "@/components/OrientationCompass";
import { useGeoZone } from "@/hooks/useGeoZone";
import { asset } from "@/lib/asset";
import { Calculator, SizingCalculator } from "./Home";

export default function Calcolatore() {
  const [azimuth, setAzimuth] = useState(180);
  const geo = useGeoZone();

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
            <span className="calc-subtitle">Nga fatura mujore</span>
            <Calculator specificYield={geo.specificYield} azimuth={azimuth} />
          </div>

          <div className="calculator-block compass-block">
            <span className="calc-subtitle">Orientimi i çatisë</span>
            <OrientationCompass
              value={azimuth}
              onChange={setAzimuth}
              geo={geo}
            />
          </div>

          <div className="calculator-block">
            <span className="calc-subtitle">
              Nga konsumi & madhësia e shtëpisë
            </span>
            <SizingCalculator
              specificYield={geo.specificYield}
              azimuth={azimuth}
            />
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
