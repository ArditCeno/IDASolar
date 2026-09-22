import { SiteLayout, SectionLabel } from "@/components/SiteLayout";
import { ProductGrid } from "./Home";

export default function Moduli() {
  return (
    <SiteLayout>
      <section className="section product-section page-section" id="products">
        <div className="container">
          <div className="product-heading">
            <div>
              <h2>
                Gjashtë linja.
                <br />
                <em>Një standard.</em>
              </h2>
            </div>
            <p>
              Nga zgjidhjet kompakte rezidenciale te modulet për kushte
              ekstreme — secila linjë IDA është projektuar për një nevojë të
              qartë.
            </p>
          </div>
          <ProductGrid />
        </div>
      </section>
    </SiteLayout>
  );
}
