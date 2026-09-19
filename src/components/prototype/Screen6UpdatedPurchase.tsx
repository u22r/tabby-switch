import React from 'react';
import { Check, Calendar, RotateCcw } from 'lucide-react';
import { Language, PurchaseData, SwitchedPlanDetails } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';
import { formatCurrency } from '../../utils/calculator';

interface Screen6Props {
  lang: Language;
  purchase: PurchaseData;
  planDetails: SwitchedPlanDetails;
  onResetDemo: () => void;
}

export const Screen6UpdatedPurchase: React.FC<Screen6Props> = ({
  lang,
  purchase,
  planDetails,
  onResetDemo,
}) => {
  const content = MOCK_CONTENT[lang];
  const s6 = content.screen6;
  const isRtl = lang === 'ar';

  const isCustom = planDetails.optionType === 'CUSTOM_AMOUNT';
  const payToday = isCustom ? planDetails.paidTodayAmount : 0;
  
  const totalPaid = purchase.paidAmount + payToday;
  const totalRemaining = purchase.totalAmount - totalPaid;
  const nextPayment = planDetails.futureInstallmentAmount;

  return (
    <div className={`p-4 sm:p-5 flex flex-col flex-1 pb-6 ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
          {s6.header}
        </h1>
        <button
          onClick={onResetDemo}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-[11px] font-bold text-gray-600 transition-colors cursor-pointer"
          title="Restart the prototype from Screen 1"
        >
          <RotateCcw className="w-3 h-3" />
          <span>{lang === 'ar' ? 'إعادة التجربة' : 'Reset'}</span>
        </button>
      </div>

      <div className="bg-[#E8FCF1] border border-[#3BFF9E]/60 rounded-2xl p-3.5 sm:p-4 mb-4 shadow-2xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#043B2C] text-[#3BFF9E] flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <div>
            <h3 className="text-sm font-black text-[#043B2C]">
              {s6.activePlanBannerTitle}
            </h3>
            <p className="text-xs text-emerald-900/80 mt-0.5 font-medium leading-relaxed">
              {s6.activePlanBannerDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100/90 relative overflow-hidden">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-black text-lg shadow-xs">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M21.71 7.04c-3.15 1.12-7.14 3.25-10.45 6.06-2.6 2.21-4.7 4.54-5.69 6.2-.42.71-.58 1.15-.58 1.45 0 .22.08.38.25.5.34.25.99.18 1.83-.2 3.19-1.42 7.74-4.8 11.59-8.48 1.25-1.2 2.65-2.73 3.32-3.79.46-.73.65-1.27.42-1.63-.16-.25-.41-.33-.69-.11z"/>
              </svg>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                {purchase.merchant}
              </span>
              <h2 className="text-lg font-bold text-gray-900 leading-tight">
                {purchase.title}
              </h2>
              <span className="text-xs text-gray-500 font-medium">
                #{purchase.orderNumber}
              </span>
            </div>
          </div>

          <div className={`${isRtl ? 'text-left' : 'text-right'}`}>
            <span className="text-xs text-gray-400 font-medium block">
              {lang === 'ar' ? 'الإجمالي' : 'Total'}
            </span>
            <span className="text-lg font-black text-gray-900">
              {formatCurrency(purchase.totalAmount, lang)}
            </span>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-2">
            <span className="flex items-center gap-1.5 text-[#043B2C] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#00D06C]" />
              {s6.progressLabel}
            </span>
            <span className="text-gray-900 font-black">
              {formatCurrency(totalPaid, lang)} / {formatCurrency(purchase.totalAmount, lang)}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 h-2 w-full my-2">
            <div className="rounded-full bg-[#00D06C] h-full" />
            <div className="rounded-full bg-[#00D06C] h-full" />
            <div className="rounded-full bg-gray-200 h-full" />
            <div className="rounded-full bg-gray-200 h-full" />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3 pt-2 text-xs">
            <div className="bg-gray-50 p-2.5 rounded-xl">
              <span className="text-gray-400 block font-medium">{s6.paidLabel}</span>
              <span className="text-sm font-black text-emerald-800">
                {formatCurrency(totalPaid, lang)}
              </span>
            </div>
            <div className="bg-gray-50 p-2.5 rounded-xl">
              <span className="text-gray-400 block font-medium">{s6.remainingLabel}</span>
              <span className="text-sm font-black text-gray-900">
                {formatCurrency(totalRemaining, lang)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-[#F8FDF9] to-[#EFFFF6] border border-[#3BFF9E]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 shadow-xs border border-emerald-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#043B2C]" />
            </div>
            <div>
              <span className="text-xs text-emerald-900 font-medium block">
                {s6.nextPaymentLabel}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-black text-gray-900">
                  {formatCurrency(nextPayment, lang)}
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-[#3BFF9E]/30 px-2 py-0.5 rounded-full">
                  {lang === 'ar' ? 'خلال 8 أيام' : 'Due in 8 days'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-xs">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="text-xs font-bold text-gray-900">
              {s6.changeAgainLabel}
            </h4>
            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
              {s6.changeAgainNote}
            </p>
          </div>
          <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-lg shrink-0">
            {lang === 'ar' ? 'فترة انتظار 30 يوم' : '30-Day Cooldown'}
          </span>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <button
          onClick={onResetDemo}
          className="w-full py-3.5 px-4 rounded-2xl bg-gray-900 hover:bg-black active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{s6.resetDemoBtn}</span>
        </button>
      </div>
    </div>
  );
};
