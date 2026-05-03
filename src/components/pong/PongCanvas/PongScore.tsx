type Props = {
  player: number;
  bot: number;
};

export function PongScore({ player, bot }: Props) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 flex items-start justify-between px-6 py-5 sm:px-16">
      <span className="text-5xl font-bold leading-none text-[rgba(214,40,40,0.35)] sm:text-6xl">
        {player}
      </span>
      <span className="text-5xl font-bold leading-none text-[rgba(41,121,255,0.35)] sm:text-6xl">
        {bot}
      </span>
    </div>
  );
}
