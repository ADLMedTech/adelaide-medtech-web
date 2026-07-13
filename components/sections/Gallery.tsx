"use client";

import Image from "next/image";

const row1 = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
];

const row2 = [
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
];

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
        className={`flex w-max gap-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative h-[280px] w-[420px] flex-shrink-0 overflow-hidden rounded-[34px]"
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
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto mb-16 text-center">
        <p className="mb-4 uppercase tracking-[0.45em] text-violet-400">
          INSIDE THE EXPERIENCE
        </p>

        <h2 className="text-6xl font-bold">
          This is{" "}
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Adelaide
            <br />
            MedTech Hackathon.
          </span>
        </h2>
      </div>

      <div className="relative">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-48 bg-gradient-to-r from-[#09090b] to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-48 bg-gradient-to-l from-[#09090b] to-transparent" />

        <div className="flex flex-col gap-8">
          <GalleryRow images={row1} />
          <GalleryRow images={row2} reverse />
        </div>
      </div>
    </section>
  );
}