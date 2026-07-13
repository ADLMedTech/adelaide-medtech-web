import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  colour?: "violet" | "emerald";
};

export default function PrimaryButton({
  href,
  children,
  colour = "violet",
}: Props) {
  const colours = {
    violet:
      "bg-violet-600 hover:bg-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]",

    emerald:
      "bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]",
  };

  return (
    <Link
      href={href}
      className={`
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        ${colours[colour]}
      `}
    >
      {children}

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}