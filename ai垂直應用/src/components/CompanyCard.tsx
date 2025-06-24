import React from "react";
import { cn } from "@/lib/utils";

interface CompanyCardProps {
  name: string;
  logo: string;
  countryYear: string;
  category: string;
  description: string;
  detailPage?: boolean;
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

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  logo,
  countryYear,
  category,
  description,
  detailPage = false,
}) => {
  // Try to split for Taiwan 50+ format, otherwise return original as zh only
  const { zh, en } = splitName(name);

  return (
    <div
      className={cn(
        "w-full max-w-[800px] mx-auto flex flex-col items-center",
        "rounded-3xl bg-white/10 border border-white/20 shadow-[0_8px_48px_0_rgba(99,102,241,0.13)]",
        "backdrop-blur-2xl px-8 py-6 md:px-12 md:py-8",
        "relative z-10 overflow-hidden"
      )}
      style={{
        boxShadow: "0 8px 48px 0 rgba(99,102,241,0.13), 0 0 0 1.5px rgba(255,255,255,0.09)",
        background:
          "linear-gradient(120deg, rgba(255,255,255,0.15) 10%, rgba(241,235,255,0.07) 60%, rgba(121,92,255,0.10) 100%)",
        border: "1.5px solid rgba(255,255,255,0.08)",
        minHeight: "800px",
        maxWidth: "98vw"
      }}
    >
      <div className="flex flex-col items-center w-full">
        {/* Company Logo or fallback head */}
        {category !== "台灣50+" && (
          <div
            className="flex items-center justify-center"
            style={{
              width: 720,
              height: 180,
              marginBottom: "1.6rem",
              marginTop: "2.5rem",
              padding: "10px",
            }}
          >
            {logo ? (
              <img
                src={logo}
                alt={`${name} Logo`}
                className="object-contain"
                style={{
                  maxWidth: 480,
                  maxHeight: 220,
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  display: "block",
                  borderRadius: "44px",
                }}
                loading="lazy"
              />
            ) : (
              <div
                className="flex items-center justify-center w-full h-full rounded-[44px] bg-gradient-to-br from-yellow-200/30 to-indigo-100/10 border border-white/10 shadow-inner"
              >
                {en ? (
                  <div className="flex flex-col items-center w-full px-8">
                    <span
                      className="text-yellow-700/80 font-black text-3xl md:text-5xl text-center drop-shadow-md"
                      style={{
                        letterSpacing: "-0.04em",
                        lineHeight: 1.15,
                        wordBreak: "break-word",
                      }}
                    >
                      {zh}
                    </span>
                    <span
                      className="text-yellow-700/70 font-bold text-xl md:text-3xl text-center mt-3 drop-shadow-md"
                      style={{
                        letterSpacing: "-0.02em",
                        lineHeight: 1.13,
                        wordBreak: "break-word",
                      }}
                    >
                      {en}
                    </span>
                  </div>
                ) : (
                  <span
                    className="text-yellow-700/80 font-black text-3xl md:text-5xl text-center drop-shadow-md"
                    style={{
                      letterSpacing: "-0.04em",
                      padding: "0 24px",
                      lineHeight: 1.15,
                      wordBreak: "break-word",
                    }}
                  >
                    {name}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
        {/* Company Name with Luminous Glow */}
        <div
          className={
            `text-white font-black font-tech text-center tracking-tight animate-fade-in ` +
            (detailPage && name.length > 8
              ? 'text-7xl md:text-7xl'
              : 'text-[86.4px] md:text-[108px]')
          }
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
          {en ? (
            <span>
              <span className="block mb-[20px]">{zh}</span>
              <span className="block text-[54px] md:text-[64.8px] font-semibold tracking-tight text-white/90 mt-3">
                {en}
              </span>
            </span>
          ) : (
            name
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
          className="text-white/90 text-[2.53125rem]  md:text-[45px] text-left px-5 animate-fade-in"
          style={{
            marginTop: "1.2px",
            marginBottom: "1rem",
            letterSpacing: "0.04em",
            lineHeight: 1.78,
            fontWeight: 500,
            maxWidth: "800px",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
