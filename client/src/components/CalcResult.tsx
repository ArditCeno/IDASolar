import { type FormEvent, useRef, useState } from "react";
import { ArrowRight, Check, PanelTop, Zap } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";
import { formatEur, formatNum, type SolarResult } from "@/lib/solar";

export function CalcResult({ result }: { result: SolarResult }) {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const { locale } = useLanguage();

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Kërkesa u regjistrua", {
      description:
        "Faleminderit! Ekipi i IDA SOLAR do të të kontaktojë së shpejti.",
    });
    requestAnimationFrame(() =>
      statusRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }),
    );
  };

  return (
    <div className="calculator-result">
      <div className="result-topline">
        <span>VLERËSIMI YT</span>
        <span className="result-live">
          <span /> Live estimate
        </span>
      </div>
      <h3>Sistemi i rekomanduar</h3>
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
          <b>~{result.roofArea} m²</b> çati
        </span>
        {result.batteryKwh > 0 ? (
          <span>
            <b>{result.batteryKwh} kWh</b> bateri
          </span>
        ) : null}
      </div>

      <div className="result-chart" aria-hidden="true">
        <div className="chart-labels">
          <span>Produksion vjetor</span>
          <b>{formatNum(result.annualProduction, locale)} kWh</b>
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
          <strong>{formatEur(result.twentyYearSaving, locale)}</strong>
        </div>
      </div>

      <div className="calc-stats">
        <div className="calc-stat">
          <small>Kursim në vit</small>
          <b>{formatEur(result.annualSaving, locale)}</b>
        </div>
        <div className="calc-stat">
          <small>Kthimi i investimit</small>
          <b>
            {result.paybackYears > 0
              ? `${formatNum(result.paybackYears, locale, 1)} vjet`
              : "—"}
          </b>
        </div>
        <div className="calc-stat">
          <small>Vetëkonsum</small>
          <b>{formatNum(result.selfConsumptionPct * 100, locale)}%</b>
        </div>
        <div className="calc-stat">
          <small>CO₂ e shmangur / vit</small>
          <b>{formatNum(result.co2TonsPerYear, locale, 1)} t</b>
        </div>
      </div>

      <p className="result-disclaimer">
        Vlerësim orientues bazuar në konsumin, zonën dhe rrezatimin mesatar.
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
  );
}
