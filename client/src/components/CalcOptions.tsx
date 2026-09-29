import { type CSSProperties } from "react";
import { BatteryCharging } from "lucide-react";
import { type CalcOptions, ORIENTATIONS, ZONES } from "@/lib/solar";

export function CalcOptionsPanel({
  value,
  onChange,
}: {
  value: CalcOptions;
  onChange: (next: CalcOptions) => void;
}) {
  return (
    <div className="calc-options">
      <div className="calc-opt">
        <span className="calc-opt-label">Zona</span>
        <div className="calc-seg" role="group" aria-label="Zona gjeografike">
          {ZONES.map(zone => (
            <button
              key={zone.key}
              type="button"
              className={value.zone === zone.key ? "selected" : ""}
              aria-pressed={value.zone === zone.key}
              onClick={() => onChange({ ...value, zone: zone.key })}
            >
              {zone.label}
            </button>
          ))}
        </div>
      </div>

      <div className="calc-opt">
        <span className="calc-opt-label">Orientimi</span>
        <div className="calc-seg" role="group" aria-label="Orientimi i çatisë">
          {ORIENTATIONS.map(orientation => (
            <button
              key={orientation.key}
              type="button"
              className={value.orientation === orientation.key ? "selected" : ""}
              aria-pressed={value.orientation === orientation.key}
              onClick={() =>
                onChange({ ...value, orientation: orientation.key })
              }
            >
              {orientation.label}
            </button>
          ))}
        </div>
      </div>

      <div className="calc-opt calc-opt-price">
        <span className="calc-opt-label">Çmimi i energjisë</span>
        <div className="calc-price">
          <input
            className="solar-range"
            type="range"
            min="0.1"
            max="0.4"
            step="0.01"
            value={value.energyTariff}
            onChange={event =>
              onChange({ ...value, energyTariff: Number(event.target.value) })
            }
            style={
              {
                "--range": `${((value.energyTariff - 0.1) / 0.3) * 100}%`,
              } as CSSProperties
            }
            aria-label="Çmimi i energjisë në euro për kilovat-orë"
          />
          <strong>{value.energyTariff.toFixed(2)} €/kWh</strong>
        </div>
      </div>

      <div className="calc-opt calc-opt-battery">
        <div className="battery-mini-icon">
          <BatteryCharging size={19} />
        </div>
        <div>
          <strong>Shto bateri backup</strong>
          <span>Ruaj energjinë dhe rrit vetëkonsumin.</span>
        </div>
        <button
          type="button"
          className={`toggle ${value.battery ? "on" : ""}`}
          aria-pressed={value.battery}
          aria-label="Shto bateri backup"
          onClick={() => onChange({ ...value, battery: !value.battery })}
        >
          <span />
        </button>
      </div>
    </div>
  );
}
