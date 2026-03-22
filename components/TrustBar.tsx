import { Shield, Star, Clock, ThumbsUp } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "Full coverage protection",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    desc: "Hundreds of happy customers",
  },
  {
    icon: Clock,
    title: "Free Estimates",
    desc: "No obligation inspections",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    desc: "We stand behind our work",
  },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-center gap-4">
              <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center shrink-0">
                <badge.icon className="w-7 h-7 text-navy" />
              </div>
              <div>
                <h3 className="font-bold text-dark text-sm">{badge.title}</h3>
                <p className="text-muted text-xs mt-0.5">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
