import { Shield, Star, Clock, ThumbsUp } from "lucide-react";

const badges = [
  { icon: Shield, title: "Licensed & Insured", desc: "Full coverage protection", accent: "bg-navy" },
  { icon: Star, title: "5-Star Rated", desc: "Hundreds of happy customers", accent: "bg-patriot-red" },
  { icon: Clock, title: "Free Estimates", desc: "No obligation inspections", accent: "bg-navy" },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "We stand behind our work", accent: "bg-patriot-red" },
];

export default function TrustBar() {
  return (
    <section className="py-6 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-gray-100">
          {badges.map((badge) => (
            <div key={badge.title} className="relative px-6 py-6 group">
              {/* Top accent bar */}
              <div className={`absolute top-0 left-6 right-6 h-[3px] ${badge.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-center gap-4">
                {/* Shield-shaped icon container */}
                <div className={`w-12 h-14 ${badge.accent} shield-shape flex items-center justify-center shrink-0`}>
                  <badge.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark text-sm">{badge.title}</h3>
                  <p className="text-muted text-xs mt-0.5">{badge.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
