"use client";

type BackgroundGlowProps = {
  colour?: "violet" | "blue" | "emerald" | "gold" | "rose";
  position?: "top" | "center" | "bottom";
};

const colours = {
  violet: "from-violet-600/20 to-fuchsia-500/10",
  blue: "from-cyan-500/20 to-indigo-500/10",
  emerald: "from-emerald-500/20 to-green-500/10",
  gold: "from-amber-400/20 to-yellow-300/10",
  rose: "from-rose-500/20 to-pink-500/10",
};

const positions = {
  top: "-top-52",
  center: "top-1/2 -translate-y-1/2",
  bottom: "-bottom-52",
};

export default function BackgroundGlow({
  colour = "violet",
  position = "center",
}: BackgroundGlowProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div
        className={`
          absolute
          left-1/2
          ${positions[position]}
          -translate-x-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-gradient-to-br
          ${colours[colour]}
          blur-[180px]
          animate-glow
        `}
      />

    </div>
  );
}