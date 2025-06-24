import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { categories } from '../companyData';

const category = categories.find(c => c.slug === 'drug-development');
const companies = category?.companies || [];

const DrugDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [animatedIndexes, setAnimatedIndexes] = useState<number[]>([]);

  useEffect(() => {
    companies.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedIndexes(prev => [...prev, index]);
      }, 100 + index * 80);
    });
  }, []);

  const companyRows = [];
  for (let i = 0; i < companies.length; i += 2) {
    companyRows.push(companies.slice(i, i + 2));
  }

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center overflow-y-auto overflow-x-hidden touch-pan-y scrollable-vertical"
      style={{
        background: `url('/lovable-uploads/BG-2.png') center center / cover no-repeat, linear-gradient(135deg, #07061a 0%, #18113a 60%, #0e1328 100%)`,
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div className="noise-overlay" />
      {/* Navigation Bar */}
      <div className="relative w-full h-fit flex-none flex items-center justify-between px-[115px] pt-[40px] pb-[24px] max-md:px-4 max-md:py-4 max-sm:px-2 max-sm:py-2 mb-[30px] mt-[30px]">
        <button onClick={() => { const audio = new Audio('/sounds/click-1.mp3'); audio.play(); setTimeout(() => navigate(-1), 120); }} className="px-[46px] py-[23px] rounded-full backdrop-blur-xl bg-white/10 text-white text-[52px] font-bold flex items-center gap-[23px] hover:bg-white/20 transition-colors">
          <ArrowLeft className="w-[46px] h-[46px]" />
          <span className="max-sm:hidden">返回前頁</span>
        </button>
        <img src="/lovable-uploads/5f919233-8f16-4381-9404-f9db788ad548.png" alt="Logo" className="w-[180px] object-contain" style={{ marginLeft: 'auto' }} />
      </div>
      {/* Title & Subtitle */}
      <div className="relative z-10 w-full max-w-[900px] flex flex-col items-center pt-0 pb-[10px]">
        <h1 className="text-white text-8xl font-black font-tech tracking-[.10em] text-center animate-fade-in mb-4" style={{ letterSpacing: '0.05em', lineHeight: 1.14 }}>
          藥物開發
        </h1>
        <div className="text-white text-5xl font-semibold leading-relaxed mt-6 mb-8 text-center pl-16 pr-16">
          AI加速藥物研發流程，助力新藥設計與臨床試驗創新。
        </div>
      </div>
      {/* Glassmorphism Panel for Company Grid */}
      <div className="w-full max-w-[700px] mx-auto">
        <div
          className={`
            rounded-3xl
            shadow-[0_8px_48px_0_rgba(99,102,241,0.22)]
            border border-white/20
            bg-gradient-to-br from-white/20 via-white/10 to-indigo-200/10
            backdrop-blur-2xl
            relative
            z-10
          `}
          style={{
            boxShadow:
              "0 8px 48px 0 rgba(99,102,241,0.22), 0 0 0 1px rgba(255,255,255,0.12)",
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.19) 10%, rgba(241,235,255,0.09) 50%, rgba(121,92,255,0.13) 100%)",
            border: "1.5px solid rgba(255,255,255,0.12)",
            padding: '50px',
            width: '700px',
            minHeight: '400px',
            margin: '20px auto'
          }}
        >
          <div className="w-[592px] mx-auto flex flex-col items-center gap-y-4">
            {companyRows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`
                  grid grid-cols-2 w-[580px] h-[182px] mx-auto
                  gap-x-[24px] gap-y-[24px]
                  justify-items-center
                  relative
                `}
              >
                {row.map((company, companyIndex) => {
                  const globalIndex = rowIdx * 2 + companyIndex;
                  return (
                    <div
                      key={company.id}
                      className={
                        `flex justify-center items-center h-full relative logo-animate cursor-pointer hover:scale-105 transition-transform` +
                        (animatedIndexes.includes(globalIndex) ? " logo-animate-in" : "")
                      }
                      ref={el => {
                        logoRefs.current[globalIndex] = el;
                      }}
                      onClick={() => {
                        const audio = new Audio('/sounds/click-1.mp3');
                        audio.play();
                        setTimeout(() => navigate(`/drug-development/${company.id}`), 120);
                      }}
                    >
                      {/* Logo shadow layer for max contrast */}
                      <div
                        className="absolute inset-0 z-0 rounded-xl pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle at 50% 65%, rgba(238,241,251,0.38) 0%, rgba(140,160,255,0.09) 60%, rgba(0,12,64,0) 100%)",
                          filter: "blur(12px)",
                          opacity: 0.79,
                        }}
                      ></div>
                      <div
                        className="
                          relative z-10 flex justify-center items-center
                          bg-white/70
                          backdrop-blur-[3.5px]
                          rounded-xl
                          shadow-[0_1.5px_8px_0_rgba(70,78,120,0.12)]
                          border-[1.5px] border-white/60
                          transition-all
                        "
                        style={{
                          padding: 8,
                          minWidth: "264px",
                          minHeight: "168px",
                          maxWidth: "264px",
                          maxHeight: "168px",
                          boxShadow:
                            "0 0 0 1.8px rgba(255,255,255,0.25), 0 4px 22px 0 rgba(80, 94, 230, 0.14)",
                        }}
                      >
                        <img
                          src={`/logos/${category.name}/${company.id}.png`}
                          alt={company.name}
                          className="w-[192px] h-[144px] object-contain mb-2"
                        />
                      </div>
                    </div>
                  );
                })}
                {/* Fill empty grid cells if last row has less than 2 */}
                {Array.from({ length: 2 - row.length }).map((_, i) => (
                  <div key={i} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugDevelopmentPage; 