import { useEffect, useState } from "react";
import { DEFAULT_YIELD, regionLabel, yieldFromLatitude } from "@/lib/solar";

export type GeoStatus = "locating" | "ok" | "denied" | "unsupported";

export interface GeoZone {
  specificYield: number;
  region: string | null;
  status: GeoStatus;
}

/**
 * Detect the user's region and specific solar yield from the browser
 * geolocation. Falls back to the Italian average when unavailable.
 */
export function useGeoZone(): GeoZone {
  const [state, setState] = useState<GeoZone>({
    specificYield: DEFAULT_YIELD,
    region: null,
    status: "locating",
  });

  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setState({
        specificYield: DEFAULT_YIELD,
        region: null,
        status: "unsupported",
      });
      return;
    }
    let cancelled = false;
    navigator.geolocation.getCurrentPosition(
      position => {
        if (cancelled) return;
        const latitude = position.coords.latitude;
        setState({
          specificYield: yieldFromLatitude(latitude),
          region: regionLabel(latitude),
          status: "ok",
        });
      },
      () => {
        if (cancelled) return;
        setState({
          specificYield: DEFAULT_YIELD,
          region: null,
          status: "denied",
        });
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 },
    );
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
