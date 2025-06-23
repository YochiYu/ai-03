import React from "react";
import { cn } from "@/lib/utils";

interface Taiwan50PlusCompanyCardProps {
  name?: string;
  countryYear?: string;
  category?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function splitName(name: string) {
  // For Taiwan 50+ companies, the name format is "Chinese (English)"
  const regex = /^(.+?)\s*\((.+?)\)$/;
  const match = name.match(regex);
  if (match) {
    return {
      zh: match[1],
      en: match[2],
    };
  }
  return { zh: name, en: "" };
}

const Taiwan50PlusCompanyCard: React.FC<Taiwan50PlusCompanyCardProps> = ({
  name,
  countryYear,
  category,
  description,
  children,
  className = "",
  style = {},
}) => {
  // If children are provided, render them in a simple card.
  if (children) {
    return (
      <div
        className={cn(
          "relative overflow-hidden flex flex-col justify-center items-center",
          "rounded-3xl border border-white/15 bg-white/5",
          "backdrop-blur-xl transition-transform duration-300 group hover:scale-[1.030] shadow-2xl",
          className
        )}
        style={{ width: 840, height: 320, minWidth: 840, minHeight: 320, maxWidth: 840, maxHeight: 320, WebkitBackdropFilter: "blur(30px)", backdropFilter: "blur(30px)", ...style }}
      >
        {/* Animated Border Gradient */}
        <div aria-hidden
          className={
            "pointer-events-none absolute inset-0 z-0 rounded-3xl border-2 transition-all duration-400 group-hover:scale-105 group-hover:opacity-100"
          }
          style={{ opacity: 0.68 }}
        >
          <span className="block absolute inset-0 mix-blend-lighten pointer-events-none rounded-3xl opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
        </div>
        {/* Inner shadow for glass depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 rounded-3xl"
          style={{ boxShadow: 'inset 0 3px 32px 4px rgba(255,255,255,0.08)', mixBlendMode: 'screen' }}
        />
        {/* Frosted glass overlay (top only, for depth) */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 w-full h-1/3 rounded-t-3xl"
          style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.17),rgba(255,255,255,0.01) 100%)', zIndex: 1 }}
        />
        {/* Card Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8">
          {children}
        </div>
      </div>
    );
  }

  // Ensure name is defined before splitting
  const { zh, en } = name ? splitName(name) : { zh: '', en: '' };

  return (
    <div
      className={cn(
        "w-full max-w-[800px] mx-auto flex flex-col items-center",
        "rounded-3xl bg-white/10 border border-white/15 shadow-[0_8px_48px_0_rgba(99,102,241,0.13)]",
        "backdrop-blur-2xl px-8 py-6 md:px-20 md:py-8",
        "relative z-10 overflow-hidden"
      )}
      style={{
        boxShadow: "0 8px 48px 0 rgba(99,102,241,0.13), 0 0 0 1.5px rgba(255,255,255,0.09)",
        background:
          "linear-gradient(120deg, rgba(255,255,255,0.15) 10%, rgba(241,235,255,0.07) 60%, rgba(121,92,255,0.10) 100%)",
        border: "1.5px solid rgba(255,255,255,0.08)",
        minHeight: "700px",
        maxWidth: "98vw"
      }}
    >
      <div className="flex flex-col items-center w-full">
        {/* Country/Year Tag */}
        <span
          className="inline-block mb-8 text-indigo-100 bg-white/5 border border-white/10 px-10 py-4 rounded-full font-medium tracking-wide"
          style={{
            fontWeight: 500,
            opacity: 0.78,
            fontSize: "2.5rem",
            letterSpacing: "0.011em",
            marginBottom: "4rem",
          }}
        >
          {countryYear}
        </span>
        {/* Category */}
        <div
          className="text-indigo-200 text-[42px] font-semibold tracking-wider text-center"
          style={{
            marginBottom: "16px",
            lineHeight: 1.4,
            opacity: 0.97,
          }}
        >
          {category}
        </div>
        {/* Description */}
        <div
          className="text-white/90 text-[2.25rem] md:text-[45px] text-left px-12 animate-fade-in"
          style={{
            marginTop: "48px",
            marginBottom: "6rem",
            letterSpacing: "0.02em",
            lineHeight: 1.78,
            fontWeight: 500,
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default Taiwan50PlusCompanyCard;
