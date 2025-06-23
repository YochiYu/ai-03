import React from "react";
import { cn } from "@/lib/utils";

interface Taiwan50DetailProps {
  name: string;
  enName?: string;
  countryYear: string;
  category: string;
  description: string;
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

const Taiwan50Detail: React.FC<Taiwan50DetailProps> = ({
  name,
  enName,
  countryYear,
  category,
  description,
}) => {
  const { zh, en } = splitName(name);
  const displayEn = enName || en;
  return (
    <div
      className={cn(
        "w-full max-w-[800px] mx-auto flex flex-col items-center",
        "rounded-3xl bg-white/10 border border-white/20 shadow-[0_8px_48px_0_rgba(99,102,241,0.13)]",
        "backdrop-blur-2xl px-8 py-6 md:px-10 md:py-8",
        "relative z-10 overflow-hidden"
      )}
      style={{
        boxShadow: "0 8px 48px 0 rgba(99,102,241,0.13), 0 0 0 1.5px rgba(255,255,255,0.09)",
        background:
          "linear-gradient(120deg, rgba(255,255,255,0.15) 10%, rgba(241,235,255,0.07) 60%, rgba(121,92,255,0.10) 100%)",
        border: "1.5px solid rgba(255,255,255,0.08)",
        minHeight: "800px",
        maxWidth: "98vw",
        paddingTop: "70px",
      }}
    >
      <div className="flex flex-col items-center w-full">
        {/* Company Name with Luminous Glow */}
        <div
          className="text-white text-[86.4px] md:text-[108px] font-black font-tech text-center tracking-tight animate-fade-in"
          style={{
            marginBottom: "3.75rem",
            lineHeight: 1.13,
            letterSpacing: "-0.012em",
            textShadow: `
              0 3px 20px rgba(163, 148, 255, 0.42),
              0 1px 22px #9ca2fd88,\
              0 0 45px #d3d2ff55,\
              0 1.5px 9px #fff9,\
              0 0 2px #fff
            `,
          }}
        >
          <span className="block mb-[30px]">{zh}</span>
          {displayEn && (
            <span className="block text-5xl font-semibold tracking-tight text-white/90 mt-2" style={{ letterSpacing: '0.08em' }}>{displayEn}</span>
          )}
        </div>
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
          className="text-white/90 text-[2.53125rem] md:text-[45px] text-left px-12 animate-fade-in"
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            letterSpacing: "0.02em",
            lineHeight: 1.78,
            fontWeight: 500,
            padding:"16px",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default Taiwan50Detail; 