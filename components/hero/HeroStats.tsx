"use client";

const stats = [
  {
    number: "350+",
    label: "Past Participants",
  },
  {
    number: "4+",
    label: "Days",
  },
  {
    number: "$1K+",
    label: "Prizes",
  },
  {
    number: "4+",
    label: "Years Running",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">

      {stats.map((stat) => (

        <div
          key={stat.label}
          className="glass rounded-3xl p-6"
        >

          <h3 className="text-4xl font-bold">

            {stat.number}

          </h3>

          <p className="mt-2 text-sm text-slate-400">

            {stat.label}

          </p>

        </div>

      ))}

    </div>
  );
}