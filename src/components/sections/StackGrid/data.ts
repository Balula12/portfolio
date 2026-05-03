export const STACK = {
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

export type StackCategoryKey = keyof typeof STACK;
