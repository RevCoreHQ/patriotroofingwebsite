const projects = [
  { title: "Complete Roof Replacement", location: "Lexington, NC", type: "Architectural Shingles", span: "md:col-span-2 md:row-span-2" },
  { title: "Storm Damage Repair", location: "Greensboro, NC", type: "Emergency Service", span: "" },
  { title: "New Construction Roofing", location: "Winston-Salem, NC", type: "Metal Roofing", span: "" },
  { title: "Gutter Installation", location: "High Point, NC", type: "Seamless Gutters", span: "" },
  { title: "Roof Inspection & Repair", location: "Thomasville, NC", type: "Leak Repair", span: "md:col-span-2" },
  { title: "Full Home Remodel", location: "Kernersville, NC", type: "Roof + Siding", span: "" },
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
              {/* Gradient background with varied colors */}
              <div className={`absolute inset-0 ${
                i === 0
                  ? "bg-gradient-to-br from-navy via-navy-light to-navy-dark"
                  : i % 3 === 1
                  ? "bg-gradient-to-br from-warm-gray to-warm-gray-dark"
                  : i % 3 === 2
                  ? "bg-gradient-to-br from-navy/[0.08] to-navy/[0.03]"
                  : "bg-gradient-to-br from-patriot-red/[0.06] to-warm-gray"
              }`} />

              {/* Subtle texture */}
              <div className="absolute inset-0 hero-pattern opacity-30" />

              {/* Placeholder icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  i === 0 ? "bg-white/10" : "bg-navy/[0.06]"
                }`}>
                  <svg viewBox="0 0 24 24" className={`w-8 h-8 ${i === 0 ? "text-white/30" : "text-navy/20"}`} fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
              </div>

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
