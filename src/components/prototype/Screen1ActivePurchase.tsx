import React from 'react';
import { Calendar, ArrowRightLeft, ShieldCheck } from 'lucide-react';
import { Language, PurchaseData } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';
import { formatCurrency } from '../../utils/calculator';

interface Screen1Props {
  lang: Language;
  purchase: PurchaseData;
  onSwitchPlan: () => void;
}

export const Screen1ActivePurchase: React.FC<Screen1Props> = ({
  lang,
  purchase,
  onSwitchPlan,
}) => {
  const content = MOCK_CONTENT[lang];
  const s1 = content.screen1;
  const isRtl = lang === 'ar';

  return (
    <div className={`p-4 sm:p-5 flex flex-col flex-1 pb-6 ${isRtl ? 'text-right' : 'text-left'}`}>
      {/* Tabby in-app header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            {s1.header}
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            {lang === 'ar' ? 'حساب: فهد العتيبي • الرياض' : 'Account: Fahad Al-Otaibi • Riyadh'}
          </p>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 rounded-full p-0.5 text-xs font-semibold text-gray-600">
          <span className="px-3 py-1 bg-white text-gray-900 rounded-full shadow-xs">
            {s1.activeTab} (1)
          </span>
          <span className="px-2.5 py-1 text-gray-400">
            {s1.paidTab}
          </span>
        </div>
      </div>

      {/* Main Active Purchase Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100/90 relative overflow-hidden transition-all hover:shadow-md">
        <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[#3BFF9E] via-[#00E575] to-[#043B2C]" />

        {/* Merchant & Title */}
        <div className="flex items-start justify-between gap-3 pt-1">
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
                {purchase.purchaseDate} • #{purchase.orderNumber}
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

        {/* Progress Bar & Label */}
        <div className="mt-5 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-2">
            <span className="flex items-center gap-1.5 text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-[#00D06C]" />
              {s1.completedBadge}
            </span>
            <span className="text-gray-900 font-bold">
              {formatCurrency(purchase.paidAmount, lang)} / {formatCurrency(purchase.totalAmount, lang)}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 h-2 w-full my-2">
            <div className="rounded-full bg-[#00D06C] h-full" />
            <div className="rounded-full bg-gray-200 h-full" />
            <div className="rounded-full bg-gray-200 h-full" />
            <div className="rounded-full bg-gray-200 h-full" />
          </div>
        </div>

        {/* Next Payment Card Highlight */}
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-[#F8FDF9] to-[#EFFFF6] border border-[#3BFF9E]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 shadow-xs border border-emerald-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#043B2C]" />
            </div>
            <div>
              <span className="text-xs text-emerald-900 font-medium block">
                {s1.nextPaymentLabel}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-black text-gray-900">
                  {formatCurrency(purchase.nextPaymentAmount, lang)}
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-[#3BFF9E]/30 px-2 py-0.5 rounded-full">
                  {s1.dueInDays}
                </span>
              </div>
            </div>
          </div>

          <div className={`${isRtl ? 'text-left' : 'text-right'}`}>
            <span className="text-xs text-gray-500 font-medium block">
              {s1.remainingLabel}
            </span>
            <span className="text-base font-extrabold text-gray-900">
              {formatCurrency(purchase.remainingAmount, lang)}
            </span>
          </div>
        </div>

        {/* The Hero Button: Switch Plan */}
        <div className="mt-5">
          <button
            onClick={onSwitchPlan}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#043B2C] hover:bg-[#064e3b] active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md shadow-emerald-950/10 transition-all group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-lg bg-[#3BFF9E] text-black flex items-center justify-center">
              <ArrowRightLeft className="w-3.5 h-3.5 stroke-[2.5] text-black group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <span>{s1.switchPlanBtn}</span>
            <span className="text-xs font-medium text-emerald-200/90 bg-emerald-900/60 px-2 py-0.5 rounded-full ml-1">
              {lang === 'ar' ? 'مرن' : 'Flexible'}
            </span>
          </button>
          
          <p className="text-center text-[11px] text-gray-500 mt-2 font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'ar' ? 'تعديل آمن بدون فوائد أو رسوم إضافية' : 'Zero interest • Zero added debt • Tabby Guarantee'}</span>
          </p>
        </div>
      </div>

      {/* Existing Installment Schedule Timeline Preview */}
      <div className="mt-5 bg-white rounded-3xl p-4 sm:p-5 border border-gray-100 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
            {lang === 'ar' ? 'جدول الدفعات الحالي (4 أقساط)' : 'Current 4-Payment Schedule'}
          </h3>
          <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
            {lang === 'ar' ? 'مؤهل للتعديل' : 'Eligible for Switch'}
          </span>
        </div>

        <div className="space-y-3">
          {/* Payment 1 (Paid) */}
          <div className="flex items-center justify-between text-xs py-1.5 border-b border-gray-50">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#00D06C] text-white flex items-center justify-center font-black text-[10px]">
                ✓
              </div>
              <div>
                <span className="font-bold text-gray-900 block">
                  {lang === 'ar' ? 'الدفعة الأولى (مدفوعة)' : '1st Payment (Completed)'}
                </span>
                <span className="text-[11px] text-gray-400">{purchase.purchaseDate}</span>
              </div>
            </div>
            <span className="font-extrabold text-gray-400 line-through">
              {formatCurrency(300, lang)}
            </span>
          </div>

          {/* Payment 2 (Due in 8 days) */}
          <div className="flex items-center justify-between text-xs py-1.5 border-b border-gray-50 bg-emerald-50/50 -mx-2 px-2 rounded-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#043B2C] text-white flex items-center justify-center font-black text-[10px]">
                2
              </div>
              <div>
                <span className="font-bold text-gray-900 block">
                  {lang === 'ar' ? 'الدفعة الثانية (القادمة)' : '2nd Payment (Next)'}
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold">{s1.dueInDays} • 23 Sep 2026</span>
              </div>
            </div>
            <span className="font-extrabold text-gray-900">
              {formatCurrency(300, lang)}
            </span>
          </div>

          {/* Payment 3 */}
          <div className="flex items-center justify-between text-xs py-1.5 border-b border-gray-50">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold text-[10px]">
                3
              </div>
              <div>
                <span className="font-bold text-gray-700 block">
                  {lang === 'ar' ? 'الدفعة الثالثة' : '3rd Payment'}
                </span>
                <span className="text-[11px] text-gray-400">23 Oct 2026</span>
              </div>
            </div>
            <span className="font-bold text-gray-600">
              {formatCurrency(300, lang)}
            </span>
          </div>

          {/* Payment 4 */}
          <div className="flex items-center justify-between text-xs py-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold text-[10px]">
                4
              </div>
              <div>
                <span className="font-bold text-gray-700 block">
                  {lang === 'ar' ? 'الدفعة الرابعة (الأخيرة)' : '4th Payment (Final)'}
                </span>
                <span className="text-[11px] text-gray-400">23 Nov 2026</span>
              </div>
            </div>
            <span className="font-bold text-gray-600">
              {formatCurrency(300, lang)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
