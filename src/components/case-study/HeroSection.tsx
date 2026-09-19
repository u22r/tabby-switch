import React from 'react';
import { ArrowRight, ArrowRightLeft } from 'lucide-react';
import { Language } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';

interface HeroSectionProps {
  lang: Language;
  onTryPrototype: () => void;
  onHowItWorks: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onTryPrototype,
  onHowItWorks,
}) => {
  const content = MOCK_CONTENT[lang].caseStudy;
  const isRtl = lang === 'ar';

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3BFF9E]/15 via-emerald-50/20 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200/80 shadow-xs mb-6 text-xs font-bold text-gray-800">
            <span className="w-2 h-2 rounded-full bg-[#00D06C]" />
            <span className="font-extrabold uppercase tracking-wider text-emerald-950">
              Tabby Switch
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500 font-medium">
              {lang === 'ar' ? 'فكرة منتج مرن لما بعد الشراء' : 'Post-Purchase Repayment Innovation'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] mb-6">
            {lang === 'ar' ? (
              <>
                خطة دفعك تتكيف <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#043B2C] via-emerald-700 to-[#00A855] bg-clip-text text-transparent">
                  عندما تتغير ظروف الحياة.
                </span>
              </>
            ) : (
              <>
                Your payment plan should adapt <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#043B2C] via-emerald-700 to-[#00A855] bg-clip-text text-transparent">
                  when life changes.
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-xl text-gray-600 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            {content.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={onTryPrototype}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#043B2C] hover:bg-[#064e3b] active:scale-[0.98] text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-950/15 transition-all cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-lg bg-[#3BFF9E] text-black flex items-center justify-center">
                <ArrowRightLeft className="w-3.5 h-3.5 stroke-[2.5] text-black group-hover:rotate-180 transition-transform duration-300" />
              </div>
              <span>{lang === 'ar' ? 'جرب النموذج التفاعلي' : 'Try the prototype'}</span>
              <ArrowRight className={`w-4 h-4 stroke-[2.5] text-[#3BFF9E] ${isRtl ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={onHowItWorks}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <span>{lang === 'ar' ? 'كيف يعمل؟' : 'How it works'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left rtl:text-right border-t border-gray-200/80 pt-8">
            <div className="p-3 bg-white rounded-2xl border border-gray-100 shadow-2xs">
              <span className="text-[11px] font-bold text-gray-400 block uppercase">01 • Non-Predatory</span>
              <span className="text-xs font-black text-gray-900 mt-0.5 block">Zero Added Fees</span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-gray-100 shadow-2xs">
              <span className="text-[11px] font-bold text-gray-400 block uppercase">02 • Principal Lock</span>
              <span className="text-xs font-black text-gray-900 mt-0.5 block">Original Total Kept</span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-gray-100 shadow-2xs">
              <span className="text-[11px] font-bold text-gray-400 block uppercase">03 • Compliance</span>
              <span className="text-xs font-black text-gray-900 mt-0.5 block">SIMAH & KSA SAMA</span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-gray-100 shadow-2xs">
              <span className="text-[11px] font-bold text-gray-400 block uppercase">04 • Transparent</span>
              <span className="text-xs font-black text-gray-900 mt-0.5 block">Live Math Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
