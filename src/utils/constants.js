// src/utils/constants.js

export const APP_TITLE = 'TaxTracker MY';
export const APP_SUBTITLE = 'Malaysian Tax Relief Companion';
export const APP_VERSION = '1.0.0';

export const MESSAGES = {
  RELIEF_ELIGIBLE: 'You are eligible for this relief!',
  RELIEF_NOT_ELIGIBLE: 'You do not meet the criteria for this relief',
  EXPENSE_ADDED: 'Expense added successfully',
  EXPENSE_DELETED: 'Expense deleted',
  DATA_SAVED: 'Your data has been saved',
  NO_EXPENSES: 'No expenses recorded yet',
  YEAR_ENDED: 'Tax year has ended. Time to file!',
  DISCLAIMER: 'This is an educational tool. Final reference should be LHDN rules and your actual e-Filing form.'
};

export const NAVIGATION = [
  { path: '/', label: 'Home', icon: 'Home' },
  { path: '/wizard', label: 'Wizard', icon: 'Wand2' },
  { path: '/tracker', label: 'Tracker', icon: 'BarChart3' },
  { path: '/estimator', label: 'Estimator', icon: 'Calculator' },
  { path: '/checklist', label: 'Checklist', icon: 'CheckCircle2' },
  { path: '/faq', label: 'FAQ', icon: 'HelpCircle' }
];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const FILING_DEADLINE = '15 May'; // e-Filing deadline for salaried individuals (Form BE), mandatory e-Filing from YA 2025
export const FILING_DEADLINE_BUSINESS = '15 July'; // e-Filing deadline for individuals with business income (Form B)
export const PCB_COLLECTION_END = '28 February'; // EA form deadline from employer

export const DISCLAIMER_TEXT = `
This application is provided as an educational tool to help Malaysian salaried taxpayers
understand and track tax reliefs they may be eligible for.

IMPORTANT: The calculations and suggestions in this app are estimates based on YA 2025 tax regulations
(e-Filing 2026). They are NOT official tax advice.

Key 2026 e-Filing requirements:
- e-Filing is now MANDATORY — paper BE/BN forms are no longer accepted.
- Pre-filled data is available on MyTax portal from 1 March 2026.
- Deadline: 15 May 2026 (Form BE, salaried) / 15 July 2026 (Form B, business income).

For authoritative information, please refer to:
- LHDN (Lembaga Hasil Dalam Negeri Malaysia) official website: https://www.hasil.gov.my
- Your official e-Filing portal (MyTax)
- Licensed tax consultants or accountants

Your actual tax liability is determined by your completed e-Filing form and LHDN assessment.
Always keep original receipts for 7 years for audit purposes.
`;

export const FAQ_DATA = [
  {
    question: 'What is this app for?',
    answer: 'This app helps Malaysian salaried taxpayers identify reliefs they can claim and track their eligible expenses throughout the year. It provides estimates to help you understand potential refunds.'
  },
  {
    question: 'Who can use this app?',
    answer: 'This app is designed for salaried individuals in Malaysia with basic tax situations. If you have business income, rental income, or complex deductions, please consult a professional accountant.'
  },
  {
    question: 'What are tax reliefs?',
    answer: 'Tax reliefs are amounts you can deduct from your gross income to reduce your taxable income. Common reliefs include spouse relief, children relief, insurance premiums, medical expenses, and education fees.'
  },
  {
    question: 'Is the tax estimate accurate?',
    answer: 'The estimate is based on YA 2025 tax bands (11 progressive brackets, 0%–28%) and standard assumptions. Actual tax liability depends on your exact circumstances. Always verify with LHDN e-Filing before submission.'
  },
  {
    question: 'Can I claim the same expense twice?',
    answer: 'No. Each expense can only be claimed under one relief category. For example, tuition fees count as education relief, not lifestyle relief.'
  },
  {
    question: 'What receipts do I need to keep?',
    answer: 'Keep original receipts and supporting documents for all claimed expenses. LHDN may request these during an audit. Keep records for at least 7 years.'
  },
  {
    question: 'When should I file my taxes?',
    answer: 'For YA 2025 (filing in 2026): salaried individuals (Form BE) must file by 15 May 2026. Those with business income (Form B) have until 15 July 2026. e-Filing is now mandatory — paper forms are no longer accepted. Pre-filled data is available on MyTax from 1 March 2026.'
  },
  {
    question: 'How do I submit to LHDN?',
    answer: 'Log into the MyTax portal (https://mytax.hasil.gov.my) with your MyAccount or TIN credentials. From YA 2025, all submissions must be via e-Filing — paper BE/BN forms are not accepted. Review your pre-filled data, enter any additional relief amounts, and submit online.'
  },
  {
    question: 'What if I\'ve never filed before?',
    answer: 'If this is your first time, you may need to register for a MyAccount or e-Filing PIN. Visit the LHDN website for registration assistance. Many banks and post offices can help with this.'
  },
  {
    question: 'Can I edit my submission after filing?',
    answer: 'If you discover errors after filing, you can file an amended return (amended e-Filing form). Contact LHDN for guidance on the amendment process.'
  }
];
