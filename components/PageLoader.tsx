"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const dismiss = () => {
      setFadeOut(true);
      setTimeout(() => setHidden(true), 600);
    };

    // Listen for hero video ready event
    window.addEventListener("heroVideoReady", dismiss, { once: true });

    // Max timeout — don't block the site forever
    const timeout = setTimeout(dismiss, 4000);

    // Prevent scroll while loading
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("heroVideoReady", dismiss);
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, []);

  // Restore scroll when hidden
  useEffect(() => {
    if (hidden) {
      document.body.style.overflow = "";
    }
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <Image
        src={IMAGES.logo}
        alt="Patriot Roofing & Home Repair"
        width={260}
        height={80}
        className="h-16 sm:h-20 w-auto mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
        priority
      />

      {/* Loading bar */}
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-patriot-red rounded-full animate-loader" />
      </div>
    </div>
  );
}
