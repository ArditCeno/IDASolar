import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Calculator, SizingCalculator } from "./Home";

export default function Calcolatore() {
  return (
    <SiteLayout>
      <PageHero
        title="Calcolatore"
        intro="Zgjidh kalkulatorin sipas asaj që di: faturën mujore ose konsumin dhe madhësinë e objektit."
        image="/images/page-calcolatore.webp"
        fallback="/images/panels.jpg"
      />
      <section className="section calculator-section" id="calculator">
        <div className="calculator-backdrop" />
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
