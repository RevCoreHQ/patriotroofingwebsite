import { ClipboardCheck, FileText, Hammer } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Free Inspection",
    desc: "We thoroughly assess your roof's condition, identify any issues, and document everything with photos — completely free, no obligation.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Custom Plan & Quote",
    desc: "You'll receive a detailed proposal with transparent pricing, material options, and a clear timeline. No surprises, no pressure.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Expert Execution",
    desc: "Our skilled crew completes your project on time and on budget, leaving your property spotless. We don't stop until you're 100% satisfied.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-patriot-red-light font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Three Simple Steps to a Better Roof
          </h2>
          <p className="text-white/60 text-lg">
            We make roofing simple. From first call to final inspection, here&apos;s how we take care of your home.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-patriot-red/50 to-transparent" />
              )}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-patriot-red rounded-xl flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-white/10">{s.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
