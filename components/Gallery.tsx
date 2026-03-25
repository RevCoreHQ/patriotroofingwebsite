import Image from "next/image";
import { IMAGES } from "@/lib/constants";

const projects = [
  { title: "Complete Roof Replacement", location: "Lexington, NC", type: "Architectural Shingles", span: "md:col-span-2 md:row-span-2", image: IMAGES.gallery1 },
  { title: "Storm Damage Repair", location: "Greensboro, NC", type: "Emergency Service", span: "", image: IMAGES.gallery2 },
  { title: "New Construction Roofing", location: "Winston-Salem, NC", type: "Metal Roofing", span: "", image: IMAGES.gallery3 },
  { title: "Gutter Installation", location: "High Point, NC", type: "Seamless Gutters", span: "", image: IMAGES.gallery4 },
  { title: "Roof Inspection & Repair", location: "Thomasville, NC", type: "Leak Repair", span: "md:col-span-2", image: IMAGES.gallery5 },
  { title: "Full Home Remodel", location: "Kernersville, NC", type: "Roof + Siding", span: "", image: IMAGES.gallery6 },
];

export default function Gallery() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header — left-aligned */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Our Work</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted text-lg max-w-lg">
              See the quality and craftsmanship we bring to every roofing project across North Carolina.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-4">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${project.span}`}
            >
              <Image
                src={project.image}
                alt={`${project.title} - ${project.location}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Project info — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block bg-patriot-red text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {project.type}
                </span>
                <h3 className="font-display font-bold text-white text-lg">{project.title}</h3>
                <p className="text-white/60 text-sm mt-1">{project.location}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
