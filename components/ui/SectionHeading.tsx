type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: Props) {
  return (
    <div
      className={`mb-20 ${
        center ? "mx-auto max-w-3xl text-center" : ""
      }`}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-violet-400">
        {eyebrow}
      </p>

      <h2 className="text-5xl font-bold leading-tight lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-8 text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}