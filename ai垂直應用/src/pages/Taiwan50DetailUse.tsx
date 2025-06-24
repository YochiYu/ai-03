import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { categories } from '../companyData';
import Taiwan50Detail from '../components/ui/Taiwan50Detail';
import NotFound from './NotFound';

const Taiwan50DetailUse: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const navigate = useNavigate();

  const taiwan50PlusCategory = categories.find(c => c.slug === 'taiwan-50plus');
  const company = taiwan50PlusCategory?.companies.find(co => co.id === companyId);

  if (!company) {
    return <NotFound />;
  }

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center overflow-y-auto overflow-x-hidden touch-pan-y scrollable-vertical bg-fade-transition"
      style={{
        background:
          `url('/lovable-uploads/BG-3.jpg') center center / cover no-repeat, linear-gradient(135deg, rgb(7, 6, 26) 0%, rgb(24, 17, 58) 60%, rgb(14, 19, 40) 100%)`,
      }}
    >
      <div
        className="relative w-full h-fit flex-none flex items-center justify-between px-[115px] pt-[40px] pb-[24px] max-md:px-4 max-md:py-4 max-sm:px-2 max-sm:py-2 mb-[30px] mt-[30px]"
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
        <button
          onClick={() => {
            const audio = new Audio('/sounds/click-3.mp3');
            audio.play();
            setTimeout(() => navigate('/'), 120);
          }}
          className="px-[46px] py-[23px] rounded-full backdrop-blur-xl bg-white/10 text-white text-[52px] font-bold flex items-center gap-[23px] hover:bg-white/20 transition-colors"
        >
          <Home className="w-[46px] h-[46px]" />
          <span className="max-sm:hidden">返回首頁</span>
        </button>
      </div>
      <div
        className="w-full mx-auto rounded-3xl px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 flex flex-col items-center shadow-[0_8px_48px_0_rgba(244,63,94,0.16)] border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-rose-200/10 backdrop-blur-2xl relative z-10"
        style={{
          boxShadow:
            `0 8px 48px 0 rgba(244,63,94,0.16), 0 0 0 1px rgba(255,255,255,0.14)`,
          background:
            `linear-gradient(120deg, rgba(255,255,255,0.18) 10%, rgba(251,233,241,0.10) 45%, rgba(247,98,151,0.13) 100%)`,
          border: "1.5px solid rgba(255,255,255,0.14)",
          padding: '50px',
          width: '850px',
          height: '1600px'
        }}
      >
        {typeof Taiwan50Detail === 'function' ? (
          <Taiwan50Detail
            name={company.name}
            enName={company.subName}
            countryYear={company.year}
            category={taiwan50PlusCategory?.name || ''}
            description={company.intro}
          />
        ) : (
          <div className="text-white text-2xl">公司詳細內容元件未實作</div>
        )}
      </div>
    </div>
  );
};

export default Taiwan50DetailUse; 