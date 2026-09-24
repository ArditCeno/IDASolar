import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero, useConsultation } from "@/components/SiteLayout";
import { asset } from "@/lib/asset";
import { AppMockup } from "./Home";

function AppCta() {
  const { openConsultation } = useConsultation();
  return (
    <button
      className="button button-primary"
      type="button"
      onClick={openConsultation}
    >
      Kërko ofertë <ArrowRight size={16} />
    </button>
  );
}

export default function AppPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Aplikacioni"
        intro="Monitoroji dhe menaxho prodhimin, konsumin dhe baterinë në kohë reale, direkt nga telefoni."
        image={asset("/images/page-app.webp")}
        fallback={asset("/images/hero.jpg")}
      />
      <section className="section app-section" id="app">
        <div className="container app-grid">
          <div className="app-visual reveal-up">
            <AppMockup />
          </div>
          <div className="app-copy reveal-up delay-1">
            <h2>
              Kontroll i plotë nga <em>pëllëmba e dorës.</em>
            </h2>
            <p className="lead-copy">
              Shiko prodhimin, konsumin dhe baterinë në kohë reale. Kupto ku
              shkon energjia dhe merr vendime më të zgjuara për shtëpinë.
            </p>
            <div className="app-features">
              <div>
                <span>01</span>
                <p>
                  <strong>Grafikë të qartë</strong>
                  <br />
                  Ditore, mujore dhe vjetore.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Siguri 24/7</strong>
                  <br />
                  Njoftime dhe shëndet sistemi.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Kontroll nga kudo</strong>
                  <br />
                  Energjia jote në telefon.
                </p>
              </div>
            </div>
            <div className="app-page-actions">
              <Link className="text-link" href="/calcolatore">
                Projektimi fillon këtu <ArrowRight size={16} />
              </Link>
              <AppCta />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
