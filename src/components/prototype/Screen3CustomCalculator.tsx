import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { Language, PurchaseData } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';
import { formatCurrency, calculateSwitchPlan } from '../../utils/calculator';

interface Screen3Props {
  lang: Language;
  purchase: PurchaseData;
  onBack: () => void;
  onContinue: (amount: number) => void;
  initialAmount?: number;
}

export const Screen3CustomCalculator: React.FC<Screen3Props> = ({
  lang,
  purchase,
  onBack,
  onContinue,
  initialAmount = 400,
}) => {
  const content = MOCK_CONTENT[lang];
  const s3 = content.screen3;
  const isRtl = lang === 'ar';

  const [amount, setAmount] = useState<number>(initialAmount);
  const [inputValue, setInputValue] = useState<string>(initialAmount.toString());
  const [error, setError] = useState<string | null>(null);

  const presets = [200, 350, 400, 500, 600];

  const handleInputChange = (val: string) => {
    const sanitized = val.replace(/[^0-9]/g, '');
    setInputValue(sanitized);

    const num = parseInt(sanitized, 10);
    if (!sanitized || isNaN(num)) {
      setError(null);
      return;
    }

    if (num < 50 || num > 850) {
      setError(s3.invalidAmountError);
    } else {
      setError(null);
      setAmount(num);
    }
  };

  const handlePresetSelect = (p: number) => {
    setAmount(p);
    setInputValue(p.toString());
    setError(null);
  };

  const planDetails = calculateSwitchPlan('CUSTOM_AMOUNT', amount, purchase.remainingAmount);
  const remainingAfterToday = planDetails.remainingAfterToday;
  const futureInstallment = planDetails.futureInstallmentAmount;
  const futureCount = planDetails.futureInstallmentCount;

  const handleProceed = () => {
    if (amount >= 50 && amount <= 850) {
      onContinue(amount);
    }
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
          {lang === 'ar' ? 'الخطوة 2 من 3' : 'Step 2 of 3'}
        </span>
      </div>

      <div className="mt-1 mb-4">
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
          {s3.header}
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 font-semibold">
          {s3.question}
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 border-2 border-[#3BFF9E] shadow-sm relative mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
            {s3.payTodayLabel}
          </span>
          <span className="text-xs font-bold text-emerald-800 bg-[#3BFF9E]/25 px-2 py-0.5 rounded-full">
            {lang === 'ar' ? 'سداد فوري' : 'Instant Paydown'}
          </span>
        </div>

        <div className="flex items-center justify-center my-2 py-2 bg-gray-50/60 rounded-2xl border border-gray-200 focus-within:border-[#043B2C] focus-within:ring-2 focus-within:ring-[#3BFF9E]/40 transition-all">
          <span className="text-xl sm:text-2xl font-black text-gray-400 px-2 select-none">
            {lang === 'ar' ? 'ر.س' : 'SAR'}
          </span>
          <input
            type="text"
            inputMode="numeric"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            className="w-36 text-3xl sm:text-4xl font-black text-gray-900 bg-transparent text-center focus:outline-none tracking-tight"
            placeholder="400"
          />
        </div>

        {error && (
          <div className="flex items-center gap-1.5 text-xs text-rose-600 mt-2 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-gray-100">
          <span className="text-[11px] font-semibold text-gray-500 block mb-2">
            {s3.presetHint}
          </span>
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => handlePresetSelect(p)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  amount === p
                    ? 'bg-[#043B2C] text-[#3BFF9E] shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {formatCurrency(p, lang)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-gray-100 shadow-xs mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center justify-between">
          <span>{s3.liveCalcTitle}</span>
          <span className="w-2 h-2 rounded-full bg-[#3BFF9E] animate-pulse" />
        </h3>

        <div className="space-y-2.5 text-xs sm:text-sm">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <span className="text-gray-500 font-medium">{s3.payTodayLabel}</span>
            <span className="font-extrabold text-gray-900">
              {formatCurrency(amount, lang)}
            </span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <span className="text-gray-500 font-medium">{s3.remainingBalanceLabel}</span>
            <span className="font-extrabold text-gray-900">
              {formatCurrency(remainingAfterToday, lang)}
            </span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-gray-900 font-bold">{s3.newUpcomingLabel}</span>
            <span className="font-black text-base text-emerald-800 bg-[#3BFF9E]/20 px-2.5 py-1 rounded-xl">
              {formatCurrency(futureInstallment, lang)} × {futureCount}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#043B2C] text-white rounded-3xl p-4 sm:p-5 shadow-sm mb-4">
        <div className="text-[10px] font-black uppercase tracking-widest text-[#3BFF9E] mb-3">
          {s3.comparisonTitle}
        </div>

        <div className="grid grid-cols-2 gap-3 divide-x divide-white/10 rtl:divide-x-reverse">
          <div className="pr-2 rtl:pr-0 rtl:pl-2">
            <span className="text-[10px] font-bold text-gray-300 block mb-1">
              {s3.currentPlanHeader}
            </span>
            <div className="text-sm sm:text-base font-extrabold text-white">
              {formatCurrency(300, lang)} × 3
            </div>
            <span className="text-[11px] text-gray-300 block mt-0.5">
              {lang === 'ar' ? 'إجمالي: 900 ر.س' : 'Total: SAR 900'}
            </span>
          </div>

          <div className="pl-3 rtl:pl-0 rtl:pr-3">
            <span className="text-[10px] font-bold text-[#3BFF9E] block mb-1">
              {s3.newPlanHeader}
            </span>
            <div className="text-sm sm:text-base font-extrabold text-[#3BFF9E]">
              {formatCurrency(futureInstallment, lang)} × {futureCount}
            </div>
            <span className="text-[11px] text-emerald-100 font-medium block mt-0.5">
              + {formatCurrency(amount, lang)} {lang === 'ar' ? 'اليوم' : 'today'}
            </span>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-gray-500 text-center px-2 mb-4 leading-relaxed font-medium">
        {s3.disclaimer}
      </p>

      <div className="mt-auto">
        <button
          onClick={handleProceed}
          disabled={amount < 50 || amount > 850}
          className="w-full py-3.5 px-4 rounded-2xl bg-[#043B2C] hover:bg-[#064e3b] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-emerald-950/10 transition-all cursor-pointer"
        >
          <span>{s3.continueBtn}</span>
          <ChevronRight className={`w-4 h-4 stroke-[3] ${isRtl ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};
