import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  name: string;
  logo?: string;
  route?: string;
}

const placeholder =
  "data:image/svg+xml;utf8,<svg width='160' height='160' viewBox='0 0 160 160' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='160' height='160' fill='%23f3f3f3'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' fill='%23777777' font-size='18' font-family='sans-serif'>No Logo</text></svg>";

const fallbackLogos = [
  "/lovable-uploads/anthropic.png",
  "/lovable-uploads/cohere.png",
  "/lovable-uploads/deepseek.png",
  "/lovable-uploads/gemini.png",
  "/lovable-uploads/meta.png",
  "/lovable-uploads/mistral.png",
  "/lovable-uploads/openAI.png",
  "/lovable-uploads/sarvam.png",
  "/lovable-uploads/sakana.png",
  "/lovable-uploads/world labs.png",
  "/lovable-uploads/xai.png",
];

const getFallbackLogo = (name: string) => {
  // Use a hash of the name to pick a fallback logo deterministically
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const idx = Math.abs(hash) % fallbackLogos.length;
  return fallbackLogos[idx];
};

const CompanyLogo: React.FC<CompanyLogoProps> = ({ name, logo, route }) => {
  const [imgSrc, setImgSrc] = React.useState(logo || getFallbackLogo(name));
  const navigate = useNavigate();

  const handleError = () => {
    console.warn(`[CompanyLogo] Failed to load logo for "${name}": ${imgSrc}`);
    setImgSrc(getFallbackLogo(name));
  };

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <button
      className={cn(
        "flex items-center justify-center",
        "w-[240px] h-auto",
        "bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "cursor-pointer rounded-xl transition-transform duration-150 hover:scale-105"
      )}
      style={{
        padding: 0,
        background: "transparent",
        width: "240px",
        height: "auto",
      }}
      tabIndex={0}
      onClick={() => {
        const audio = new Audio('/sounds/click-2.mp3');
        audio.volume = 1.0;
        audio.play();
        setTimeout(() => handleClick(), 120);
      }}
      aria-label={name}
      type="button"
    >
      <img
        src={imgSrc}
        alt={`${name} Logo`}
        onError={handleError}
        className="object-contain"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "240px",
          maxHeight: "76px",
          background: "transparent",
          display: "block",
        }}
        loading="lazy"
        draggable={false}
      />
    </button>
  );
};

export default CompanyLogo;
