import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../companyData'; // Import the new data
import TechCard from '../components/TechCard';
import Taiwan50PlusCard from '../components/Taiwan50PlusCompanyCard';

const Index: React.FC = () => {
  const navigate = useNavigate();
  // Separate the Taiwan 50+ category from the others
  const regularCategories = categories.filter(cat => cat.slug !== 'taiwan-50plus');
  const taiwan50PlusCategory = categories.find(cat => cat.slug === 'taiwan-50plus');

  // 播放 click-2 並延遲導向
  const handleNavigate = (to: string) => {
    const audio = new Audio('/sounds/click-2.mp3');
    audio.volume = 1.0;
    audio.play();
    setTimeout(() => navigate(to), 120);
  };

  return (
    <div
      className="relative h-screen w-full overflow-y-auto overflow-x-hidden flex flex-col items-center touch-pan-y scrollable-vertical"
      style={{
        background: `url('/lovable-uploads/BG-2.png') center center / cover no-repeat, linear-gradient(135deg, #07061a 0%, #18113a 60%, #0e1328 100%)`,
        WebkitOverflowScrolling: "touch"
      }}
    >
      <div
        className="relative w-full h-fit flex-none flex items-center justify-between px-[115px] pt-[40px] pb-[24px] max-md:px-4 max-md:py-4 max-sm:px-2 max-sm:py-2 mb-[30px] mt-[30px]"
      >
        <div style={{ width: 230, height: 124 }} />
        <img
          src="/lovable-uploads/5f919233-8f16-4381-9404-f9db788ad548.png"
          alt="Logo"
          className="w-[180px] object-contain"
          style={{ marginLeft: 'auto' }}
        />
      </div>
      <div className="noise-overlay" />
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
          <ellipse cx="250" cy="200" rx="230" ry="170" fill="url(#glow-grad)" />
          <defs>
            <radialGradient id="glow-grad" cx="60%" cy="50%" r="100%">
              <stop stopColor="#fff" stopOpacity="0.30" offset="0%" />
              <stop stopColor="#aab5fa" stopOpacity="0.37" offset="35%" />
              <stop stopColor="#b370fd" stopOpacity="0.12" offset="75%" />
              <stop stopColor="#3c71c8" stopOpacity="0.16" offset="100%" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-[900px] flex flex-col items-center pt-[10px] pb-[80px]">
        <h1
          className="text-white text-9xl font-black font-tech tracking-[.10em] text-center drop-shadow-2xl animate-fade-in"
          style={{ letterSpacing: "0.05em", lineHeight: 1.12 }}
        >
          AI 水平應用
        </h1>
      </div>
      
      <div className="relative z-10 w-full max-w-[900px] flex-1 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-10 w-[840px] mx-auto">
          {regularCategories.map((category, idx) => (
            <button
              key={category.slug}
              type="button"
              className="block focus:outline-none"
              style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
              onClick={() => handleNavigate(`/${category.slug}`)}
            >
              <TechCard
                content={category.name}
                className="aspect-[4/3] min-h-[220px] max-w-full animate-fade-in touch-manipulation"
                style={{ animationDelay: `${0.09 * idx + 0.2}s`, animationFillMode: "both" }}
              />
            </button>
          ))}

          {taiwan50PlusCategory && (
            <div className="sm:col-span-2">
              <button
                type="button"
                className="block focus:outline-none"
                style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                onClick={() => handleNavigate(`/${taiwan50PlusCategory.slug}`)}
              >
                <Taiwan50PlusCard
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.09 * regularCategories.length + 0.2}s`, animationFillMode: "both" }}
                >
                  <h2 className="text-7xl font-bold text-center w-full text-white">{taiwan50PlusCategory.name}</h2>
                </Taiwan50PlusCard>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
