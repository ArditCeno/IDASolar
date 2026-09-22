import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ProductGrid } from "./Home";

export default function Moduli() {
  return (
    <SiteLayout>
      <PageHero
        title="Moduli Fotovoltaici"
        intro="Nga zgjidhjet kompakte rezidenciale te modulet për kushte ekstreme — secila linjë IDA është projektuar për një nevojë të qartë."
        image="/images/page-moduli.webp"
        fallback="/images/panels.jpg"
      />
      <section className="section product-section" id="products">
        <div className="container">
          <ProductGrid />
        </div>
      </section>
    </SiteLayout>
  );
}
