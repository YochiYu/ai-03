import React from "react";

// Enhanced glassmorphism card with multilayer backgrounds, gradient border, animated hover, inner shadow & dynamic glow
const TechCard: React.FC<{
  content: React.ReactNode;
  className?: string;
  gradient?: string; // Tailwind gradients for border/overlay
  glow?: string;     // Tailwind shadow class for colored glow
  style?: React.CSSProperties;
}> = ({ content, className = "", gradient, glow = "", style }) => {
  return (
    <div
      className={`
        relative overflow-hidden flex flex-col justify-center items-center
        rounded-3xl border border-white/15 bg-white/5
        backdrop-blur-xl
        transition-transform duration-300
        group
        hover:scale-[1.030]
        shadow-2xl
        min-h-[200px] min-w-[390px] max-h-[200px] max-w-[390px]
        ${glow}
        ${className}
      `}
      style={{
        WebkitBackdropFilter: "blur(30px)",
        backdropFilter: "blur(30px)",
        width: 390,
        height: 220,
        ...style,
      }}
    >
      {/* Animated Border Gradient */}
      <div aria-hidden
        className={`
          pointer-events-none absolute inset-0 z-0 rounded-3xl border-2
          transition-all duration-400
          ${gradient ? "border-transparent" : ""}
          group-hover:scale-105
          group-hover:opacity-100
        `}
        style={{
          background: gradient
            ? `linear-gradient(95deg, var(--tw-gradient-stops))`
            : undefined,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: 'exclude',
          opacity: 0.68,
          borderImage: gradient
            ? `linear-gradient(97deg, var(--tw-gradient-stops)) 1`
            : undefined,
        }}
      >
        {/* Empty - gradient is handled by Tailwind/utility classes */}
        <span
          className={`
            block absolute inset-0 mix-blend-lighten pointer-events-none
            ${gradient ? `bg-gradient-to-tr ${gradient}` : ""}
            rounded-3xl opacity-100 group-hover:opacity-90
            transition-opacity duration-300
          `}
        />
      </div>
      {/* Inner shadow for glass depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 rounded-3xl"
        style={{
          boxShadow: 'inset 0 3px 32px 4px rgba(255,255,255,0.08)',
          mixBlendMode: 'screen'
        }}
      />
      {/* Frosted glass overlay (top only, for depth) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-full h-1/3 rounded-t-3xl"
        style={{
          background:
            'linear-gradient(180deg,rgba(255,255,255,0.17),rgba(255,255,255,0.01) 100%)',
          zIndex: 1,
        }}
      />
      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8" style={{width:390, height:220}}>
        <span className="text-white font-semibold font-tech text-center break-words drop-shadow-[0_2px_8px_rgba(0,0,0,0.13)] tracking-wider" style={{fontSize: 56}}>
          {typeof content === 'string' && content === '企業AI助理' ? (
            <>
              <span>企業</span><br />
              <span>AI助理</span>
            </>
          ) :
          typeof content === 'string' && (content === '創作（生成式AI）' || content === '創作(生成式AI)') ? (
            <>
              <span>創作</span><br />
              <span className="text-5xl">（生成式AI）</span>
            </>
          ) : content}
        </span>
      </div>
    </div>
  );
};

export default TechCard;
