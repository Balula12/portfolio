import { getTranslations } from "next-intl/server";
import { HeroActions } from "./HeroActions";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="mx-auto w-full max-w-4xl px-6 pt-20 pb-16 sm:pt-28">
      <div className="overflow-hidden rounded-xl border border-border bg-zinc-950 font-mono text-sm shadow-2xl shadow-zinc-950/30">
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-red-500/80" />
            <span className="size-3 rounded-full bg-yellow-500/80" />
            <span className="size-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-zinc-500">~/portfolio · zsh</span>
          <span className="w-12" />
        </div>

        <div className="space-y-5 p-6 leading-relaxed sm:p-8">
          <div>
            <Line prompt symbol="$">whoami</Line>
            <Output color="emerald">gustavo balula</Output>
            <Output muted>{t("eyebrow")}</Output>
          </div>

          <div>
            <Line prompt symbol="$">cat ./headline.md</Line>
            <p className="mt-1 text-balance text-2xl font-semibold leading-snug text-zinc-50 sm:text-3xl md:text-4xl">
              {t("title")}
            </p>
          </div>

          <div>
            <Line prompt symbol="$">cat ./about.txt</Line>
            <p className="mt-1 max-w-2xl text-balance text-zinc-300">
              {t("subtitle")}
            </p>
          </div>

          <div>
            <Line prompt symbol="$">
              ls --next
              <Cursor />
            </Line>
            <div className="mt-3">
              <HeroActions />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({
  prompt,
  symbol,
  children,
}: {
  prompt?: boolean;
  symbol: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-2 text-zinc-100">
      <span className={prompt ? "text-emerald-400" : "text-zinc-500"}>
        {symbol}
      </span>
      <span>{children}</span>
    </p>
  );
}

function Output({
  children,
  color,
  muted,
}: {
  children: React.ReactNode;
  color?: "emerald";
  muted?: boolean;
}) {
  const cls = muted
    ? "text-zinc-500"
    : color === "emerald"
      ? "text-emerald-300"
      : "text-zinc-200";
  return <p className={`pl-4 ${cls}`}>&gt; {children}</p>;
}

function Cursor() {
  return (
    <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-emerald-400 align-middle" />
  );
}
