import { SiteLayout, SectionLabel } from "@/components/SiteLayout";
import { Projects } from "./Home";

export default function Progetti() {
  return (
    <SiteLayout>
      <section className="section projects-section page-section" id="projects">
        <div className="container projects-heading">
          <div>
            <h2>
              Punë reale.
              <br />
              <em>Rezultate të matshme.</em>
            </h2>
          </div>
          <p>
            Disa nga projektet ku IDA SOLAR ka projektuar, instaluar dhe
            integruar sisteme energjie për nevoja reale operacionale.
          </p>
        </div>
        <div className="container">
          <Projects />
        </div>
      </section>
    </SiteLayout>
  );
}
