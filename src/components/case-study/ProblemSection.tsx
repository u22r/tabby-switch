import React from 'react';
import { AlertTriangle, ShoppingCart, Activity, Lock, XCircle } from 'lucide-react';
import { Language } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';

interface ProblemSectionProps {
  lang: Language;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ lang }) => {
  const content = MOCK_CONTENT[lang].caseStudy;

  return (
    <section id="problem-section" className="py-16 sm:py-24 bg-white border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-black uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{content.problemTag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            {content.problemTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium mt-4 leading-relaxed">
            {content.problemDesc}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Step 1: Checkout */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-gray-800 shadow-xs flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  Stage 01
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  {content.timelineCheckout}
                </h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed font-medium">
                  {content.timelineCheckoutDesc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-200/60 text-xs font-semibold text-gray-500">
                SAR 300 × 4 standard split
              </div>
            </div>

            {/* Step 2: Life changes */}
            <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 flex flex-col justify-between relative">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-amber-700 shadow-xs flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                  Stage 02
                </span>
                <h3 className="text-lg font-bold text-amber-950 mt-1">
                  {content.timelineLife}
                </h3>
                <p className="text-xs text-amber-900/80 mt-2 leading-relaxed font-medium">
                  {content.timelineLifeDesc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-amber-200/60 text-xs font-bold text-amber-800">
                Cashflow reality shifts ⚠️
              </div>
            </div>

            {/* Step 3: Fixed payment plan */}
            <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200/80 flex flex-col justify-between relative">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-rose-700 shadow-xs flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-rose-600" />
                </div>
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider block">
                  Stage 03
                </span>
                <h3 className="text-lg font-bold text-rose-950 mt-1">
                  {content.timelineRigid}
                </h3>
                <p className="text-xs text-rose-900/80 mt-2 leading-relaxed font-medium">
                  {content.timelineRigidDesc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-rose-200/60 text-xs font-bold text-rose-800 flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5" />
                <span>Zero post-checkout control</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#043B2C] text-white text-center shadow-md">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#3BFF9E] block mb-2">
            {lang === 'ar' ? 'الرؤية المحورية' : 'Core Design Insight'}
          </span>
          <blockquote className="text-lg sm:text-2xl font-extrabold leading-snug tracking-tight text-white">
            "{content.problemQuote}"
          </blockquote>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-3 font-medium max-w-xl mx-auto leading-relaxed">
            {lang === 'ar'
              ? 'معظم حالات التعثر لا تنتج عن رغبة العميل في التهرب، بل من جمود مواعيد وقيم الأقساط حين تطرأ ظروف طارئة. الحل يكمن في منح العميل مقود القيادة دون تكبيده ديوناً جديدة.'
              : 'Most installment friction is not malicious default; it is timing misalignment. Giving customers structured control keeps their credit record spotless while protecting merchant & lender capital.'}
          </p>
        </div>
      </div>
    </section>
  );
};
