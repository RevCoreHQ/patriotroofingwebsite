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

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - content */}
          <div>
            <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">Why Patriot Roofing</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-6">
              The Difference Is in the Details
            </h2>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              Choosing a roofing contractor is a major decision. We earn your trust through consistent quality, honest communication, and a genuine commitment to protecting your home.
            </p>

            <div className="space-y-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-5">
                  <div className="w-12 h-12 bg-patriot-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <reason.icon className="w-6 h-6 text-patriot-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg mb-1">{reason.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - visual */}
          <div className="relative">
            <div className="bg-warm-gray rounded-3xl p-8 lg:p-12">
              <div className="bg-navy rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 hero-pattern opacity-50" />
                <div className="relative text-center p-8">
                  <div className="w-20 h-20 bg-patriot-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-2xl mb-2">Your Home Deserves the Best</p>
                  <p className="text-white/60 text-sm">Premium roofing by local experts</p>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <p className="text-3xl font-bold text-patriot-red">500+</p>
              <p className="text-muted text-sm">Projects Completed</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hidden sm:block">
              <p className="text-3xl font-bold text-navy">100%</p>
              <p className="text-muted text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
