import { useEffect, useRef, useState } from "react";
import { Sun } from "lucide-react";
import { azimuthLabel } from "@/lib/solar";

const TICKS = Array.from({ length: 72 }, (_, i) => i * 5);
const CARDINALS: { key: string; label: string; x: number; y: number }[] = [
  { key: "n", label: "N", x: 100, y: 20 },
  { key: "e", label: "E", x: 182, y: 105 },
  { key: "s", label: "S", x: 100, y: 192 },
  { key: "w", label: "W", x: 18, y: 105 },
];

export function OrientationCompass({
  value,
  onChange,
}: {
  value: number;
  onChange: (azimuth: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [sensorOn, setSensorOn] = useState(false);
  const [sensorError, setSensorError] = useState<string | null>(null);

  const angleFromPoint = (clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return value;
    const rect = el.getBoundingClientRect();
    const dx = clientX - (rect.left + rect.width / 2);
    const dy = clientY - (rect.top + rect.height / 2);
    const angle = (Math.atan2(dx, -dy) * 180) / Math.PI;
    return Math.round((angle + 360) % 360);
  };

  const onPointerDown = (event: React.PointerEvent) => {
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setDragging(true);
    onChange(angleFromPoint(event.clientX, event.clientY));
  };
  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging) return;
    onChange(angleFromPoint(event.clientX, event.clientY));
  };
  const onPointerUp = () => setDragging(false);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const step = event.shiftKey ? 15 : 5;
    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      onChange((value + step) % 360);
      event.preventDefault();
    } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      onChange((value - step + 360) % 360);
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (!sensorOn) return;
    const handler = (event: DeviceOrientationEvent) => {
      const e = event as DeviceOrientationEvent & {
        webkitCompassHeading?: number;
      };
      let heading: number | null = null;
      if (typeof e.webkitCompassHeading === "number") {
        heading = e.webkitCompassHeading;
      } else if (typeof e.alpha === "number") {
        heading = 360 - e.alpha;
      }
      if (heading !== null && !Number.isNaN(heading)) {
        onChange(Math.round(((heading % 360) + 360) % 360));
      }
    };
    window.addEventListener("deviceorientationabsolute", handler, true);
    window.addEventListener("deviceorientation", handler, true);
    return () => {
      window.removeEventListener("deviceorientationabsolute", handler, true);
      window.removeEventListener("deviceorientation", handler, true);
    };
  }, [sensorOn, onChange]);

  const enableSensor = async () => {
    setSensorError(null);
    try {
      const D = window.DeviceOrientationEvent as
        | (typeof DeviceOrientationEvent & {
            requestPermission?: () => Promise<string>;
          })
        | undefined;
      if (D && typeof D.requestPermission === "function") {
        const result = await D.requestPermission();
        if (result !== "granted") {
          setSensorError("Leja për kompasin u refuzua.");
          return;
        }
      }
      setSensorOn(true);
    } catch {
      setSensorError("Kompaçi i pajisjes nuk mbështetet.");
    }
  };

  return (
    <div className="compass">
      <div
        className="compass-dial"
        ref={ref}
        role="slider"
        tabIndex={0}
        aria-label="Orientimi i çatisë"
        aria-valuemin={0}
        aria-valuemax={359}
        aria-valuenow={value}
        aria-valuetext={`${azimuthLabel(value)} ${value}°`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <circle className="compass-ring" cx="100" cy="100" r="94" />
          <circle className="compass-ring inner" cx="100" cy="100" r="70" />
          <path
            className="compass-sunpath"
            d="M 100 6 A 94 94 0 0 1 194 100"
            fill="none"
          />
          {TICKS.map(deg => {
            const major = deg % 45 === 0;
            return (
              <line
                key={deg}
                className={major ? "compass-tick major" : "compass-tick"}
                x1="100"
                y1={major ? 6 : 9}
                x2="100"
                y2="16"
                transform={`rotate(${deg} 100 100)`}
              />
            );
          })}
          {CARDINALS.map(c => (
            <text
              key={c.key}
              className={`compass-cardinal compass-${c.key}`}
              x={c.x}
              y={c.y}
              textAnchor="middle"
            >
              {c.label}
            </text>
          ))}
          <g transform={`rotate(${value} 100 100)`}>
            <line className="compass-pointer" x1="100" y1="100" x2="100" y2="26" />
            <polygon className="compass-arrow" points="100,18 93,34 107,34" />
          </g>
          <circle className="compass-hub" cx="100" cy="100" r="7" />
        </svg>
        <span className="compass-sun" aria-hidden="true">
          <Sun size={15} />
        </span>
      </div>

      <div className="compass-side">
        <span className="compass-readout">
          <b>{azimuthLabel(value)}</b>
          <small>{value}°</small>
        </span>
        <button
          type="button"
          className={`compass-sensor${sensorOn ? " on" : ""}`}
          onClick={enableSensor}
          aria-pressed={sensorOn}
        >
          {sensorOn ? "Kompaçi aktiv" : "Përdor kompasin e telefonit"}
        </button>
        {sensorError ? <span className="compass-error">{sensorError}</span> : null}
        <span className="compass-hint">
          Rrotullo telefonin ose tërhiq shigjetën për drejtimin e çatisë.
        </span>
      </div>
    </div>
  );
}
