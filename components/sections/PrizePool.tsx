"use client";

import { prizes } from "@/data/prizes";
import BackgroundGlow from "@/components/ui/BackgroundGlow";



export default function PrizePool() {
  return (
    <section
      id="prizes"
      className="relative py-40 overflow-hidden"
    >
      <BackgroundGlow
        colour="gold"
        position="center"
    />
              
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.12),transparent_65%)]" />

      <div className="container mx-auto px-6 relative">

        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-violet-400 text-sm">

            PRIZE POOL

          </p>

          <h2 className="mt-5 text-6xl lg:text-8xl font-black">

            $1,700+

          </h2>

          <p className="mt-8 text-xl text-slate-400 leading-9">

            More than just prize money.

            Build connections, launch ideas and meet
            industry leaders.

          </p>

        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-3">

          {prizes.map((prize) => (

            <div
              key={prize.place}
              className="group glass rounded-[36px] border border-white/10 p-10 transition-all duration-500 hover:-translate-y-4 hover:border-violet-500/40"
            >

              <div
                className={`inline-flex rounded-full bg-gradient-to-r ${prize.colour} px-5 py-2 text-sm font-semibold`}
              >

                {prize.place}

              </div>

              <h3 className="mt-8 text-6xl font-bold">

                {prize.prize}

              </h3>

              <div className="mt-10 space-y-4">

                {prize.benefits.map((benefit) => (

                  <div
                    key={benefit}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-slate-300"
                  >

                    {benefit}

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}