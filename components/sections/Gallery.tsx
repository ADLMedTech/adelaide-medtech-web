"use client";

import Image from "next/image";

// Dynamically generate all 74 image paths
// Change '.jpg' here if your images are .png or .jpeg
const row1 = Array.from({ length: 37 }, (_, i) => `/images/gallery/gallery${i + 1}.jpg`);
const row2 = Array.from({ length: 37 }, (_, i) => `/images/gallery/gallery${i + 38}.jpg`);

function GalleryRow({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-8"
        style={{ 
          // Forces a much slower 350-second animation and handles the direction
          animation: `marquee 350s linear infinite ${reverse ? "reverse" : "normal"}` 
        }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative h-[280px] w-[420px] shrink-0 overflow-hidden rounded-[34px]"
          >
            <Image
              src={image}
              alt="Hackathon Gallery Image"
              fill
              className="object-cover transition duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="overflow-hidden py-24">
      <div className="container mx-auto mb-16 text-center">
        
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-emerald-400">
          Inside the Experience
        </p>

        <h2 className="text-5xl font-bold lg:text-6xl">
          This is{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Adelaide
            <br />
            MedTech Hackathon.
          </span>
        </h2>
        
      </div>

      <div className="relative">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-48 bg-gradient-to-r from-[#0f1322] to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-48 bg-gradient-to-l from-[#0f1322] to-transparent" />

        <div className="flex flex-col gap-8">
          <GalleryRow images={row1} />
          <GalleryRow images={row2} reverse />
        </div>
      </div>
    </section>
  );
}