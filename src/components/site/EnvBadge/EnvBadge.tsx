import { getTranslations } from "next-intl/server";

// process.env.VERCEL_ENV é setado automaticamente pela Vercel:
//   'production' | 'preview' | 'development'
// Localmente (bun dev / sem Vercel) é undefined.
type VercelEnv = "production" | "preview" | "development";

function detectEnv(): VercelEnv {
  const env = process.env.VERCEL_ENV;
  if (env === "production" || env === "preview" || env === "development") {
    return env;
  }
  return "development";
}

export async function EnvBadge() {
  const env = detectEnv();
  if (env === "production") return null;

  const t = await getTranslations("envBadge");

  return (
    <span
      className="inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-amber-700 dark:text-amber-400"
      aria-label={t("ariaLabel")}
    >
      {t(env)}
    </span>
  );
}
