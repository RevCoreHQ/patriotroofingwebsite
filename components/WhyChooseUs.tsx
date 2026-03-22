import { Award, Users, MessageSquare, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    desc: "Every project meets our exacting standards. We use only premium materials from trusted manufacturers and our crew has decades of combined experience.",
  },
  {
    icon: Users,
    title: "Reliable Service",
    desc: "We show up on time, every time. Our team respects your property, your schedule, and your budget — no surprises, no excuses.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    desc: "You'll never wonder what's happening with your project. We keep you informed at every stage with honest updates and transparent pricing.",
  },
  {
    icon: DollarSign,
    title: "Fair, Honest Pricing",
    desc: "Get a detailed written estimate upfront with no hidden fees. We help you understand every cost so you can make confident decisions.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "12+", label: "Cities Served" },
  { value: "5.0", label: "Star Rating" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Stripe texture */}
      <div className="absolute inset-0 stripe-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left — content with timeline */}
          <div>
            <span className="section-label">Why Patriot Roofing</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-6 tracking-tight">
              The Difference Is<br />in the Details
            </h2>
            <p className="text-muted text-lg mb-12 leading-relaxed max-w-lg">
              Choosing a roofing contractor is a major decision. We earn your trust through consistent quality and honest communication.
            </p>

            {/* Timeline-style reasons */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-patriot-red via-navy to-transparent" />

              <div className="space-y-10">
                {reasons.map((reason, i) => (
                  <div key={reason.title} className="flex gap-6 relative">
                    {/* Circle on the timeline */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10 ring-4 ring-white ${
                      i % 2 === 0 ? "bg-patriot-red" : "bg-navy"
                    }`}>
                      <reason.icon className="w-5 h-5 text-white" />
                    </div>

                    <div className="pt-1">
                      <h3 className="font-display font-bold text-dark text-lg mb-1.5">{reason.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — stats + visual block */}
          <div className="relative">
            {/* Main visual block */}
            <div className="bg-navy rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 hero-pattern opacity-50" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-patriot-red/20 rounded-full blur-3xl" />

              <div className="relative">
                <div className="w-16 h-20 bg-patriot-red shield-shape flex items-center justify-center mx-auto mb-8">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <p className="text-white font-display font-extrabold text-3xl text-center mb-3">
                  Your Home Deserves<br />the Best
                </p>
                <p className="text-white/50 text-center text-sm mb-10">
                  Premium roofing by local experts who care
                </p>

                {/* Stats grid inside the dark block */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-white/[0.06] border border-white/10 rounded-xl p-5 text-center">
                      <p className="stat-number text-3xl !bg-gradient-to-r !from-white !to-white/80 mb-1">{stat.value}</p>
                      <p className="text-white/50 text-xs font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Offset accent box */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-patriot-red/[0.06] rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
