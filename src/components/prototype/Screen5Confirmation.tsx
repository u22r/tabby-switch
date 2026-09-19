import React from 'react';
import { Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Language, PurchaseData, SwitchedPlanDetails } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';
import { formatCurrency } from '../../utils/calculator';

interface Screen5Props {
  lang: Language;
  purchase: PurchaseData;
  planDetails: SwitchedPlanDetails;
  onViewPurchase: () => void;
  onDone: () => void;
}

export const Screen5Confirmation: React.FC<Screen5Props> = ({
  lang,
  purchase,
  planDetails,
  onViewPurchase,
  onDone,
}) => {
  const content = MOCK_CONTENT[lang];
  const s5 = content.screen5;
  const isRtl = lang === 'ar';

  const isCustom = planDetails.optionType === 'CUSTOM_AMOUNT';
  const payToday = isCustom ? planDetails.paidTodayAmount : 0;
  const futureInstallment = planDetails.futureInstallmentAmount;

  return (
    <div className={`p-5 sm:p-6 flex flex-col flex-1 pb-6 items-center justify-center text-center ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="relative my-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#043B2C] to-[#0a664d] flex items-center justify-center shadow-lg shadow-emerald-900/20 ring-8 ring-[#3BFF9E]/30 animate-pulse-subtle">
          <Check className="w-10 h-10 text-[#3BFF9E] stroke-[3]" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center shadow-xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
        </div>
      </div>

      <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug max-w-xs mt-2">
        {s5.title}
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-xs leading-relaxed font-medium">
        {s5.description}
      </p>

      <div className="w-full bg-white rounded-3xl p-5 border border-gray-100 shadow-sm my-6 text-left rtl:text-right">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
              {purchase.merchant}
            </span>
            <span className="text-sm font-extrabold text-gray-900">
              {purchase.title}
            </span>
          </div>
          <span className="text-xs font-black text-[#043B2C] bg-[#3BFF9E]/30 px-2.5 py-1 rounded-full">
            {s5.newPlanBadge}
          </span>
        </div>

        <div className="space-y-2.5 text-xs sm:text-sm">
          {isCustom && payToday > 0 && (
            <div className="flex items-center justify-between py-1 border-b border-gray-50">
              <span className="text-gray-500 font-medium">{s5.paidTodayLabel}</span>
              <span className="font-extrabold text-[#043B2C] bg-emerald-50 px-2 py-0.5 rounded">
                {formatCurrency(payToday, lang)}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between py-1 border-b border-gray-50">
            <span className="text-gray-500 font-medium">
              {s5.nextPaymentLabel} ({s5.in8Days})
            </span>
            <span className="font-extrabold text-gray-900">
              {formatCurrency(futureInstallment, lang)}
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-gray-500 font-medium">{s5.finalPaymentLabel}</span>
            <span className="font-extrabold text-gray-900">
              {formatCurrency(futureInstallment, lang)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 mb-6 font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>{lang === 'ar' ? 'معتمد عبر شبكة مدى وسداد ومتوافق مع سمة' : 'Processed via mada • SIMAH compliant'}</span>
      </div>

      <div className="w-full space-y-2 mt-auto">
        <button
          onClick={onViewPurchase}
          className="w-full py-3.5 px-4 rounded-2xl bg-[#043B2C] hover:bg-[#064e3b] active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-emerald-950/10 transition-all cursor-pointer"
        >
          <span>{s5.viewPurchaseBtn}</span>
          <ArrowRight className={`w-4 h-4 stroke-[2.5] ${isRtl ? 'rotate-180' : ''}`} />
        </button>

        <button
          onClick={onDone}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
        >
          {s5.doneBtn}
        </button>
      </div>
    </div>
  );
};
