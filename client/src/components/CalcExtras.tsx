import { type CSSProperties } from "react";
import { BatteryCharging } from "lucide-react";

export function CalcExtras({
  tariff,
  onTariff,
  battery,
  onBattery,
}: {
  tariff: number;
  onTariff: (value: number) => void;
  battery: boolean;
  onBattery: (value: boolean) => void;
}) {
  return (
    <>
      <div className="calc-block">
        <div className="bill-heading">
          <h3>Çmimi i energjisë</h3>
          <strong>{tariff.toFixed(2)} €/kWh</strong>
        </div>
        <input
          className="solar-range"
          type="range"
          min="0.1"
          max="0.4"
          step="0.01"
          value={tariff}
          onChange={event => onTariff(Number(event.target.value))}
          style={
            { "--range": `${((tariff - 0.1) / 0.3) * 100}%` } as CSSProperties
          }
          aria-label="Çmimi i energjisë në euro për kilovat-orë"
        />
      </div>

      <div className="battery-toggle-row">
        <div className="battery-mini-icon">
          <BatteryCharging size={19} />
        </div>
        <div>
          <strong>Shto bateri backup</strong>
          <span>Ruaj energjinë dhe rrit vetëkonsumin.</span>
        </div>
        <button
          type="button"
          className={`toggle ${battery ? "on" : ""}`}
          onClick={() => onBattery(!battery)}
          aria-pressed={battery}
          aria-label="Shto bateri backup"
        >
          <span />
        </button>
      </div>
    </>
  );
}
