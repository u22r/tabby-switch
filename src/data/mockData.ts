import { PurchaseData } from '../types';

export const INITIAL_PURCHASE: PurchaseData = {
  id: 'order-nike-88219',
  title: 'Nike Air Max',
  merchant: 'Nike',
  category: 'Footwear & Apparel',
  totalAmount: 1200,
  paidAmount: 300,
  remainingAmount: 900,
  totalInstallments: 4,
  completedInstallments: 1,
  installmentAmount: 300,
  nextPaymentAmount: 300,
  nextPaymentDueDateDays: 8,
  orderNumber: 'SAR-NK-90421',
  purchaseDate: '24 Aug 2026',
  isEligibleForSwitch: true,
  activeSwitchedPlan: null,
};

export const MOCK_CONTENT = {
  en: {
    brand: 'Tabby',
    switchFeatureName: 'Tabby Switch',
    tagline: 'Your payment plan should adapt when life changes.',
    subheading: 'Give customers more control over existing purchases by letting eligible users adjust how they repay — without encouraging additional spending.',
    ctaTry: 'Try the prototype',
    ctaHow: 'How it works',
    challengeBadge: 'Concept prototype — Tabby Imagine Challenge',
    notExistingBadge: 'Not an existing Tabby feature',
    currency: 'SAR',
    currencySymbol: 'SAR',

    // Screen 1
    screen1: {
      header: 'Your purchases',
      activeTab: 'Active',
      paidTab: 'History',
      completedBadge: '1 of 4 payments completed',
      nextPaymentLabel: 'Next payment',
      dueInDays: 'Due in 8 days',
      remainingLabel: 'Remaining',
      switchPlanBtn: 'Switch plan',
      viewDetails: 'Order details',
    },

    // Screen 2
    screen2: {
      header: 'Switch your payment plan',
      subtitle: 'Life changes. Your payment plan can too.',
      currentPlanLabel: 'Current plan',
      currentPlanDetail: 'SAR 300 × 3 payments',
      remainingTotal: 'SAR 900 remaining',
      chooseOptionLabel: 'Select an adjustment option',
      
      optionA: {
        title: 'Lower my upcoming payments',
        preview: 'SAR 150 × 6 payments',
        description: 'Spread your remaining balance across more payments.',
        badge: 'Maximum flexibility',
      },
      optionB: {
        title: 'Pay faster',
        preview: 'SAR 450 × 2 payments',
        description: 'Pay more now and finish your purchase sooner.',
        badge: 'Fast-track payoff',
      },
      optionC: {
        title: 'Choose an amount',
        preview: 'Pay what works for you today',
        description: 'Set a custom down payment and see your new split instantly.',
        badge: 'Custom schedule',
      },
      eligibilityDisclaimer: 'Availability depends on eligibility and Tabby’s applicable terms. No additional interest or borrowing fees apply.',
      seeNewPlanBtn: 'See my new plan',
    },

    // Screen 3
    screen3: {
      header: 'Choose your payment amount',
      question: 'How much would you like to pay today?',
      presetHint: 'Select a suggested amount or enter your own:',
      liveCalcTitle: 'Live schedule breakdown',
      payTodayLabel: 'Pay today',
      remainingBalanceLabel: 'Remaining balance',
      newUpcomingLabel: 'New upcoming payments',
      comparisonTitle: 'Plan Comparison',
      currentPlanHeader: 'CURRENT PLAN',
      newPlanHeader: 'NEW PLAN',
      disclaimer: 'Your available options may vary based on eligibility and applicable terms.',
      continueBtn: 'Continue',
      backBtn: 'Back',
      invalidAmountError: 'Please enter an amount between SAR 50 and SAR 850.',
    },

    // Screen 4
    screen4: {
      header: "Here's your new plan",
      timelineToday: 'TODAY',
      paidTodayNote: 'Paid today',
      timelineIn8Days: 'In 8 days',
      timelineNextPayment: 'Next payment',
      purchasePaidOff: 'Purchase paid off',
      beforeLabel: 'Before',
      afterLabel: 'After',
      beforeFormula: '3 × SAR 300',
      totalRemainingLabel: 'Total remaining balance',
      confirmSwitchBtn: 'Confirm switch',
      goBackBtn: 'Go back',
      breakdownSummary: 'Zero fees. Zero interest. Simple restructuring of your original balance.',
    },

    // Screen 5
    screen5: {
      title: 'Your payment plan has been updated',
      description: 'Your new payment schedule is now active. We’ve sent a confirmation receipt to your registered mobile and email.',
      newPlanBadge: 'New plan active',
      paidTodayLabel: 'Paid today',
      nextPaymentLabel: 'Next payment',
      in8Days: 'in 8 days',
      finalPaymentLabel: 'Final payment',
      viewPurchaseBtn: 'View purchase',
      doneBtn: 'Done',
    },

    // Screen 6
    screen6: {
      header: 'Purchase Details',
      progressLabel: '2 of 4 equivalent payments completed',
      paidLabel: 'Paid',
      remainingLabel: 'Remaining',
      nextPaymentLabel: 'Next payment',
      activePlanBannerTitle: "You're on your new plan",
      activePlanBannerDesc: 'Your schedule has been successfully adjusted to fit your financial timeline.',
      changeAgainLabel: 'Need to change it again?',
      changeAgainNote: 'Eligible for another adjustment in 30 days after 1 on-time payment.',
      resetDemoBtn: 'Reset Prototype Demo',
    },

    // Case Study Content
    caseStudy: {
      navConcept: 'Concept Overview',
      navProblem: 'The Problem',
      navSolution: 'The Solution',
      navWhy: 'Why It Matters',
      navPrinciples: 'Product Principles',
      navTry: 'Interactive Demo',

      heroTitle: 'Your payment plan should adapt when life changes.',
      heroSub: 'Tabby Switch empowers customers to adjust the remaining payment schedule of an existing purchase — with zero penalty, zero added interest, and zero incentive to overspend.',
      
      problemTag: 'The Post-Purchase Dilemma',
      problemTitle: 'Life doesn’t stay the same after checkout.',
      problemDesc: 'A customer chooses a payment plan based on their situation today. But unexpected expenses, changing income, or extra cash can make that same plan less suitable tomorrow.',
      problemQuote: 'The problem isn’t the purchase. It’s the lack of flexibility afterward.',

      timelineCheckout: 'Checkout Plan',
      timelineCheckoutDesc: 'Commitment made at checkout based on current liquidity.',
      timelineLife: 'Life Changes',
      timelineLifeDesc: 'Vehicle repair, bonus payout, or budget shifts occur weeks later.',
      timelineRigid: 'Fixed Rigid Plan',
      timelineRigidDesc: 'Customer forced into distress or delinquency despite wanting to pay.',

      solutionTag: 'Core Innovation',
      solutionTitle: 'Meet Tabby Switch',
      solutionDesc: 'An eligible customer can adjust the remaining payment structure of an existing purchase with transparent, real-time recalculations.',

      card1Title: 'PAY LESS NOW',
      card1Desc: 'Spread remaining balance over a longer period to immediately reduce monthly cashflow pressure.',
      card2Title: 'PAY MORE NOW',
      card2Desc: 'Reduce future payments and finish sooner when unexpected cash or a bonus becomes available.',
      card3Title: 'CHOOSE YOUR AMOUNT',
      card3Desc: 'Pay what works for you right now and instantly preview the recalculated schedule before committing.',

      whyTag: 'Fintech Value Creation',
      whyTitle: 'Why Tabby Switch Matters',
      
      whyCustomerTitle: 'FOR CUSTOMERS',
      whyCustomerDesc: 'Peace of mind, dignified financial control, and zero fear of punitive debt cycles when life takes unexpected turns.',
      
      whyTabbyTitle: 'FOR TABBY',
      whyTabbyDesc: 'Drastically reduces default & collection costs, transforms involuntary delinquencies into structured recoveries, and builds world-class customer loyalty.',

      whyMerchantTitle: 'FOR MERCHANTS',
      whyMerchantDesc: 'Higher customer lifetime value and brand trust, as shoppers feel protected rather than trapped by their purchase commitments.',

      principlesTag: 'Fintech Ethics',
      principlesTitle: 'Guiding Product Principles',
      
      principle1: 'Control, not consumption.',
      principle1Desc: 'Tabby Switch strictly manages existing purchase obligations. It never increases the purchase limit or tempts users to buy more.',
      
      principle2: 'Transparency before confirmation.',
      principle2Desc: 'Every halala is accounted for. Customers see the exact future schedule and exact date impacts before clicking confirm.',
      
      principle3: 'Flexibility without encouraging additional spending.',
      principle3Desc: 'Unlike revolving credit cards or debt consolidation, the total principal remains strictly identical.',

      principle4: 'Eligibility and responsible use come first.',
      principle4Desc: 'Gated by SIMAH credit bureau health, previous on-time payment records, and reasonable cool-down periods.',

      ctaTitle: 'What if checkout wasn’t the end of the experience?',
      ctaSub: 'Experience how modern fintech can deliver empathetic, responsible flexibility to millions of shoppers across Saudi Arabia.',
      ctaButton: 'Launch Interactive Prototype',
      footerNote: 'Concept created for the Tabby Imagine Challenge — September 2026. Concept prototype — Tabby Imagine Challenge. Not an existing Tabby feature.'
    }
  },
  ar: {
    brand: 'تابي',
    switchFeatureName: 'تابي سويتش',
    tagline: 'خطة دفعك تتكيف عندما تتغير ظروف الحياة.',
    subheading: 'امنح العملاء مرونة أكبر في إدارة مشترياتهم الحالية عبر تعديل جدول السداد للمؤهلين — دون تشجيع على إنفاق إضافي.',
    ctaTry: 'جرب النموذج التفاعلي',
    ctaHow: 'كيف يعمل؟',
    challengeBadge: 'نموذج تصميم منتج — تحدي تابي إيماجين',
    notExistingBadge: 'ليست ميزة حالية في تطبيق تابي',
    currency: 'ر.س',
    currencySymbol: 'ر.س',

    // Screen 1
    screen1: {
      header: 'مشترياتك',
      activeTab: 'النشطة',
      paidTab: 'المكتملة',
      completedBadge: 'اكتملت دفعة واحدة من أصل 4',
      nextPaymentLabel: 'الدفعة القادمة',
      dueInDays: 'مستحقة خلال 8 أيام',
      remainingLabel: 'المتبقي',
      switchPlanBtn: 'تعديل الخطة (سويتش)',
      viewDetails: 'تفاصيل الطلب',
    },

    // Screen 2
    screen2: {
      header: 'تعديل خطة الدفع',
      subtitle: 'الظروف تتغير، وخطة دفعك يمكن أن تتغير أيضاً.',
      currentPlanLabel: 'الخطة الحالية',
      currentPlanDetail: '300 ر.س × 3 دفعات',
      remainingTotal: 'المتبقي 900 ر.س',
      chooseOptionLabel: 'اختر طريقة التعديل المناسبة لك',
      
      optionA: {
        title: 'تقليل الدفعات القادمة',
        preview: '150 ر.س × 6 دفعات',
        description: 'توزيع الرصيد المتبقي على دفعات أكثر لتخفيف العبء الشهري.',
        badge: 'مرونة قصوى',
      },
      optionB: {
        title: 'السداد السريع',
        preview: '450 ر.س × دفعتين',
        description: 'ادفع أكثر الآن وأنهِ مشترياتك في وقت أقصر.',
        badge: 'سداد مبكر',
      },
      optionC: {
        title: 'تحديد مبلغ مخصص',
        preview: 'ادفع ما يناسب ميزانيتك اليوم',
        description: 'حدد دفعة اليوم وشاهد إعادة تقسيم باقي الأقساط فوراً.',
        badge: 'خطة مخصصة',
      },
      eligibilityDisclaimer: 'تخضع الخيارات لتقييم الأهلية وشروط تابي المعتمدة. بدون فوائد أو رسوم إضافية خفية.',
      seeNewPlanBtn: 'عرض خطتي الجديدة',
    },

    // Screen 3
    screen3: {
      header: 'حدد مبلغ السداد اليوم',
      question: 'كم ترغب في سداده اليوم؟',
      presetHint: 'اختر من المبالغ المقترحة أو أدخل مبلغاً مخصصاً:',
      liveCalcTitle: 'الحساب المباشر للجدول الجديد',
      payTodayLabel: 'السداد اليوم',
      remainingBalanceLabel: 'الرصيد المتبقي',
      newUpcomingLabel: 'الأقساط القادمة الجديدة',
      comparisonTitle: 'مقارنة الخطط',
      currentPlanHeader: 'الخطة الحالية',
      newPlanHeader: 'الخطة الجديدة',
      disclaimer: 'الخيارات المتاحة قد تتغير بناءً على سجل الأهلية والشروط والأحكام.',
      continueBtn: 'متابعة',
      backBtn: 'رجوع',
      invalidAmountError: 'يرجى إدخال مبلغ بين 50 ر.س و 850 ر.س.',
    },

    // Screen 4
    screen4: {
      header: 'هذه خطتك الجديدة',
      timelineToday: 'اليوم',
      paidTodayNote: 'يُدفع اليوم',
      timelineIn8Days: 'خلال 8 أيام',
      timelineNextPayment: 'الدفعة التالية',
      purchasePaidOff: 'تم سداد الطلب بالكامل',
      beforeLabel: 'قبل التعديل',
      afterLabel: 'بعد التعديل',
      beforeFormula: '3 × 300 ر.س',
      totalRemainingLabel: 'إجمالي الرصيد المتبقي',
      confirmSwitchBtn: 'تأكيد تعديل الخطة',
      goBackBtn: 'العودة للخلف',
      breakdownSummary: 'بدون أي فوائد. بدون أي رسوم. إعادة هيكلة مسؤولة لرصيدك القائم.',
    },

    // Screen 5
    screen5: {
      title: 'تم تحديث خطة الدفع بنجاح',
      description: 'جدول سدادك الجديد أصبح فعالاً الآن. تم إرسال إشعار تفصيلي لرقم هاتفك وبريدك الإلكتروني.',
      newPlanBadge: 'الخطة الجديدة فعالة',
      paidTodayLabel: 'تم دفعه اليوم',
      nextPaymentLabel: 'الدفعة القادمة',
      in8Days: 'خلال 8 أيام',
      finalPaymentLabel: 'الدفعة الأخيرة',
      viewPurchaseBtn: 'عرض تفاصيل الطلب',
      doneBtn: 'تم',
    },

    // Screen 6
    screen6: {
      header: 'تفاصيل المشتريات',
      progressLabel: 'اكتمل ما يعادل دفعتين من 4',
      paidLabel: 'المدفوع',
      remainingLabel: 'المتبقي',
      nextPaymentLabel: 'الدفعة القادمة',
      activePlanBannerTitle: 'أنت الآن على خطتك الجديدة',
      activePlanBannerDesc: 'تمت إعادة ترتيب أقساطك بما يتناسب مع ظروفك المالية الحالية.',
      changeAgainLabel: 'هل تحتاج لتعديلها مرة أخرى؟',
      changeAgainNote: 'متاح إجراء تعديل آخر بعد 30 يوماً من سداد دفعة منتظمة في موعدها.',
      resetDemoBtn: 'إعادة ضبط النموذج التفاعلي',
    },

    caseStudy: {
      navConcept: 'نظرة عامة',
      navProblem: 'المشكلة',
      navSolution: 'الحل',
      navWhy: 'الأثر والقيمة',
      navPrinciples: 'المبادئ الأساسية',
      navTry: 'النموذج التفاعلي',

      heroTitle: 'خطة دفعك تتكيف عندما تتغير ظروف الحياة.',
      heroSub: 'تابي سويتش تمنح العميل تحكماً حقيقياً في إعادة هيكلة الأقساط القائمة — بدون عقوبات، بدون فوائد تراكمية، وبدون إغراء بالمزيد من الاستدانة.',
      
      problemTag: 'معضلة ما بعد إتمام الشراء',
      problemTitle: 'الحياة لا تتوقف بعد إتمام عملية الشراء.',
      problemDesc: 'يختار العميل خطة الدفع في لحظة الدفع بناءً على سيولته آنذاك. لكن مصاريف غير متوقعة، تغيرات الدخل، أو توفر سيولة إضافية تجعل تلك الخطة غير مناسبة لاحقاً.',
      problemQuote: 'المشكلة ليست في الشراء، بل في انعدام المرونة بعده.',

      timelineCheckout: 'خطة الدفع عند الشراء',
      timelineCheckoutDesc: 'التزام ثابت تم تحديده عند نقطة الدفع.',
      timelineLife: 'تغير الظروف',
      timelineLifeDesc: 'مصاريف طارئة أو مكافأة مالية بعد عدة أسابيع.',
      timelineRigid: 'الخطة الجامدة',
      timelineRigidDesc: 'وقوع العميل في تعثر غير مقصود رغم رغبته الصادقة في السداد.',

      solutionTag: 'الابتكار المحوري',
      solutionTitle: 'تعرّف على تابي سويتش',
      solutionDesc: 'تتيح للعميل المؤهل تعديل هيكل الأقساط المتبقية لعملية شراء قائمة بحسابات فورية شفافة.',

      card1Title: 'تقليل الأقساط القادمة',
      card1Desc: 'توزيع الرصيد المتبقي على فترة أطول لتخفيف الضغط المالي الفوري.',
      card2Title: 'السداد السريع',
      card2Desc: 'دفع مبلغ أكبر الآن لإنهاء الالتزام والتحرر من الأقساط مبكراً.',
      card3Title: 'تحديد المبلغ المناسب',
      card3Desc: 'دفع ما يتوفر في يدك اليوم ومشاهدة الأقساط المتبقية يُعاد تقسيمها فورياً.',

      whyTag: 'القيمة الاقتصادية والتقنية',
      whyTitle: 'لماذا تابي سويتش؟',
      
      whyCustomerTitle: 'للعملاء',
      whyCustomerDesc: 'راحة بال وتحكم مالي كريم دون خوف من دوامة الديون أو الرسوم الجزائية.',
      
      whyTabbyTitle: 'لتابي',
      whyTabbyDesc: 'خفض تكاليف التحصيل والتعثر، وتحويل التخلف غير المقصود عن السداد إلى سداد منتظم مع ولاء قياسي.',

      whyMerchantTitle: 'للتجار والشركاء',
      whyMerchantDesc: 'رفع القيمة الدائمة للعميل، حيث يتسوق المستهلك وهو مطمئن لوجود شبكة أمان مرنة.',

      principlesTag: 'أخلاقيات التقنية المالية',
      principlesTitle: 'مبادئ تصميم المنتج',
      
      principle1: 'التحكم وليس الاستهلاك.',
      principle1Desc: 'تابي سويتش تقتصر على المشتريات القائمة فقط، ولا ترفع الحد الائتماني أو تغري بالشراء الإضافي.',
      
      principle2: 'الشفافية الكاملة قبل التأكيد.',
      principle2Desc: 'كل هللة واضحة ومحسوبة. يرى العميل التواريخ والمبالغ الدقيقة قبل الضغط على زر الاعتماد.',
      
      principle3: 'المرونة دون تشجيع على إنفاق جديد.',
      principle3Desc: 'على عكس البطاقات الائتمانية الدوارة، يبقى إجمالي أصل الدين مطابقاً تماماً دون أي زيادة.',

      principle4: 'الأهلية والمسؤولية أولاً.',
      principle4Desc: 'ميزة مقيدة بسجل السجل الائتماني (سمة) والانتظام السابق في السداد مع فترات تهدئة كافية.',

      ctaTitle: 'ماذا لو لم تكن شاشة الدفع نهاية التجربة؟',
      ctaSub: 'استكشف كيف تقدم التقنية المالية الحديثة حلولاً مسؤولة وإنسانية لملايين المتسوقين في المملكة العربية السعودية.',
      ctaButton: 'تشغيل النموذج التفاعلي',
      footerNote: 'فكرة مصممة لتحدي تابي إيماجين — سبتمبر 2026. نموذج تجريبي — ليست ميزة حالية في تابي.'
    }
  }
};
