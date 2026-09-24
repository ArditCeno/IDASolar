import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { asset } from "@/lib/asset";
import { Projects } from "./Home";

export default function Progetti() {
  return (
    <SiteLayout>
      <PageHero
        title="Projektet"
        intro="Disa nga projektet ku IDA SOLAR ka projektuar, instaluar dhe integruar sisteme energjie për nevoja reale operacionale."
        image={asset("/images/page-progetti.webp")}
        fallback={asset("/images/project-malpensa.jpg")}
      />
      <section className="section projects-section" id="projects">
        <div className="container">
          <Projects />
        </div>
      </section>
    </SiteLayout>
  );
}
