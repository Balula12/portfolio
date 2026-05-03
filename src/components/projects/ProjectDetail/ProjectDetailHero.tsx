type Props = {
  title: string;
  summary: string;
  role: string;
  period: string;
};

export function ProjectDetailHero({ title, summary, role, period }: Props) {
  return (
    <header className="mb-10">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {role}
        <span className="mx-2 opacity-60">·</span>
        <span className="normal-case tracking-normal">{period}</span>
      </p>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">{summary}</p>
    </header>
  );
}
