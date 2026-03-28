import Image from "next/image";
import { IMAGES } from "@/lib/constants";

const images = [
  { src: IMAGES.gallery1, span: "md:col-span-2 md:row-span-2" },
  { src: IMAGES.gallery9, span: "" },
  { src: IMAGES.gallery10, span: "" },
  { src: IMAGES.gallery11, span: "" },
  { src: IMAGES.gallery12, span: "md:col-span-2" },
  { src: IMAGES.gallery2, span: "" },
  { src: IMAGES.gallery13, span: "" },
  { src: IMAGES.gallery14, span: "md:col-span-2" },
  { src: IMAGES.gallery3, span: "" },
  { src: IMAGES.gallery15, span: "" },
  { src: IMAGES.gallery16, span: "" },
  { src: IMAGES.gallery4, span: "md:col-span-2 md:row-span-2" },
  { src: IMAGES.gallery17, span: "" },
  { src: IMAGES.gallery5, span: "" },
  { src: IMAGES.gallery18, span: "" },
  { src: IMAGES.gallery6, span: "md:col-span-2" },
  { src: IMAGES.gallery19, span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Our Work</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4 tracking-tight">
              Gallery
            </h2>
            <p className="text-muted text-lg max-w-lg">
              See the quality and craftsmanship we bring to every project across North Carolina.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={`Patriot Roofing project ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={img.span.includes("col-span-2") ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
