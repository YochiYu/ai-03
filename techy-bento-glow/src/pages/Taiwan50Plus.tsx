import React from 'react';
import { useNavigate } from 'react-router-dom';
import Taiwan50Layout from '../components/Taiwan50Layout';
import { categories } from '../companyData';

const Taiwan50Plus: React.FC = () => {
  const navigate = useNavigate();
  const taiwan50PlusCategory = categories.find(c => c.slug === 'taiwan-50plus');
  const companies = taiwan50PlusCategory?.companies || [];

  return (
    <Taiwan50Layout categoryName="Taiwan 50 +" gradient="to-br, #aab5fa, #b370fd, #3c71c8" glow="#aab5fa">
      <div className="w-full flex flex-col gap-10 items-center py-6">
        {companies.map((company) => (
          <button
            key={company.id}
            onClick={() => {
              const audio = new Audio('/sounds/click.mp3');
              audio.volume = 0.1;
              audio.play();
              setTimeout(() => navigate(`/taiwan-50plus/${company.id}`), 120);
            }}
            className="rounded-full p-4 bg-white/10 border border-white/20 shadow-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
            style={{ width: '700px' }}
          >
            <span className="text-4xl md:text-3xl font-bold text-white mr-2">
              <span style={{ fontSize: '42px' }}>{company.name}</span>
            </span>
            {company.subName && (
              <span className="font-light text-white/70" style={{ fontSize: '24px' }}>
                {company.subName}
              </span>
            )}
          </button>
        ))}
      </div>
    </Taiwan50Layout>
  );
};

export default Taiwan50Plus;
