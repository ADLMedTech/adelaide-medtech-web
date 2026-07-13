"use client";

import { audience } from "@/data/audience";

export default function Audience() {
  return (
    <section
      id="audience"
      className="relative overflow-hidden py-32"
    >
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-violet-400">
            WHO BELONGS HERE?
          </p>

          <h2 className="text-5xl font-bold lg:text-6xl">
            Innovation Needs
            <br />
            Every Discipline.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            The best healthcare innovations happen when medicine,
            engineering, business and design work together.
          </p>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {audience.map((item) => (

            <div
              key={item.title}
              className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:bg-white/[0.05]"
            >

              <div className="text-5xl">

                {item.emoji}

              </div>

              <h3 className="mt-8 text-3xl font-bold">

                {item.title}

              </h3>

              <p className="mt-6 leading-8 text-slate-400">

                {item.description}

              </p>

            </div>

          ))}

        </div>

        <div className="mx-auto mt-32 max-w-5xl rounded-[40px] border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-transparent to-indigo-500/10 p-16 text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            FIRST TIME?
          </p>

          <h2 className="mt-6 text-5xl font-bold lg:text-7xl leading-tight">

            Never Written
            <br />
            A Line Of Code?

          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-300">

            Perfect.

            <br /><br />

            Some of the best ideas don't come from programmers.

            They come from curious people who care about improving
            healthcare.

            We'll provide mentors, workshops and teammates to help
            bring your idea to life.

          </p>

        </div>

      </div>
    </section>
  );
}