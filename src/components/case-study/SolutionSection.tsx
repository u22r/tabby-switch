import React from 'react';
import { TrendingDown, Zap, Sliders } from 'lucide-react';
import { Language } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';

interface SolutionSectionProps {
  lang: Language;
  onTryOption: (option: string) => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ lang }) => {
  const content = MOCK_CONTENT[lang].caseStudy;

  return (
    <section id="solution-section" className="py-16 sm:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00D06C]" />
            <span>{content.solutionTag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            {content.solutionTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium mt-4 leading-relaxed">
            {content.solutionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1: PAY LESS NOW */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 group-hover:bg-[#3BFF9E] group-hover:text-black transition-colors">
                <TrendingDown className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 block mb-1">
                Option 01
              </span>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">
                {content.card1Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-2 leading-relaxed">
                {content.card1Desc}
              </p>

              <div className="mt-5 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-[10px] uppercase font-bold text-gray-400 block">
                  {lang === 'ar' ? 'المثال العملي' : 'Live Scenario'}
                </span>
                <div className="text-sm font-extrabold text-[#043B2C] mt-0.5">
                  SAR 150 × 6 {lang === 'ar' ? 'دفعات' : 'payments'}
                </div>
                <span className="text-[11px] text-gray-500 block">
                  {lang === 'ar' ? 'يخفض القسط القادم بنسبة 50%' : 'Cuts monthly cash burden in half'}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>{lang === 'ar' ? 'أقصى درجات المرونة' : 'Maximum cash relief'}</span>
              <span className="text-base">→</span>
            </div>
          </div>

          {/* Card 2: PAY MORE NOW */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mb-5 group-hover:bg-[#3BFF9E] group-hover:text-black transition-colors">
                <Zap className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 block mb-1">
                Option 02
              </span>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">
                {content.card2Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-2 leading-relaxed">
                {content.card2Desc}
              </p>

              <div className="mt-5 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-[10px] uppercase font-bold text-gray-400 block">
                  {lang === 'ar' ? 'المثال العملي' : 'Live Scenario'}
                </span>
                <div className="text-sm font-extrabold text-[#043B2C] mt-0.5">
                  SAR 450 × 2 {lang === 'ar' ? 'دفعات' : 'payments'}
                </div>
                <span className="text-[11px] text-gray-500 block">
                  {lang === 'ar' ? 'إنهاء الطلب قبل موعده بشهر' : 'Clears commitment 1 month early'}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-amber-800">
              <span>{lang === 'ar' ? 'تحرر مبكر من الالتزام' : 'Fast-track clearance'}</span>
              <span className="text-base">→</span>
            </div>
          </div>

          {/* Card 3: CHOOSE YOUR AMOUNT */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#3BFF9E] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
            <div className="absolute -top-3 right-6 bg-[#043B2C] text-[#3BFF9E] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs">
              {lang === 'ar' ? 'الميزة التفاعلية' : 'Interactive Hero'}
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8FCF1] text-[#043B2C] flex items-center justify-center mb-5 group-hover:bg-[#3BFF9E] group-hover:text-black transition-colors">
                <Sliders className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-purple-700 block mb-1">
                Option 03
              </span>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">
                {content.card3Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-2 leading-relaxed">
                {content.card3Desc}
              </p>

              <div className="mt-5 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/50">
                <span className="text-[10px] uppercase font-bold text-emerald-800 block">
                  {lang === 'ar' ? 'المثال العملي' : 'Live Scenario'}
                </span>
                <div className="text-sm font-extrabold text-[#043B2C] mt-0.5">
                  SAR 400 {lang === 'ar' ? 'اليوم' : 'today'} + 2 × SAR 250
                </div>
                <span className="text-[11px] text-emerald-900/80 block font-medium">
                  {lang === 'ar' ? 'حساب فوري متوازن دون فوائد' : 'Dynamic zero-interest balancing'}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>{lang === 'ar' ? 'تحكم شخصي مطلق' : 'Granular self-service'}</span>
              <span className="text-base">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
