const projects = [
  { title: "Complete Roof Replacement", location: "Lexington, NC", type: "Architectural Shingles" },
  { title: "Storm Damage Repair", location: "Greensboro, NC", type: "Emergency Service" },
  { title: "New Construction Roofing", location: "Winston-Salem, NC", type: "Metal Roofing" },
  { title: "Gutter Installation", location: "High Point, NC", type: "Seamless Gutters" },
  { title: "Roof Inspection & Repair", location: "Thomasville, NC", type: "Leak Repair" },
  { title: "Full Home Remodel", location: "Kernersville, NC", type: "Roof + Siding" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted text-lg">
            See the quality and craftsmanship we bring to every roofing project across North Carolina.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group relative rounded-2xl overflow-hidden bg-warm-gray">
              {/* Placeholder image area */}
              <div className="aspect-[4/3] bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center relative">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-navy/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <p className="text-navy/40 text-sm font-medium">Project Photo</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <p className="font-bold text-lg mb-1">{project.title}</p>
                    <p className="text-white/70 text-sm">{project.type}</p>
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-5">
                <h3 className="font-bold text-dark">{project.title}</h3>
                <p className="text-muted text-sm mt-1">{project.location} &bull; {project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
