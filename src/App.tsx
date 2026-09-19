import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { CaseStudyHeader } from './components/case-study/CaseStudyHeader';
import { HeroSection } from './components/case-study/HeroSection';
import { ProblemSection } from './components/case-study/ProblemSection';
import { SolutionSection } from './components/case-study/SolutionSection';
import { WhyItMattersSection } from './components/case-study/WhyItMattersSection';
import { PrinciplesSection } from './components/case-study/PrinciplesSection';
import { CaseStudyFooter } from './components/case-study/CaseStudyFooter';
import { PrototypeContainer } from './components/prototype/PrototypeContainer';
import { Sparkles } from 'lucide-react';

export function App() {
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic for Saudi challenge context, or user can easily switch!
  const [activeView, setActiveView] = useState<'case-study' | 'prototype-only'>('case-study');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const scrollToPrototype = () => {
    if (activeView === 'prototype-only') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById('prototype-playground');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('problem-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#F8F9FA] text-[#0F172A] ${lang === 'ar' ? 'font-[IBM_Plex_Sans_Arabic]' : ''}`}>
      {/* Top Header with prominent Language Toggle */}
      <CaseStudyHeader
        lang={lang}
        onSetLang={(newLang) => setLang(newLang)}
        onTryPrototype={scrollToPrototype}
        activeView={activeView}
        onToggleView={setActiveView}
      />

      {/* VIEW A: Full Case Study & Interactive Section */}
      {activeView === 'case-study' ? (
        <main className="flex-1">
          <HeroSection
            lang={lang}
            onTryPrototype={scrollToPrototype}
            onHowItWorks={scrollToHowItWorks}
          />

          <ProblemSection lang={lang} />

          <SolutionSection
            lang={lang}
            onTryOption={() => {
              scrollToPrototype();
            }}
          />

          {/* Dedicated Live Interactive Prototype Playground */}
          <section id="prototype-playground" className="py-16 sm:py-24 bg-[#ECEFF1]/70 border-b border-gray-200 scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#043B2C] text-[#3BFF9E] text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'المختبر التفاعلي المباشر' : 'Interactive Prototype'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
                  {lang === 'ar' ? 'جرب تجربة تابي سويتش بنفسك' : 'Experience Tabby Switch in Action'}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 font-medium mt-3 max-w-xl mx-auto">
                  {lang === 'ar'
                    ? 'انقر على "تعديل الخطة (سويتش)" في كارت نايكي أدناه لاختبار المسارات الثلاثة وملاحظة الحساب التلقائي.'
                    : 'Click "Switch plan" on the Nike Air Max purchase card below to test lowering payments, paying faster, or setting a custom amount.'}
                </p>
              </div>

              <div className="py-4">
                <PrototypeContainer lang={lang} />
              </div>
            </div>
          </section>

          <WhyItMattersSection lang={lang} />

          <PrinciplesSection
            lang={lang}
            onTryPrototype={scrollToPrototype}
          />
        </main>
      ) : (
        /* VIEW B: Prototype Only Focused Testing View */
        <main className="flex-1 py-8 sm:py-12 px-4 max-w-4xl mx-auto w-full flex flex-col items-center">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              {lang === 'ar' ? 'نموذج تابي سويتش التفاعلي' : 'Tabby Switch Interactive Prototype'}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
              {lang === 'ar'
                ? 'محاكاة كاملة لتجربة مستخدم تطبيق تابي في المملكة العربية السعودية'
                : 'Full mobile simulation for Tabby customer account (Saudi Arabia • SAR)'}
            </p>
          </div>

          <PrototypeContainer lang={lang} />
        </main>
      )}

      <CaseStudyFooter lang={lang} />
    </div>
  );
}

export default App;
