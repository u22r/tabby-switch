export type Language = 'en' | 'ar';

export type SwitchOptionType = 'LOWER_PAYMENTS' | 'PAY_FASTER' | 'CUSTOM_AMOUNT';

export interface PaymentScheduleItem {
  id: string;
  dueDateLabel: string;
  amount: number;
  status: 'PAID' | 'DUE_TODAY' | 'UPCOMING' | 'NEW_SCHEDULE';
  dateFormatted?: string;
}

export interface PurchaseData {
  id: string;
  title: string;
  merchant: string;
  category: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  totalInstallments: number;
  completedInstallments: number;
  installmentAmount: number;
  nextPaymentAmount: number;
  nextPaymentDueDateDays: number;
  orderNumber: string;
  purchaseDate: string;
  isEligibleForSwitch: boolean;
  activeSwitchedPlan?: SwitchedPlanDetails | null;
}

export interface SwitchedPlanDetails {
  optionType: SwitchOptionType;
  paidTodayAmount: number;
  remainingAfterToday: number;
  futureInstallmentAmount: number;
  futureInstallmentCount: number;
  totalSwitchedAmount: number;
  effectiveDate: string;
  schedule: PaymentScheduleItem[];
}

export type PrototypeScreen = 1 | 2 | 3 | 4 | 5 | 6;
