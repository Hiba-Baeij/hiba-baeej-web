/**
 * Resolves the app's base URL safely for both local and Vercel builds.
 * - Handles NEXT_PUBLIC_APP_URL being undefined, empty string, whitespace, or missing protocol
 * - Falls back to VERCEL_URL (auto-set by Vercel) if available
 * - Final fallback is http://localhost:3000 for local dev
 * - Always returns a valid URL string
 */
export function getBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim();

  if (raw) {
    try {
      // Add protocol if missing (e.g. "my-app.vercel.app" -> "https://my-app.vercel.app")
      const candidate =
        raw.startsWith("http://") || raw.startsWith("https://") ? raw : `https://${raw}`;
      // Validate
      new URL(candidate);
      return candidate;
    } catch {
      // invalid NEXT_PUBLIC_APP_URL, fall through to VERCEL_URL / localhost
    }
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    try {
      const candidate = `https://${vercelUrl}`;
      new URL(candidate);
      return candidate;
    } catch {}
  }

  return "http://localhost:3000";
}
