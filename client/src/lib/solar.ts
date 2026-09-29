// Solar sizing engine — Italian market averages (editable in one place).

export type ZoneKey = "north" | "center" | "south";
export type OrientationKey = "south" | "ew" | "flat";
export type PropertyKey = "home" | "apartment" | "business" | "industry";

/** Retail electricity price (€/kWh). */
export const ENERGY_TARIFF = 0.2;
/** Price paid when exporting surplus to the grid (€/kWh). */
export const EXPORT_TARIFF = 0.1;
/** Installed cost estimate (€ per kWp). */
export const COST_PER_KWP = 1300;
/** Panel performance degradation per year. */
export const DEGRADATION = 0.005;
/** kg of CO₂ avoided per produced kWh (Italian grid mix). */
export const CO2_KG_PER_KWH = 0.25;
/** Analysis horizon in years. */
export const SYSTEM_LIFE = 20;

/** Specific yield by macro-region (kWh/kWp/year). */
export const ZONES: { key: ZoneKey; label: string; yield: number }[] = [
  { key: "north", label: "Veri", yield: 1150 },
  { key: "center", label: "Qendër", yield: 1350 },
  { key: "south", label: "Jug", yield: 1550 },
];

/** Orientation/tilt correction factor. */
export const ORIENTATIONS: { key: OrientationKey; label: string; factor: number }[] = [
  { key: "south", label: "Jug", factor: 1 },
  { key: "ew", label: "Lindje / Perëndim", factor: 0.85 },
  { key: "flat", label: "Horizontale", factor: 0.9 },
];

/**
 * Property types with their typical self-consumption ratio (with / without
 * battery) and a rough monthly consumption per m² (kWh).
 */
export const PROPERTY_TYPES: {
  key: PropertyKey;
  label: string;
  without: number;
  with: number;
  kwhPerM2: number;
}[] = [
  { key: "home", label: "Shtëpi private", without: 0.35, with: 0.65, kwhPerM2: 3.2 },
  { key: "apartment", label: "Apartament", without: 0.3, with: 0.6, kwhPerM2: 2.8 },
  { key: "business", label: "Biznes / Zyrë", without: 0.55, with: 0.8, kwhPerM2: 5 },
  { key: "industry", label: "Industri / Bujqësi", without: 0.6, with: 0.85, kwhPerM2: 8 },
];

/** Panel tiers: which module is selected as the system grows. */
export const PANEL_TIERS = [
  { maxKwp: 6, watt: 450, area: 1.95, name: "450 W All-black TOPCon" },
  { maxKwp: 20, watt: 550, area: 2.4, name: "550 W Monokristal" },
  {
    maxKwp: Number.POSITIVE_INFINITY,
    watt: 600,
    area: 2.6,
    name: "600 W Bifacial",
  },
] as const;

export interface CalcOptions {
  zone: ZoneKey;
  orientation: OrientationKey;
  battery: boolean;
  energyTariff: number;
  exportTariff: number;
}

export interface SolarResult {
  kwp: number;
  panels: number;
  tier: (typeof PANEL_TIERS)[number];
  roofArea: number;
  batteryKwh: number;
  annualProduction: number;
  annualConsumption: number;
  selfConsumed: number;
  exported: number;
  selfConsumptionPct: number;
  annualSaving: number;
  twentyYearSaving: number;
  paybackYears: number;
  co2TonsPerYear: number;
  co2TonsLifetime: number;
  yieldPerKwp: number;
}

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/**
 * Estimate a photovoltaic system from the annual consumption and context.
 * All money values are in EUR, energy in kWh.
 */
export function estimateSystem(
  annualConsumptionKwh: number,
  property: PropertyKey,
  options: CalcOptions,
): SolarResult {
  const zone = ZONES.find(z => z.key === options.zone) ?? ZONES[1];
  const orientation =
    ORIENTATIONS.find(o => o.key === options.orientation) ?? ORIENTATIONS[0];
  const profile = PROPERTY_TYPES.find(p => p.key === property) ?? PROPERTY_TYPES[0];

  const yieldPerKwp = zone.yield * orientation.factor;
  const consumption = Math.max(0, annualConsumptionKwh);

  const kwp = Math.min(
    Math.max(1, Math.round((consumption / yieldPerKwp) * 2) / 2),
    300,
  );

  const tier =
    PANEL_TIERS.find(entry => kwp <= entry.maxKwp) ??
    PANEL_TIERS[PANEL_TIERS.length - 1];
  const panels = Math.max(1, Math.ceil((kwp * 1000) / tier.watt));
  const roofArea = Math.ceil(panels * tier.area);

  const annualProduction = kwp * yieldPerKwp;

  const selfRatio = options.battery ? profile.with : profile.without;
  const selfConsumed = Math.min(
    annualProduction * selfRatio,
    consumption > 0 ? consumption : annualProduction * selfRatio,
  );
  const exported = Math.max(0, annualProduction - selfConsumed);
  const selfConsumptionPct =
    annualProduction > 0 ? selfConsumed / annualProduction : 0;

  const annualSaving =
    selfConsumed * options.energyTariff + exported * options.exportTariff;

  let twentyYearSaving = 0;
  for (let year = 0; year < SYSTEM_LIFE; year++) {
    twentyYearSaving += annualSaving * Math.pow(1 - DEGRADATION, year);
  }

  const paybackYears =
    annualSaving > 0 ? (kwp * COST_PER_KWP) / annualSaving : 0;

  const batteryKwh = options.battery
    ? Math.min(80, Math.max(5, Math.round((kwp * 1.2) / 5) * 5))
    : 0;

  const co2KgPerYear = annualProduction * CO2_KG_PER_KWH;

  return {
    kwp,
    panels,
    tier,
    roofArea,
    batteryKwh,
    annualProduction,
    annualConsumption: consumption,
    selfConsumed,
    exported,
    selfConsumptionPct,
    annualSaving,
    twentyYearSaving,
    paybackYears,
    co2TonsPerYear: co2KgPerYear / 1000,
    co2TonsLifetime: (co2KgPerYear * SYSTEM_LIFE) / 1000,
    yieldPerKwp,
  };
}

export const formatEur = (value: number, locale: string) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export const formatNum = (value: number, locale: string, digits = 0) =>
  new Intl.NumberFormat(locale, {
    maximumFractionDigits: digits,
  }).format(value);
