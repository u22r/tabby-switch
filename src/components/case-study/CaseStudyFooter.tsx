import React from 'react';
import { TabbyLogo } from '../common/TabbyLogo';
import { Language } from '../../types';
import { ShieldCheck } from 'lucide-react';

interface CaseStudyFooterProps {
  lang: Language;
}

export const CaseStudyFooter: React.FC<CaseStudyFooterProps> = ({ lang }) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <TabbyLogo size="sm" />
            <span className="text-xs text-gray-400 font-semibold">
              | Product Design Prototype
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {lang === 'ar'
                ? 'فكرة مصممة لتحدي تابي إيماجين — سبتمبر 2026'
                : 'Concept created for the Tabby Imagine Challenge — September 2026.'}
            </span>
          </div>
        </div>

        <div className="pt-6 text-center">
          <p className="text-xs text-gray-400 font-medium">
            {lang === 'ar'
              ? 'نموذج مفهوم تجريبي — ليست ميزة حالية في تطبيق تابي. جميع العلامات التجارية المعروضة لأغراض العرض التوضيحي فقط.'
              : 'Concept prototype — Tabby Imagine Challenge. Not an existing Tabby feature. All merchant marks are used for demonstrative prototyping purposes only.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
