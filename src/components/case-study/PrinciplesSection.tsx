import React from 'react';
import { ShieldAlert, Compass, Eye, ShieldCheck, ArrowRight, ArrowRightLeft } from 'lucide-react';
import { Language } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';

interface PrinciplesSectionProps {
  lang: Language;
  onTryPrototype: () => void;
}

export const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({
  lang,
  onTryPrototype,
}) => {
  const content = MOCK_CONTENT[lang].caseStudy;
  const isRtl = lang === 'ar';

  const principles = [
    {
      num: '01',
      title: content.principle1,
      desc: content.principle1Desc,
      icon: Compass,
      tag: 'No upsell',
    },
    {
      num: '02',
      title: content.principle2,
      desc: content.principle2Desc,
      icon: Eye,
      tag: 'Zero surprise fees',
    },
    {
      num: '03',
      title: content.principle3,
      desc: content.principle3Desc,
      icon: ShieldAlert,
      tag: 'Principal preservation',
    },
    {
      num: '04',
      title: content.principle4,
      desc: content.principle4Desc,
      icon: ShieldCheck,
      tag: 'SIMAH alignment',
    },
  ];

  return (
    <section id="principles-section" className="py-16 sm:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-xs font-black uppercase tracking-wider mb-3">
            <span>{content.principlesTag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            {content.principlesTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium mt-3">
            {lang === 'ar'
              ? 'معايير صارمة تضمن أن المنتج أداة تمكين مالي وليس أداة لزيادة الديون.'
              : 'Ethical fintech guardrails ensuring flexibility without predatory practices.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {principles.map((p) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.num}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-xs flex items-start gap-4 hover:border-gray-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-100 text-[#043B2C] flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700">
                      Principle {p.num}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug">
                    "{p.title}"
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto rounded-[36px] bg-gradient-to-br from-[#043B2C] via-[#054a37] to-[#02241b] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3BFF9E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#3BFF9E] block mb-3">
              Tabby Imagine Challenge 2026
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug mb-4">
              {content.ctaTitle}
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/90 font-medium leading-relaxed mb-8">
              {content.ctaSub}
            </p>

            <button
              onClick={onTryPrototype}
              className="px-8 py-4 rounded-2xl bg-[#3BFF9E] hover:bg-[#2fe88e] active:scale-[0.98] text-black font-black text-base inline-flex items-center justify-center gap-3 shadow-lg shadow-black/20 transition-all cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-lg bg-black text-[#3BFF9E] flex items-center justify-center">
                <ArrowRightLeft className="w-3.5 h-3.5 stroke-[2.5] group-hover:rotate-180 transition-transform duration-300" />
              </div>
              <span>{content.ctaButton}</span>
              <ArrowRight className={`w-4 h-4 stroke-[2.5] text-black ${isRtl ? 'rotate-180' : ''}`} />
            </button>

            <p className="text-[11px] text-emerald-200/60 mt-4 font-medium">
              {lang === 'ar'
                ? 'نموذج تفاعلي متكامل يعمل ببيانات واقعية بالريال السعودي.'
                : 'Fully functioning interactive demo with dynamic recalculations in SAR.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
