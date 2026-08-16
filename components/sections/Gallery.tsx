"use client";

import Image from "next/image";

// Row 1: Images 1 to 37
const row1 = Array.from(
  { length: 37 },
  (_, index) => `/images/gallery/gallery${index + 1}.webp`,
);

// Row 2: Images 38 to 74 
const row2 = Array.from(
  { length: 37 },
  (_, index) => `/images/gallery/gallery${index + 38}.webp`,
);

type GalleryRowProps = {
  images: string[];
  reverse?: boolean;
};

function GalleryRow({ images, reverse = false }: GalleryRowProps) {
  return (
    <div className="relative w-full max-w-full overflow-x-clip [contain:layout_paint]">
      <div
        className={`flex w-max min-w-max will-change-transform [animation-duration:220s] sm:[animation-duration:280s] lg:[animation-duration:350s] ${
          reverse ? "[animation-direction:reverse]" : ""
        } motion-reduce:animate-none`}
        style={{
          animationName: "marquee",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {/* Two identical groups create the seamless animation */}
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            aria-hidden={copyIndex === 1}
            className="flex shrink-0 gap-2.5 pr-2.5 sm:gap-4 sm:pr-4 lg:gap-8 lg:pr-8"
          >
            {images.map((image, imageIndex) => (
              <div
                key={`${copyIndex}-${image}`}
                className="group relative h-[130px] w-[195px] shrink-0 overflow-hidden rounded-[18px] border border-white/[0.07] bg-white/[0.03] shadow-lg shadow-black/10 sm:h-[190px] sm:w-[285px] sm:rounded-[24px] lg:h-[280px] lg:w-[420px] lg:rounded-[34px]"
              >
                <Image
                  src={image}
                  alt={
                    copyIndex === 0
                      ? `Adelaide MedTech Hackathon gallery image ${
                          imageIndex + 1
                        }`
                      : ""
                  }
                  fill
                  sizes="(max-width: 639px) 195px, (max-width: 1023px) 285px, 420px"
                  quality={50}
                  loading="lazy"
                  decoding="async"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Very subtle image finish */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 to-transparent" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative isolate w-full max-w-full overflow-x-clip py-16 sm:py-20 lg:py-24 [contain:layout_paint]"
    >
      {/* Heading */}
      <div className="container mx-auto mb-10 px-6 text-center sm:mb-14 lg:mb-16">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-400 sm:mb-4 sm:text-sm sm:tracking-[0.45em]">
          Inside the Experience
        </p>

        <h2 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          This is{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Adelaide
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            MedTech Hackathon.
          </span>
        </h2>
      </div>

      {/* Gallery rows */}
      <div className="relative w-full max-w-full overflow-x-clip [contain:layout_paint]">
        {/* Mobile-friendly edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0f1322] to-transparent sm:w-20 lg:w-48" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0f1322] to-transparent sm:w-20 lg:w-48" />

        <div className="flex w-full max-w-full flex-col gap-2.5 overflow-x-clip sm:gap-4 lg:gap-8">
          <GalleryRow images={row1} />
          <GalleryRow images={row2} reverse />
        </div>
      </div>
    </section>
  );
}