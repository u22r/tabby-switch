import React, { useState } from 'react';
import { PhoneFrame } from './PhoneFrame';
import { Screen1ActivePurchase } from './Screen1ActivePurchase';
import { Screen2SwitchPlan } from './Screen2SwitchPlan';
import { Screen3CustomCalculator } from './Screen3CustomCalculator';
import { Screen4PlanPreview } from './Screen4PlanPreview';
import { Screen5Confirmation } from './Screen5Confirmation';
import { Screen6UpdatedPurchase } from './Screen6UpdatedPurchase';
import { Language, PrototypeScreen, PurchaseData, SwitchOptionType, SwitchedPlanDetails } from '../../types';
import { INITIAL_PURCHASE } from '../../data/mockData';
import { calculateSwitchPlan } from '../../utils/calculator';
import { RotateCcw, Smartphone, Monitor } from 'lucide-react';

interface PrototypeContainerProps {
  lang: Language;
}

export const PrototypeContainer: React.FC<PrototypeContainerProps> = ({ lang }) => {
  const [currentScreen, setCurrentScreen] = useState<PrototypeScreen>(1);
  const [purchase, setPurchase] = useState<PurchaseData>(INITIAL_PURCHASE);
  const [selectedOption, setSelectedOption] = useState<SwitchOptionType>('CUSTOM_AMOUNT');
  const [customPayToday, setCustomPayToday] = useState<number>(400);
  const [planDetails, setPlanDetails] = useState<SwitchedPlanDetails>(
    calculateSwitchPlan('CUSTOM_AMOUNT', 400, 900)
  );
  const [isFramed, setIsFramed] = useState<boolean>(true);

  const handleStartSwitch = () => {
    setCurrentScreen(2);
  };

  const handleSelectOption = (option: SwitchOptionType) => {
    setSelectedOption(option);
    if (option === 'CUSTOM_AMOUNT') {
      const calculated = calculateSwitchPlan('CUSTOM_AMOUNT', customPayToday, purchase.remainingAmount);
      setPlanDetails(calculated);
      setCurrentScreen(3);
    } else {
      const calculated = calculateSwitchPlan(option, 0, purchase.remainingAmount);
      setPlanDetails(calculated);
      setCurrentScreen(4);
    }
  };

  const handleCustomCalculatorContinue = (amount: number) => {
    setCustomPayToday(amount);
    const calculated = calculateSwitchPlan('CUSTOM_AMOUNT', amount, purchase.remainingAmount);
    setPlanDetails(calculated);
    setCurrentScreen(4);
  };

  const handleConfirmSwitch = () => {
    setCurrentScreen(5);
  };

  const handleViewPurchase = () => {
    const payToday = planDetails.paidTodayAmount;
    setPurchase((prev) => ({
      ...prev,
      paidAmount: prev.paidAmount + payToday,
      remainingAmount: prev.totalAmount - (prev.paidAmount + payToday),
      completedInstallments: 2,
      activeSwitchedPlan: planDetails,
    }));
    setCurrentScreen(6);
  };

  const handleResetDemo = () => {
    setPurchase(INITIAL_PURCHASE);
    setSelectedOption('CUSTOM_AMOUNT');
    setCustomPayToday(400);
    setPlanDetails(calculateSwitchPlan('CUSTOM_AMOUNT', 400, 900));
    setCurrentScreen(1);
  };

  const screenTitles = [
    { num: 1, label: lang === 'ar' ? '١. المشتريات النشطة' : '1. Active' },
    { num: 2, label: lang === 'ar' ? '٢. خيارات التعديل' : '2. Options' },
    { num: 3, label: lang === 'ar' ? '٣. حاسبة المبلغ' : '3. Calculator' },
    { num: 4, label: lang === 'ar' ? '٤. معاينة الخطة' : '4. Preview' },
    { num: 5, label: lang === 'ar' ? '٥. تأكيد السداد' : '5. Success' },
    { num: 6, label: lang === 'ar' ? '٦. الجدول المحدث' : '6. Updated' },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-2xl mb-6 bg-white/90 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] font-black uppercase text-gray-400 px-1 hidden md:inline">
            {lang === 'ar' ? 'انتقال سريع:' : 'Flow:'}
          </span>
          {screenTitles.map((s) => (
            <button
              key={s.num}
              onClick={() => {
                if (s.num === 6) {
                  handleViewPurchase();
                } else {
                  setCurrentScreen(s.num as PrototypeScreen);
                }
              }}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                currentScreen === s.num
                  ? 'bg-[#043B2C] text-[#3BFF9E] shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            onClick={() => setIsFramed(!isFramed)}
            className="p-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold flex items-center gap-1 cursor-pointer"
            title="Toggle phone frame"
          >
            {isFramed ? <Monitor className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
            <span className="text-[11px] hidden sm:inline">{isFramed ? 'Expanded' : 'Device'}</span>
          </button>

          <button
            onClick={handleResetDemo}
            className="p-1.5 rounded-xl bg-[#3BFF9E]/20 hover:bg-[#3BFF9E]/40 text-[#043B2C] text-xs font-bold flex items-center gap-1 cursor-pointer"
            title="Reset prototype to initial state"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="text-[11px]">{lang === 'ar' ? 'إعادة ضبط' : 'Reset'}</span>
          </button>
        </div>
      </div>

      <PhoneFrame isFramed={isFramed}>
        {currentScreen === 1 && (
          <Screen1ActivePurchase
            lang={lang}
            purchase={purchase}
            onSwitchPlan={handleStartSwitch}
          />
        )}

        {currentScreen === 2 && (
          <Screen2SwitchPlan
            lang={lang}
            purchase={purchase}
            onBack={() => setCurrentScreen(1)}
            onSelectOption={handleSelectOption}
          />
        )}

        {currentScreen === 3 && (
          <Screen3CustomCalculator
            lang={lang}
            purchase={purchase}
            initialAmount={customPayToday}
            onBack={() => setCurrentScreen(2)}
            onContinue={handleCustomCalculatorContinue}
          />
        )}

        {currentScreen === 4 && (
          <Screen4PlanPreview
            lang={lang}
            purchase={purchase}
            planDetails={planDetails}
            onBack={() => {
              if (selectedOption === 'CUSTOM_AMOUNT') {
                setCurrentScreen(3);
              } else {
                setCurrentScreen(2);
              }
            }}
            onConfirm={handleConfirmSwitch}
          />
        )}

        {currentScreen === 5 && (
          <Screen5Confirmation
            lang={lang}
            purchase={purchase}
            planDetails={planDetails}
            onViewPurchase={handleViewPurchase}
            onDone={handleViewPurchase}
          />
        )}

        {currentScreen === 6 && (
          <Screen6UpdatedPurchase
            lang={lang}
            purchase={purchase}
            planDetails={planDetails}
            onResetDemo={handleResetDemo}
          />
        )}
      </PhoneFrame>

      <div className="mt-5 text-center max-w-sm px-4">
        <p className="text-xs text-gray-500 leading-relaxed font-medium">
          {lang === 'ar'
            ? '💡 يمكنك تجربة الخيارات الثلاثة: تقليل الأقساط (150 × 6)، السداد السريع (450 × 2)، أو تخصيص مبلغ اليوم (مثلاً 400 ر.س اليوم + 2 × 250 ر.س).'
            : '💡 Try any of the 3 paths: Option A (SAR 150 × 6), Option B (SAR 450 × 2), or Option C (Custom SAR 400 today + 2 × SAR 250).'}
        </p>
      </div>
    </div>
  );
};
