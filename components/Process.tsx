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
    <section className="relative py-28 overflow-hidden">
      {/* Diagonal dark bg */}
      <div className="absolute inset-0 bg-navy-dark diagonal-both" />
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute inset-0 stripe-pattern opacity-20" />

      {/* Large decorative "03" */}
      <div className="absolute right-10 bottom-10 font-display text-[250px] leading-none font-extrabold text-white/[0.02] select-none pointer-events-none hidden lg:block">
        03
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label !text-white/90 !bg-white/[0.07] !border-white/10">
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-5 mb-4 tracking-tight">
            Three Simple Steps<br />to a Better Roof
          </h2>
          <p className="text-white/50 text-lg">
            From first call to final inspection, here&apos;s how we take care of your home.
          </p>
        </div>

        {/* Steps — horizontal with connector */}
        <div className="relative">
          {/* Horizontal connector line */}
          <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-patriot-red via-white/20 to-patriot-red" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center group">
                {/* Step number circle — sits on the connector line */}
                <div className="relative z-10 mx-auto mb-8">
                  <div className="w-[104px] h-[104px] mx-auto rounded-full bg-navy-dark ring-2 ring-white/10 flex items-center justify-center group-hover:ring-patriot-red/50 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-patriot-red to-patriot-red-dark flex items-center justify-center shadow-xl shadow-patriot-red/20">
                      <s.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="font-display font-extrabold text-navy text-xs">{s.step}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
