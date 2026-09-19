import { Language, PaymentScheduleItem, SwitchedPlanDetails, SwitchOptionType } from '../types';

export function formatCurrency(amount: number, lang: Language = 'en'): string {
  const formatted = Math.round(amount).toLocaleString('en-US');
  return lang === 'ar' ? `${formatted} ر.س` : `SAR ${formatted}`;
}

export function calculateSwitchPlan(
  optionType: SwitchOptionType,
  customAmount: number = 400,
  totalRemaining: number = 900
): SwitchedPlanDetails {
  if (optionType === 'LOWER_PAYMENTS') {
    const count = 6;
    const installmentAmount = Math.round(totalRemaining / count);
    const schedule: PaymentScheduleItem[] = Array.from({ length: count }, (_, i) => {
      const days = (i + 1) * 30 - 22;
      return {
        id: `sched-lower-${i + 1}`,
        dueDateLabel: i === 0 ? 'In 8 days' : `In ${days} days`,
        amount: installmentAmount,
        status: i === 0 ? 'DUE_TODAY' : 'UPCOMING',
        dateFormatted: i === 0 ? '23 Sep 2026' : undefined,
      };
    });

    return {
      optionType,
      paidTodayAmount: 0,
      remainingAfterToday: totalRemaining,
      futureInstallmentAmount: installmentAmount,
      futureInstallmentCount: count,
      totalSwitchedAmount: totalRemaining,
      effectiveDate: 'Today',
      schedule,
    };
  }

  if (optionType === 'PAY_FASTER') {
    const count = 2;
    const installmentAmount = Math.round(totalRemaining / count);
    const schedule: PaymentScheduleItem[] = [
      {
        id: 'sched-fast-1',
        dueDateLabel: 'In 8 days',
        amount: installmentAmount,
        status: 'DUE_TODAY',
        dateFormatted: '23 Sep 2026',
      },
      {
        id: 'sched-fast-2',
        dueDateLabel: 'In 38 days',
        amount: installmentAmount,
        status: 'UPCOMING',
        dateFormatted: '23 Oct 2026',
      },
    ];

    return {
      optionType,
      paidTodayAmount: 0,
      remainingAfterToday: totalRemaining,
      futureInstallmentAmount: installmentAmount,
      futureInstallmentCount: count,
      totalSwitchedAmount: totalRemaining,
      effectiveDate: 'Today',
      schedule,
    };
  }

  const validPayToday = Math.min(Math.max(customAmount, 50), totalRemaining - 50);
  const remaining = totalRemaining - validPayToday;
  const count = 2;
  const baseInstallment = Math.floor(remaining / count);
  const remainder = remaining - baseInstallment * count;

  const schedule: PaymentScheduleItem[] = [
    {
      id: 'sched-cust-today',
      dueDateLabel: 'TODAY',
      amount: validPayToday,
      status: 'PAID',
      dateFormatted: 'Paid today',
    },
    {
      id: 'sched-cust-1',
      dueDateLabel: 'In 8 days',
      amount: baseInstallment + remainder,
      status: 'UPCOMING',
      dateFormatted: '23 Sep 2026',
    },
    {
      id: 'sched-cust-2',
      dueDateLabel: 'Next payment (In 38 days)',
      amount: baseInstallment,
      status: 'UPCOMING',
      dateFormatted: '23 Oct 2026',
    },
  ];

  return {
    optionType: 'CUSTOM_AMOUNT',
    paidTodayAmount: validPayToday,
    remainingAfterToday: remaining,
    futureInstallmentAmount: baseInstallment,
    futureInstallmentCount: count,
    totalSwitchedAmount: totalRemaining,
    effectiveDate: 'Today',
    schedule,
  };
}
