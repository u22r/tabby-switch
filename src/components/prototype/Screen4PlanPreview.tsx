import React from 'react';
import { ArrowLeft, ShieldCheck, Check } from 'lucide-react';
import { Language, PurchaseData, SwitchedPlanDetails } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';
import { formatCurrency } from '../../utils/calculator';

interface Screen4Props {
  lang: Language;
  purchase: PurchaseData;
  planDetails: SwitchedPlanDetails;
  onBack: () => void;
  onConfirm: () => void;
}

export const Screen4PlanPreview: React.FC<Screen4Props> = ({
  lang,
  purchase,
  planDetails,
  onBack,
  onConfirm,
}) => {
  const content = MOCK_CONTENT[lang];
  const s4 = content.screen4;
  const isRtl = lang === 'ar';

  const isCustom = planDetails.optionType === 'CUSTOM_AMOUNT';
  const isFaster = planDetails.optionType === 'PAY_FASTER';
  const isLower = planDetails.optionType === 'LOWER_PAYMENTS';

  const payToday = planDetails.paidTodayAmount;
  const futureInstallment = planDetails.futureInstallmentAmount;

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
          {lang === 'ar' ? 'الخطوة 3 من 3' : 'Step 3 of 3'}
        </span>
      </div>

      <div className="mt-1 mb-4">
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
          {s4.header}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
          {purchase.title} • {purchase.merchant}
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-4">
        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-4">
          {lang === 'ar' ? 'الجدول الزمني الجديد للسداد' : 'New Payment Timeline'}
        </div>

        <div className="relative pl-6 rtl:pl-0 rtl:pr-6 space-y-6">
          <div className="absolute top-3 bottom-4 left-[11px] rtl:left-auto rtl:right-[11px] w-[2px] bg-gradient-to-b from-[#043B2C] via-emerald-400 to-[#3BFF9E]" />

          {/* STEP 1: TODAY */}
          <div className="relative flex items-start justify-between">
            <div className="absolute -left-6 rtl:-left-auto rtl:-right-6 top-1 w-6 h-6 rounded-full bg-[#043B2C] text-[#3BFF9E] flex items-center justify-center text-[10px] font-black ring-4 ring-white shadow-xs">
              ★
            </div>
            <div className="pr-2 rtl:pr-0 rtl:pl-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-900 bg-[#3BFF9E]/30 px-2 py-0.5 rounded">
                {s4.timelineToday}
              </span>
              <div className="text-sm font-bold text-gray-900 mt-1">
                {isCustom ? s4.paidTodayNote : (isFaster ? (lang === 'ar' ? 'تسريع القسط' : 'Accelerated installment') : (lang === 'ar' ? 'بدء الجدولة' : 'Scheduled start'))}
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {lang === 'ar' ? 'يُدفع فوراً عند التأكيد' : 'Charged immediately on card'}
              </span>
            </div>
            <div className="text-base font-black text-[#043B2C]">
              {formatCurrency(isCustom ? payToday : futureInstallment, lang)}
            </div>
          </div>

          {/* STEP 2: In 8 days */}
          <div className="relative flex items-start justify-between">
            <div className="absolute -left-6 rtl:-left-auto rtl:-right-6 top-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black ring-4 ring-white shadow-xs">
              2
            </div>
            <div className="pr-2 rtl:pr-0 rtl:pl-2">
              <span className="text-xs font-bold text-gray-900 block">
                {s4.timelineIn8Days}
              </span>
              <span className="text-[11px] text-emerald-700 font-medium block">
                23 Sep 2026
              </span>
            </div>
            <div className="text-base font-black text-gray-900">
              {formatCurrency(futureInstallment, lang)}
            </div>
          </div>

          {/* STEP 3: Next payment */}
          <div className="relative flex items-start justify-between">
            <div className="absolute -left-6 rtl:-left-auto rtl:-right-6 top-1 w-6 h-6 rounded-full bg-emerald-300 text-emerald-950 flex items-center justify-center text-[10px] font-black ring-4 ring-white shadow-xs">
              {isCustom ? 3 : (isLower ? '3..6' : (lang === 'ar' ? 'أخير' : 'Final'))}
            </div>
            <div className="pr-2 rtl:pr-0 rtl:pl-2">
              <span className="text-xs font-bold text-gray-900 block">
                {isCustom ? s4.timelineNextPayment : (isLower ? (lang === 'ar' ? 'الأقساط الشهرية اللاحقة' : 'Subsequent monthly payments') : (lang === 'ar' ? 'الدفعة الأخيرة' : 'Final installment'))}
              </span>
              <span className="text-[11px] text-gray-400 font-medium block">
                {isCustom ? '23 Oct 2026' : (isLower ? (lang === 'ar' ? '150 ر.س شهرياً لمدة 4 أشهر' : 'SAR 150/mo for 4 more months') : '23 Oct 2026')}
              </span>
            </div>
            <div className="text-base font-black text-gray-900">
              {formatCurrency(futureInstallment, lang)}
            </div>
          </div>

          {/* STEP 4: Paid off badge */}
          <div className="relative flex items-center justify-between pt-1">
            <div className="absolute -left-6 rtl:-left-auto rtl:-right-6 top-0 w-6 h-6 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center text-[11px] font-black ring-4 ring-white shadow-xs">
              ✓
            </div>
            <div className="flex items-center gap-1.5 text-xs font-black text-emerald-900">
              <span>{s4.purchasePaidOff}</span>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
              {lang === 'ar' ? 'مكتمل 100%' : '100% Cleared'}
            </span>
          </div>
        </div>
      </div>

      {/* Before / After comparison card */}
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200/80 mb-4 space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 font-semibold">{s4.beforeLabel}:</span>
          <span className="font-bold text-gray-600 line-through">
            {s4.beforeFormula} ({formatCurrency(900, lang)})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-emerald-900 font-bold">{s4.afterLabel}:</span>
          <span className="font-extrabold text-[#043B2C] text-right">
            {isCustom ? (
              lang === 'ar'
                ? `${formatCurrency(payToday, lang)} اليوم + 2 × ${formatCurrency(futureInstallment, lang)}`
                : `${formatCurrency(payToday, lang)} today + 2 × ${formatCurrency(futureInstallment, lang)}`
            ) : isFaster ? (
              `2 × ${formatCurrency(450, lang)}`
            ) : (
              `6 × ${formatCurrency(150, lang)}`
            )}
          </span>
        </div>

        <div className="pt-2 border-t border-gray-200 flex items-center justify-between font-black text-sm text-gray-900">
          <span>{s4.totalRemainingLabel}:</span>
          <span className="text-base text-gray-950">
            {formatCurrency(purchase.remainingAmount, lang)}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 mb-4 font-medium text-center">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>{s4.breakdownSummary}</span>
      </div>

      <div className="mt-auto space-y-2">
        <button
          onClick={onConfirm}
          className="w-full py-3.5 px-4 rounded-2xl bg-[#043B2C] hover:bg-[#064e3b] active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-emerald-950/10 transition-all cursor-pointer"
        >
          <Check className="w-4 h-4 stroke-[3] text-[#3BFF9E]" />
          <span>{s4.confirmSwitchBtn}</span>
        </button>

        <button
          onClick={onBack}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
        >
          {s4.goBackBtn}
        </button>
      </div>
    </div>
  );
};
