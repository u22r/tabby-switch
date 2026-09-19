import React from 'react';
import { TabbyLogo } from '../common/TabbyLogo';
import { Language } from '../../types';
import { ArrowRight, Smartphone } from 'lucide-react';

interface CaseStudyHeaderProps {
  lang: Language;
  onSetLang: (lang: Language) => void;
  onTryPrototype: () => void;
  activeView: 'case-study' | 'prototype-only';
  onToggleView: (view: 'case-study' | 'prototype-only') => void;
}

export const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  lang,
  onSetLang,
  onTryPrototype,
  activeView,
  onToggleView,
}) => {
  const isRtl = lang === 'ar';

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FA]/95 backdrop-blur-md border-b border-gray-200/80 transition-all shadow-2xs">
      <div className="bg-[#043B2C] text-white px-4 py-1.5 text-center text-[11px] font-semibold flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3BFF9E] animate-pulse" />
        <span>
          {lang === 'ar'
            ? 'نموذج تصميم منتج — تحدي تابي إيماجين (سبتمبر 2026) • ليست ميزة حالية في تابي'
            : 'Concept Prototype — Tabby Imagine Challenge (Sept 2026) • Not an existing Tabby feature'}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <TabbyLogo size="md" />
          <div className="hidden sm:flex items-center gap-1.5 pl-3 rtl:pl-0 rtl:pr-3 border-l rtl:border-l-0 rtl:border-r border-gray-200 text-xs font-semibold text-gray-500">
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-[#043B2C] font-bold border border-emerald-200/60">
              {lang === 'ar' ? 'تصميم تجربة العميل (السعودية)' : 'Fintech UX Challenge'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Prominent Bilingual Language Switcher */}
          <div className="flex items-center bg-gray-200/90 p-0.5 sm:p-1 rounded-xl border border-gray-300 shadow-2xs">
            <button
              type="button"
              onClick={() => onSetLang('ar')}
              className={`px-3 py-1 sm:py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                lang === 'ar'
                  ? 'bg-[#043B2C] text-[#3BFF9E] shadow-xs'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              <span>🇸🇦</span>
              <span>عربي</span>
            </button>
            <button
              type="button"
              onClick={() => onSetLang('en')}
              className={`px-3 py-1 sm:py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                lang === 'en'
                  ? 'bg-[#043B2C] text-[#3BFF9E] shadow-xs'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              <span>🇬🇧</span>
              <span>English</span>
            </button>
          </div>

          <div className="hidden md:flex bg-gray-100 p-1 rounded-xl items-center text-xs font-bold text-gray-600">
            <button
              type="button"
              onClick={() => onToggleView('case-study')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeView === 'case-study'
                  ? 'bg-white text-gray-900 shadow-xs'
                  : 'hover:text-gray-900'
              }`}
            >
              {lang === 'ar' ? 'دراسة الحالة' : 'Case Study'}
            </button>
            <button
              type="button"
              onClick={() => onToggleView('prototype-only')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                activeView === 'prototype-only'
                  ? 'bg-[#043B2C] text-[#3BFF9E] shadow-xs'
                  : 'hover:text-gray-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'النموذج فقط' : 'Prototype'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onTryPrototype}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#043B2C] hover:bg-[#064e3b] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <span>{lang === 'ar' ? 'جرب سويتش' : 'Try Switch'}</span>
            <ArrowRight className={`w-3.5 h-3.5 stroke-[2.5] text-[#3BFF9E] ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );
};
