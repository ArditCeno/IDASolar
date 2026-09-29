import { useEffect, useRef, useState } from "react";
import { Compass as CompassIcon, Moon, Sun } from "lucide-react";
import { azimuthFactor, azimuthLabel, azimuthShort } from "@/lib/solar";
import type { GeoZone } from "@/hooks/useGeoZone";

const C = 120;
const TICKS = Array.from({ length: 72 }, (_, i) => i * 5);
const NUMBERS = [30, 60, 120, 150, 210, 240, 300, 330];
const CARDINALS = [
  { key: "n", label: "N", deg: 0 },
  { key: "e", label: "E", deg: 90 },
  { key: "s", label: "S", deg: 180 },
  { key: "w", label: "W", deg: 270 },
];

function polar(radius: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: C + radius * Math.cos(rad), y: C + radius * Math.sin(rad) };
}

export function OrientationCompass({
  value,
  onChange,
  geo,
}: {
  value: number;
  onChange: (azimuth: number) => void;
  geo: GeoZone;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [dark, setDark] = useState(false);
  const [sensorOn, setSensorOn] = useState(false);
  const [sensorError, setSensorError] = useState<string | null>(null);

  const angleFromPoint = (clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return value;
    const rect = el.getBoundingClientRect();
    const dx = clientX - (rect.left + rect.width / 2);
    const dy = clientY - (rect.top + rect.height / 2);
    return Math.round(((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360);
  };

  const onPointerDown = (event: React.PointerEvent) => {
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setDragging(true);
    onChange(angleFromPoint(event.clientX, event.clientY));
  };
  const onPointerMove = (event: React.PointerEvent) => {
    if (dragging) onChange(angleFromPoint(event.clientX, event.clientY));
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

  const efficiency = Math.round(azimuthFactor(value) * 100);

  return (
    <div className={`compass${dark ? " compass--dark" : ""}`}>
      <div className="compass-stage">
        <button
          type="button"
          className="compass-theme"
          onClick={() => setDark(d => !d)}
          aria-label="Ndrysho pamjen e kompasit"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

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
          <svg viewBox="0 0 240 240" aria-hidden="true">
            <defs>
              <radialGradient id="compassFace" cx="50%" cy="36%" r="72%">
                <stop offset="0%" stopColor="var(--compass-grad-1)" />
                <stop offset="100%" stopColor="var(--compass-grad-2)" />
              </radialGradient>
            </defs>

            <circle className="compass-ring" cx={C} cy={C} r={112} />
            <circle
              className="compass-face"
              cx={C}
              cy={C}
              r={104}
              fill="url(#compassFace)"
            />

            {TICKS.map(deg => {
              const major = deg % 30 === 0;
              const from = polar(102, deg);
              const to = polar(major ? 92 : 97, deg);
              return (
                <line
                  key={deg}
                  className={major ? "compass-tick major" : "compass-tick"}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                />
              );
            })}

            {NUMBERS.map(deg => {
              const p = polar(84, deg);
              return (
                <text
                  className="compass-num"
                  key={deg}
                  x={p.x}
                  y={p.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {deg}
                </text>
              );
            })}

            {CARDINALS.map(c => {
              const p = polar(84, c.deg);
              return (
                <text
                  className={`compass-cardinal compass-${c.key}`}
                  key={c.key}
                  x={p.x}
                  y={p.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {c.label}
                </text>
              );
            })}

            <g transform={`rotate(${value} ${C} ${C})`}>
              <line
                className="compass-pointer"
                x1={C}
                y1={62}
                x2={C}
                y2={22}
              />
              <polygon className="compass-arrow" points="120,14 113,30 127,30" />
              <circle className="compass-dot" cx={C} cy={102} r={6} />
            </g>

            <circle className="compass-hub" cx={C} cy={C} r={46} />
            <text
              className="compass-deg"
              x={C}
              y={116}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {value}°
            </text>
            <text
              className="compass-dir"
              x={C}
              y={140}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {azimuthLabel(value)}
            </text>
          </svg>
        </div>
      </div>

      <div className="compass-side">
        <span className="compass-readout">
          <b>{azimuthShort(value)}</b>
          <small>{efficiency}% rendiment</small>
        </span>

        <span className="compass-zone">
          <CompassIcon size={14} />
          {geo.status === "ok" && geo.region
            ? `Zona: ${geo.region} · ${geo.specificYield} kWh/kWp`
            : geo.status === "locating"
              ? "Duke zbuluar zonën…"
              : `Mesatare · ${geo.specificYield} kWh/kWp`}
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
