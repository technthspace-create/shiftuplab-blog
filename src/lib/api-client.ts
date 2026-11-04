const API = process.env.PLATFORM_API_URL;
export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API) throw new Error("PLATFORM_API_URL is not configured");
  const response = await fetch(new URL(path, API), { ...init, headers: { "content-type": "application/json", ...init?.headers }, cache: "no-store" });
  if (!response.ok) throw new Error(`API request failed (${response.status})`);
  return response.json() as Promise<T>;
}
