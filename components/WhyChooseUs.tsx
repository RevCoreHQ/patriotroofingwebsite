import Image from "next/image";
import { Award, Users, MessageSquare, DollarSign } from "lucide-react";
import { IMAGES } from "@/lib/constants";

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

          {/* Right — photo + stats */}
          <div className="relative">
            {/* Main photo block */}
            <div className="rounded-3xl overflow-hidden relative">
              <Image
                src={IMAGES.roofWork}
                alt="Patriot Roofing crew installing new shingles on a residential roof"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay with stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/50 to-transparent p-8 pt-20">
                <div className="grid grid-cols-4 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-display font-extrabold text-2xl text-white mb-0.5">{stat.value}</p>
                      <p className="text-white/60 text-[10px] font-medium uppercase tracking-wider">{stat.label}</p>
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
