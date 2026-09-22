import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Projects } from "./Home";

export default function Progetti() {
  return (
    <SiteLayout>
      <PageHero
        title="Projektet"
        intro="Disa nga projektet ku IDA SOLAR ka projektuar, instaluar dhe integruar sisteme energjie për nevoja reale operacionale."
        image="/images/page-progetti.webp"
        fallback="/images/project-malpensa.jpg"
      />
      <section className="section projects-section" id="projects">
        <div className="container">
          <Projects />
        </div>
      </section>
    </SiteLayout>
  );
}
