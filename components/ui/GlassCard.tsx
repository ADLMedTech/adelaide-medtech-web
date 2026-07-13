type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-violet-500/40
        hover:shadow-[0_20px_80px_rgba(124,58,237,.18)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

      <div className="relative">
        {children}
      </div>
    </div>
  );
}