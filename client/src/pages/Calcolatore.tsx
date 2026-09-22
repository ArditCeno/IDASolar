import { SiteLayout, SectionLabel } from "@/components/SiteLayout";
import { Calculator, SizingCalculator } from "./Home";

export default function Calcolatore() {
  return (
    <SiteLayout>
      <section className="section calculator-section page-section" id="calculator">
        <div className="calculator-backdrop" />
        <div className="container calculator-heading">
          <div>
            <h2>
              Projektimi yt
              <br />
              <em>fillon me një numër.</em>
            </h2>
          </div>
          <p>
            Zgjidh kalkulatorin sipas asaj që di: faturën mujore ose konsumin
            dhe madhësinë e objektit.
          </p>
        </div>
        <div className="container calculator-stack">
          <div className="calculator-block">
            <span className="calc-subtitle">Nga fatura mujore</span>
            <Calculator />
          </div>
          <div className="calculator-block">
            <span className="calc-subtitle">
              Nga konsumi & madhësia e shtëpisë
            </span>
            <SizingCalculator />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
