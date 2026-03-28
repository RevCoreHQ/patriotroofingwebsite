"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Shield, Star, Award } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlaying = () => {
      setVideoReady(true);
      window.dispatchEvent(new Event("heroVideoReady"));
    };
    video.addEventListener("playing", onPlaying);

    video.load();
    video.play().catch(() => {
      const tryPlay = () => {
        video.play().catch(() => {});
        document.removeEventListener("click", tryPlay);
        document.removeEventListener("scroll", tryPlay);
      };
      document.addEventListener("click", tryPlay, { once: true });
      document.addEventListener("scroll", tryPlay, { once: true });
    });

    return () => video.removeEventListener("playing", onPlaying);
  }, []);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${y * 0.35}px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${y * 0.15}px)`;
        contentRef.current.style.opacity = `${Math.max(0, 1 - y / 700)}`;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center bg-navy-dark overflow-hidden">
      {/* Background with parallax */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ top: "-10%", bottom: "-10%" }}>
        {/* Static poster — always visible, loads instantly */}
        <Image
          src="/media/hero-poster.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Video fades in on top once playing — no flash */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src={IMAGES.heroVideo}
        />
      </div>

      {/* Layered overlays */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 stripe-pattern opacity-40" />

      {/* Large decorative star */}
      <div className="absolute -right-20 -top-20 text-[380px] leading-none text-white/[0.02] select-none pointer-events-none hidden lg:block">
        ★
      </div>

      {/* Diagonal red accent shard */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-patriot-red/[0.06] skew-x-[-12deg] translate-x-1/4 hidden lg:block" />

      {/* Floating badge - top */}
      <div className="absolute top-36 right-[14%] bg-white/[0.07] border border-white/10 rounded-2xl p-5 backdrop-blur-sm hidden xl:block animate-float">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-patriot-red rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Licensed & Insured</p>
            <p className="text-white/50 text-xs">North Carolina</p>
          </div>
        </div>
      </div>

      {/* Floating rating badge - bottom */}
      <div className="absolute bottom-44 right-[10%] bg-white/[0.07] border border-white/10 rounded-2xl p-5 backdrop-blur-sm hidden xl:block animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="flex items-center gap-2 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gold fill-gold" />
          ))}
        </div>
        <p className="text-white/60 text-xs font-medium">Rated 5.0 by NC Homeowners</p>
      </div>

      {/* Content with scroll fade */}
      <div ref={contentRef} className="relative max-w-7xl mx-auto px-6 pt-20 w-full will-change-transform">
        <div className="max-w-3xl">
          {/* Section label */}
          <div className="animate-fade-up">
            <span className="section-label !text-white/90 !bg-white/[0.07] !border-white/10">
              Trusted by Hundreds of NC Homeowners
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold text-white leading-[1.05] mt-6 mb-5 sm:mt-8 sm:mb-6 tracking-tight">
            Protect Your Home
            <br />
            <span className="relative inline-block">
              with NC&apos;s
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-patriot-red" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0 8 Q50 0 100 7 T200 4" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            <span className="text-patriot-red-light">Most Trusted</span>{" "}
            Roofers
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-white/55 mb-10 max-w-xl leading-relaxed">
            Storm damage repairs to complete roof replacements — our licensed team delivers quality craftsmanship and clear communication on every project.
          </p>

          {/* Trust indicators */}
          <div className="animate-fade-up-delay-2 flex flex-wrap gap-3 mb-10">
            {[
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Star, text: "5-Star Rated" },
              { icon: Award, text: "Satisfaction Guaranteed" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 px-4 py-2.5 rounded-full">
                <Icon className="w-4 h-4 text-patriot-red-light" />
                <span className="text-white/75 text-sm font-medium">{text}</span>
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-patriot-red text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:bg-patriot-red-dark hover:shadow-2xl hover:shadow-patriot-red/25 hover:-translate-y-0.5"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-3">
        <span className="text-white/40 text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Angled bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 100h1440V55L0 100z" fill="white" />
          <path d="M0 100h1440V60L0 92z" fill="white" opacity="0.4" />
        </svg>
      </div>
    </section>
  );
}
