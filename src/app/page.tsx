export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-sm font-mono uppercase tracking-widest text-zinc-500">
        Portfolio · em construção
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        Gustavo Santos Balula
      </h1>
      <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
        Full-Stack Developer · Next.js, TypeScript e integrações de pagamento.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <a
          className="rounded-full border border-zinc-300 px-4 py-2 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          href="mailto:contatogubalula@gmail.com"
        >
          contatogubalula@gmail.com
        </a>
        <a
          className="rounded-full border border-zinc-300 px-4 py-2 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          href="https://github.com/Balula12"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="rounded-full border border-zinc-300 px-4 py-2 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          href="https://www.linkedin.com/in/gustavo-balula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}
