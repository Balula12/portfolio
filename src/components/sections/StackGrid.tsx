import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

const STACK = {
  frontend: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "TailwindCSS",
    "shadcn/ui",
    "Zustand",
    "React Query",
    "Zod",
  ],
  backend: [
    "Node.js",
    "Bun",
    "REST APIs",
    "Firebase / Firestore",
    "PostgreSQL",
    "Redis (Upstash)",
    "JWT",
    "Webhooks",
    "mTLS",
  ],
  payments: [
    "Stripe",
    "Mercado Pago",
    "Pagar.me",
    "EfiBank",
    "PIX",
    "Solana / Crypto",
  ],
  infra: [
    "Git",
    "GitHub Actions",
    "Docker",
    "Cloudflare R2",
    "Playwright",
    "Jest",
    "OpenTelemetry",
    "Pino",
  ],
} as const;

export async function StackGrid() {
  const t = await getTranslations("stack");

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight">{t("title")}</h2>
        <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {(Object.keys(STACK) as Array<keyof typeof STACK>).map((cat) => (
          <div key={cat}>
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">
              {t(`categories.${cat}`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {STACK[cat].map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
