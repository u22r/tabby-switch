import React, { useState } from 'react';
import { ArrowLeft, TrendingDown, Zap, Sliders, ShieldCheck, ChevronRight } from 'lucide-react';
import { Language, PurchaseData, SwitchOptionType } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';

interface Screen2Props {
  lang: Language;
  purchase: PurchaseData;
  onBack: () => void;
  onSelectOption: (option: SwitchOptionType) => void;
}

export const Screen2SwitchPlan: React.FC<Screen2Props> = ({
  lang,
  onBack,
  onSelectOption,
}) => {
  const content = MOCK_CONTENT[lang];
  const s2 = content.screen2;
  const isRtl = lang === 'ar';

  const [selected, setSelected] = useState<SwitchOptionType>('CUSTOM_AMOUNT');

  const handleContinue = () => {
    onSelectOption(selected);
  };

  return (
    <div className={`p-4 sm:p-5 flex flex-col flex-1 pb-6 ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="flex items-center justify-between pb-3">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
          aria-label="Back"
        >
          <ArrowLeft className={`w-4 h-4 stroke-[2.5] ${isRtl ? 'rotate-180' : ''}`} />
        </button>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          {lang === 'ar' ? 'الخطوة 1 من 3' : 'Step 1 of 3'}
        </span>
      </div>

      <div className="mt-1 mb-4">
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
          {s2.header}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
          {s2.subtitle}
        </p>
      </div>

      <div className="bg-[#F1F5F9] rounded-2xl p-3.5 sm:p-4 mb-4 border border-gray-200/80">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
            {s2.currentPlanLabel}
          </span>
          <span className="text-xs font-bold text-gray-700 bg-white px-2 py-0.5 rounded-md shadow-2xs">
            {s2.remainingTotal}
          </span>
        </div>
        <div className="mt-1.5 flex items-baseline justify-between">
          <span className="text-base font-extrabold text-gray-800">
            {s2.currentPlanDetail}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            {lang === 'ar' ? '3 دفعات شهرية' : '3 monthly payments'}
          </span>
        </div>
      </div>

      <div className="space-y-3 flex-1">
        {/* OPTION A */}
        <div
          onClick={() => setSelected('LOWER_PAYMENTS')}
          className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative ${
            selected === 'LOWER_PAYMENTS'
              ? 'border-[#043B2C] bg-white shadow-md ring-2 ring-[#3BFF9E]/30'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                  selected === 'LOWER_PAYMENTS'
                    ? 'bg-[#3BFF9E] text-black font-black'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <TrendingDown className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    {s2.optionA.title}
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                    {s2.optionA.badge}
                  </span>
                </div>
                <div className="text-sm font-black text-emerald-700 mt-0.5">
                  {s2.optionA.preview}
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {s2.optionA.description}
                </p>
              </div>
            </div>

            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                selected === 'LOWER_PAYMENTS'
                  ? 'border-[#043B2C] bg-[#043B2C]'
                  : 'border-gray-300 bg-white'
              }`}
            >
              {selected === 'LOWER_PAYMENTS' && <div className="w-2 h-2 rounded-full bg-[#3BFF9E]" />}
            </div>
          </div>
        </div>

        {/* OPTION B */}
        <div
          onClick={() => setSelected('PAY_FASTER')}
          className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative ${
            selected === 'PAY_FASTER'
              ? 'border-[#043B2C] bg-white shadow-md ring-2 ring-[#3BFF9E]/30'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                  selected === 'PAY_FASTER'
                    ? 'bg-[#3BFF9E] text-black font-black'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Zap className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    {s2.optionB.title}
                  </h3>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100/70 px-1.5 py-0.5 rounded">
                    {s2.optionB.badge}
                  </span>
                </div>
                <div className="text-sm font-black text-gray-900 mt-0.5">
                  {s2.optionB.preview}
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {s2.optionB.description}
                </p>
              </div>
            </div>

            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                selected === 'PAY_FASTER'
                  ? 'border-[#043B2C] bg-[#043B2C]'
                  : 'border-gray-300 bg-white'
              }`}
            >
              {selected === 'PAY_FASTER' && <div className="w-2 h-2 rounded-full bg-[#3BFF9E]" />}
            </div>
          </div>
        </div>

        {/* OPTION C */}
        <div
          onClick={() => setSelected('CUSTOM_AMOUNT')}
          className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative ${
            selected === 'CUSTOM_AMOUNT'
              ? 'border-[#043B2C] bg-white shadow-md ring-2 ring-[#3BFF9E]/30'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <div className="absolute -top-2.5 right-4 bg-[#3BFF9E] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
            {lang === 'ar' ? 'الأكثر تخصيصاً' : 'Most Popular'}
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                  selected === 'CUSTOM_AMOUNT'
                    ? 'bg-[#3BFF9E] text-black font-black'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Sliders className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    {s2.optionC.title}
                  </h3>
                  <span className="text-[10px] font-bold text-purple-800 bg-purple-100/70 px-1.5 py-0.5 rounded">
                    {s2.optionC.badge}
                  </span>
                </div>
                <div className="text-sm font-black text-gray-900 mt-0.5">
                  {s2.optionC.preview}
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {s2.optionC.description}
                </p>
              </div>
            </div>

            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                selected === 'CUSTOM_AMOUNT'
                  ? 'border-[#043B2C] bg-[#043B2C]'
                  : 'border-gray-300 bg-white'
              }`}
            >
              {selected === 'CUSTOM_AMOUNT' && <div className="w-2 h-2 rounded-full bg-[#3BFF9E]" />}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2.5 text-[11px] text-gray-500">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <p className="leading-normal">
          {s2.eligibilityDisclaimer}
        </p>
      </div>

      <div className="mt-4 pt-2">
        <button
          onClick={handleContinue}
          className="w-full py-3.5 px-4 rounded-2xl bg-[#043B2C] hover:bg-[#064e3b] active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-emerald-950/10 transition-all cursor-pointer"
        >
          <span>{s2.seeNewPlanBtn}</span>
          <ChevronRight className={`w-4 h-4 stroke-[3] ${isRtl ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};
