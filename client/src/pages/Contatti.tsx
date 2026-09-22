import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export default function Contatti() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    toast.success("Kërkesa u dërgua", {
      description: "Faleminderit! Një ekspert i IDA SOLAR do të të kontaktojë.",
    });
  };

  return (
    <SiteLayout>
      <section className="section contatti-section page-section">
        <div className="container page-head">
          <h2>Kontaktet</h2>
          <p className="lead-copy">
            Na kontakto për një konsultë teknike ose për më shumë informacion
            mbi zgjidhjet IDA Solar.
          </p>
        </div>

        <div className="container contatti-grid">
          <div className="contatti-info">
            <div className="contatti-block">
              <span className="contatti-icon">
                <Phone size={18} />
              </span>
              <div>
                <small>Kontakt</small>
                <a href="tel:+393463530429">+39 346 353 0429</a>
                <a href="mailto:info@idasolar.it">
                  <Mail size={14} /> info@idasolar.it
                </a>
              </div>
            </div>

            <div className="contatti-block">
              <span className="contatti-icon">
                <MapPin size={18} />
              </span>
              <div>
                <small>Lokacioni</small>
                <span>
                  Via Milano, 8 — 20816 Ceriano Laghetto (MB), Italia
                </span>
              </div>
            </div>

            <div className="contatti-map">
              <iframe
                title="IDA Solar"
                src="https://www.google.com/maps?q=Via+Milano+8,+20816+Ceriano+Laghetto+(MB),+Italia&output=embed"
                loading="lazy"
              />
            </div>
          </div>

          <div className="contatti-form-wrap">
            {sent ? (
              <div className="contatti-success" role="status" aria-live="polite">
                <span className="contatti-success-icon">
                  <Check size={26} />
                </span>
                <h3>Kërkesa u dërgua!</h3>
                <p>
                  Faleminderit. Një ekspert i IDA SOLAR do të të kontaktojë së
                  shpejti.
                </p>
                <button
                  className="button button-ghost"
                  type="button"
                  onClick={() => setSent(false)}
                >
                  Dërgo një kërkesë tjetër
                </button>
              </div>
            ) : (
              <form className="contatti-form" onSubmit={submit}>
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
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="arta@email.com"
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
                  Mesazhi
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Shkruaj kërkesën tënde…"
                  />
                </label>
                <button className="button button-primary" type="submit">
                  Dërgo kërkesën <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
