const BASE_URL = import.meta.env.BASE_URL || "/";

export function asset(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE_URL}${clean}`;
}
