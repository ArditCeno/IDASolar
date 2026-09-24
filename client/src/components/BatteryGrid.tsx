import { useState } from "react";
import { ArrowRight } from "lucide-react";

export type BatteryType = {
  name: string;
  image: string;
  text: string;
};

export function BatteryGrid({ items }: { items: readonly BatteryType[] }) {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <div className="container battery-grid">
      {items.map(type => {
        const isOpen = openCard === type.name;
        return (
          <article
            className={`battery-card${isOpen ? " is-open" : ""}`}
            key={type.name}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onClick={() => setOpenCard(isOpen ? null : type.name)}
            onKeyDown={event => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setOpenCard(isOpen ? null : type.name);
              }
            }}
          >
            <figure className="battery-media" data-name={type.name}>
              <img
                src={type.image}
                alt={type.name}
                loading="lazy"
                decoding="async"
                onError={event => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement?.classList.add("is-empty");
                }}
              />
            </figure>
            <h3>{type.name}</h3>
            <p>{type.text}</p>
            <span className="card-toggle">
              {isOpen ? "Mbyll" : "Lexo më shumë"}
            </span>
            <button
              className="button button-primary battery-cta"
              type="button"
              onClick={event => event.stopPropagation()}
            >
              Shkarko fletën teknike <ArrowRight size={15} />
            </button>
          </article>
        );
      })}
    </div>
  );
}
