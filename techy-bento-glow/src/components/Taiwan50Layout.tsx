import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface Taiwan50LayoutProps {
  children: React.ReactNode;
  gradient: string;
  glow: string;
  categoryName: string;
}

const Taiwan50Layout: React.FC<Taiwan50LayoutProps> = ({ children, gradient, glow, categoryName }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full min-h-screen relative"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {/* Grain/Noise Overlay */}
      <div className="noise-overlay" />
      {/* Glowing Blob, styled per category */}
      <div
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 pointer-events-none"
        style={{
          width: 540,
          height: 460,
          filter: "blur(40px)",
          opacity: 0.8,
          animation: "blob-spin 18s linear infinite",
        }}
      >
        <svg width="540" height="460" viewBox="0 0 520 420" fill="none">
          <ellipse cx="250" cy="200" rx="230" ry="170" fill="url(#category-glow-grad)" />
          <defs>
            <radialGradient id="category-glow-grad" cx="60%" cy="50%" r="100%">
              <stop stopColor="#fff" stopOpacity="0.21" offset="0%" />
              <stop stopColor="#aab5fa" stopOpacity="0.29" offset="35%" />
              <stop stopColor="#b370fd" stopOpacity="0.08" offset="75%" />
              <stop stopColor="#3c71c8" stopOpacity="0.14" offset="100%" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Fixed Header: nav + h1 */}
      <div
        className="sticky top-0 left-0 w-full z-50 z-10 flex flex-col items-center"
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'saturate(180%) blur(20px)',
        
          boxShadow: '0 4px 32px 0 rgba(0,0,0,0.28)'
        }}
      >
        {/* Navigation Bar */}
        <div
          className="w-full flex items-center justify-between px-[115px] pt-[40px] pb-[24px] mt-[30px] max-md:px-4 max-md:py-4 max-sm:px-2 max-sm:py-2"
        >
          <button
            onClick={() => {
              const audio = new Audio('/sounds/click-1.mp3');
              audio.play();
              setTimeout(() => navigate(-1), 120); // delay navigation for sound
            }}
            className="px-[46px] py-[23px] rounded-full backdrop-blur-xl bg-white/10 text-white text-[52px] font-bold flex items-center gap-[23px] hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-[46px] h-[46px]" />
            <span className="max-sm:hidden">返回前頁</span>
          </button>
          {/* Logo at top-right, same as index page */}
          <img
            src="/lovable-uploads/5f919233-8f16-4381-9404-f9db788ad548.png"
            alt="Logo"
            className="w-[180px] object-contain"
            style={{ marginLeft: 'auto' }}
          />
        </div>
        {/* h1 Title */}
        <h1
          className="w-full h-40 pt-10 text-white text-8xl font-black font-tech tracking-[.10em] text-center animate-fade-in"
          style={{
            letterSpacing: "0.05em",
            lineHeight: 1.14,
            textShadow: `0 3px 20px rgba(163, 148, 255, 0.42), 0 1px 22px #9ca2fd88, 0 0 45px #d3d2ff55, 0 1.5px 9px #fff9, 0 0 2px #fff`
          }}
        >
          {categoryName}
        </h1>
      </div>
      <div
        className="w-full max-w-[900px] mx-auto flex flex-col items-center pt-20 pb-12 z-10"
      >
        {children}
      </div>
    </div>
  );
};

export default Taiwan50Layout; 