import React from 'react';
import { Users, Building2, Store } from 'lucide-react';
import { Language } from '../../types';
import { MOCK_CONTENT } from '../../data/mockData';

interface WhyItMattersSectionProps {
  lang: Language;
}

export const WhyItMattersSection: React.FC<WhyItMattersSectionProps> = ({ lang }) => {
  const content = MOCK_CONTENT[lang].caseStudy;

  return (
    <section id="why-section" className="py-16 sm:py-24 bg-white border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#043B2C] text-xs font-black uppercase tracking-wider mb-3">
            <span>{content.whyTag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            {content.whyTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium mt-3">
            {lang === 'ar'
              ? 'نموذج ثلاثي الأثر يحقق مصلحة المستهلك وشركة التقنية المالية والتاجر الشريك.'
              : 'A win-win-win fintech ecosystem model engineered for long-term customer trust.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* FOR CUSTOMERS */}
          <div className="bg-gray-50/70 rounded-3xl p-6 sm:p-8 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-emerald-700 shadow-xs flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-[#043B2C]" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block mb-1">
                {content.whyCustomerTitle}
              </span>
              <h3 className="text-xl font-black text-gray-900 tracking-tight">
                {lang === 'ar' ? 'تحكم ومرونة بلا ضغوط' : 'More control and flexibility.'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium mt-3 leading-relaxed">
                {content.whyCustomerDesc}
              </p>

              <ul className="mt-5 space-y-2 text-xs font-semibold text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{lang === 'ar' ? 'سجل ائتماني محمي من التعثر' : 'Protects credit record (SIMAH)'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{lang === 'ar' ? 'بدون رسوم تأخير أو فوائد مركبة' : 'Zero interest & zero punitive fees'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{lang === 'ar' ? 'تعديل فوري من داخل التطبيق' : 'Self-serve in under 60 seconds'}</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/60 text-[11px] font-bold text-gray-400 uppercase">
              Financial Dignity & Control
            </div>
          </div>

          {/* FOR TABBY */}
          <div className="bg-[#043B2C] text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#3BFF9E] flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#3BFF9E] block mb-1">
                {content.whyTabbyTitle}
              </span>
              <h3 className="text-xl font-black text-white tracking-tight">
                {lang === 'ar' ? 'تجربة أقوى وولاء مستدام' : 'Stronger post-purchase retention.'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 font-medium mt-3 leading-relaxed">
                {content.whyTabbyDesc}
              </p>

              <ul className="mt-5 space-y-2 text-xs font-semibold text-emerald-100">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{lang === 'ar' ? 'خفض استباقي لمعدل التخلف (NPLs)' : 'Proactively reduces default rates'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{lang === 'ar' ? 'توفير تكاليف فرق التحصيل والمتابعة' : 'Eliminates aggressive collections'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{lang === 'ar' ? 'أعلى درجات الرضا والارتباط بالعلامة' : 'Dramatically higher NPS & repeat rate'}</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-bold text-[#3BFF9E]/80 uppercase">
              Fintech Capital Preservation
            </div>
          </div>

          {/* FOR MERCHANTS */}
          <div className="bg-gray-50/70 rounded-3xl p-6 sm:p-8 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-emerald-700 shadow-xs flex items-center justify-center mb-5">
                <Store className="w-6 h-6 text-[#043B2C]" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block mb-1">
                {content.whyMerchantTitle}
              </span>
              <h3 className="text-xl font-black text-gray-900 tracking-tight">
                {lang === 'ar' ? 'إدارة التزامات دون الحاجة للشراء الجديد' : 'Responsible customer longevity.'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium mt-3 leading-relaxed">
                {content.whyMerchantDesc}
              </p>

              <ul className="mt-5 space-y-2 text-xs font-semibold text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{lang === 'ar' ? 'صفر نزاعات أو مطالبات استرجاع متأخرة' : 'Fewer forced returns or chargebacks'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{lang === 'ar' ? 'تسوية فورية لقيمة الطلب للتاجر' : 'Merchant payout remains 100% upfront'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#3BFF9E] text-black flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{lang === 'ar' ? 'علاقة إيجابية طويلة الأمد مع المتسوق' : 'Positive affinity with partner brands'}</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/60 text-[11px] font-bold text-gray-400 uppercase">
              Brand Affinity & Lifetime Value
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
