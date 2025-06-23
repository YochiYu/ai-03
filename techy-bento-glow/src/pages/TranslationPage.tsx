import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { categories } from '../companyData';
import CompanyCard from '../components/CompanyCard';

const translationCategory = categories.find(c => c.slug === 'translation');
const deepL = translationCategory?.companies.find(co => co.id === 'deepl');

const TranslationPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center overflow-y-auto overflow-x-hidden touch-pan-y scrollable-vertical"
      style={{
        background: `url('/lovable-uploads/BG-2.png') center center / cover no-repeat, linear-gradient(135deg, #07061a 0%, #18113a 60%, #0e1328 100%)`,
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div className="noise-overlay" />
      {/* Navigation Bar - follow VoicePage */}
      <div className="relative w-full h-fit flex-none flex items-center justify-between px-[115px] pt-[40px] pb-[24px] max-md:px-4 max-md:py-4 max-sm:px-2 max-sm:py-2 mb-[30px] mt-[30px]">
        <button
          onClick={() => {
            const audio = new Audio('/sounds/click-1.mp3');
            audio.play();
            setTimeout(() => navigate(-1), 120);
          }}
          className="px-[46px] py-[23px] rounded-full backdrop-blur-xl bg-white/10 text-white text-[52px] font-bold flex items-center gap-[23px] hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-[46px] h-[46px]" />
          <span className="max-sm:hidden">返回前頁</span>
        </button>
        <img src="/lovable-uploads/5f919233-8f16-4381-9404-f9db788ad548.png" alt="Logo" className="w-[180px] object-contain" style={{ marginLeft: 'auto' }} />
      </div>
      {/* Title & Subtitle - follow VoicePage */}
      <div className="relative z-10 w-full max-w-[900px] flex flex-col items-center pt-0 pb-[10px]">
        <h1 className="text-white text-8xl font-black font-tech tracking-[.10em] text-center animate-fade-in mb-4" style={{ letterSpacing: '0.05em', lineHeight: 1.14 }}>
          翻譯
        </h1>
        <div className="text-white text-5xl font-semibold leading-relaxed mt-6 mb-4 text-center pl-16 pr-16">
          體驗語言的智慧革命
        </div>
      </div>
      {/* DeepL Company Detail - card width follow VoicePage */}
      <div className="w-full max-w-[900px] mx-auto px-1 sm:px-4 md:px-6 flex flex-col items-center mt-8 mb-16">
        {deepL && (
          <CompanyCard
            name={deepL.name}
            logo={`/logos/${translationCategory.name}/${deepL.logo}`}
            countryYear={deepL.year}
            category={translationCategory.name}
            description={deepL.intro}
          />
        )}
      </div>
    </div>
  );
};

export default TranslationPage; 