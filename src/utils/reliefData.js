// src/utils/reliefData.js

export const RELIEF_CATEGORIES = {
  SELF: 'self',
  SPOUSE: 'spouse',
  CHILDREN: 'children',
  PARENTS: 'parents',
  LIFESTYLE: 'lifestyle',
  MEDICAL: 'medical',
  INSURANCE: 'insurance',
  EDUCATION: 'education',
  HOUSING_INTEREST: 'housing_interest',
  SSPN: 'sspn',
  EPFASO: 'epfaso'
};

export const RELIEF_DETAILS = {
  self: {
    name: 'Self',
    limit: 9000,
    description: 'Personal Relief - automatic for all taxpayers',
    category: 'Personal'
  },
  spouse: {
    name: 'Spouse',
    limit: 9000,
    description: 'Relief for married individuals (1 spouse only)',
    category: 'Personal'
  },
  children: {
    name: 'Children',
    limit: 2000,
    description: 'RM2,000 per child under 18 (or studying full-time)',
    category: 'Family'
  },
  parents: {
    name: 'Parents/In-laws',
    limit: 5000,
    description: 'Medical/care expenses for parents (combined limit)',
    category: 'Family'
  },
  lifestyle: {
    name: 'Lifestyle & Expenses',
    limit: 2500,
    description: 'Books, internet, sports equipment, gym membership, smartphone',
    category: 'Lifestyle'
  },
  medical: {
    name: 'Medical Expenses',
    limit: 10000,
    description: 'Serious disease treatment, medical checkups (up to RM1,000 for checkups), dental, optical',
    category: 'Health'
  },
  insurance: {
    name: 'Life Insurance / Takaful',
    limit: 3000,
    description: 'Life insurance and takaful premiums (separate from EPF relief)',
    category: 'Insurance'
  },
  education: {
    name: 'Education Fees',
    limit: 7000,
    description: 'Higher education fees — technical, vocational, post-graduate (university/college)',
    category: 'Education'
  },
  housing_interest: {
    name: 'Housing Loan Interest',
    limit: 6000,
    description: 'Interest on residential property housing loans',
    category: 'Housing'
  },
  sspn: {
    name: 'SSPN / Education Savings',
    limit: 8000,
    description: 'Savings for children education in approved schemes',
    category: 'Education'
  },
  epfaso: {
    name: 'EPF / SOCSO Contributions',
    limit: 4000,
    description: 'Employee EPF contributions (relief capped at RM4,000); SOCSO contributions also deductible',
    category: 'Automatic'
  }
};

export const WIZARD_QUESTIONS = [
  {
    id: 'maritalStatus',
    question: 'Are you married?',
    type: 'yes-no',
    relief: 'spouse'
  },
  {
    id: 'children',
    question: 'Do you have any children/dependents in school or university?',
    type: 'yes-no',
    relief: 'children'
  },
  {
    id: 'numChildren',
    question: 'How many children/dependents?',
    type: 'number',
    conditional: 'children',
    relief: 'children'
  },
  {
    id: 'parentSupport',
    question: 'Do you support parents/in-laws aged 60+?',
    type: 'yes-no',
    relief: 'parents'
  },
  {
    id: 'lifeInsurance',
    question: 'Do you have life or medical insurance?',
    type: 'yes-no',
    relief: 'insurance'
  },
  {
    id: 'hosingLoan',
    question: 'Do you have a residential housing loan?',
    type: 'yes-no',
    relief: 'housing_interest'
  },
  {
    id: 'education',
    question: 'Are you pursuing higher education (university/college)?',
    type: 'yes-no',
    relief: 'education'
  },
  {
    id: 'ptptnSspn',
    question: 'Do you pay PTPTN or have SSPN education savings?',
    type: 'yes-no',
    relief: 'sspn'
  },
  {
    id: 'medicalExpenses',
    question: 'Had medical checkups or dental/optical treatment this year?',
    type: 'yes-no',
    relief: 'medical'
  },
  {
    id: 'lifestyleExpenses',
    question: 'Bought books, courses, internet, gym membership, or sports equipment?',
    type: 'yes-no',
    relief: 'lifestyle'
  }
];

export const EXPENSE_CATEGORIES = [
  { id: 'books', label: 'Books & Materials', relief: 'lifestyle' },
  { id: 'internet', label: 'Internet Subscription', relief: 'lifestyle' },
  { id: 'sports', label: 'Sports Equipment', relief: 'lifestyle' },
  { id: 'gym', label: 'Gym / Fitness Membership', relief: 'lifestyle' },
  { id: 'courses', label: 'Online Courses', relief: 'lifestyle' },
  { id: 'medical_checkup', label: 'Medical Checkup', relief: 'medical' },
  { id: 'dental', label: 'Dental Treatment', relief: 'medical' },
  { id: 'optical', label: 'Optical / Glasses', relief: 'medical' },
  { id: 'medication', label: 'Medication & Supplements', relief: 'medical' },
  { id: 'insurance_life', label: 'Life Insurance', relief: 'insurance' },
  { id: 'insurance_medical', label: 'Medical Insurance', relief: 'insurance' },
  { id: 'insurance_accident', label: 'Accident Insurance', relief: 'insurance' },
  { id: 'education_tuition', label: 'Tuition Fees', relief: 'education' },
  { id: 'sspn_contribution', label: 'SSPN Contribution', relief: 'sspn' },
  { id: 'ptptn', label: 'PTPTN Payment', relief: 'sspn' }
];

export const TAX_BANDS_2025 = [
  { min: 0,       max: 5000,     rate: 0 },
  { min: 5001,    max: 20000,    rate: 0.01 },
  { min: 20001,   max: 35000,    rate: 0.03 },
  { min: 35001,   max: 50000,    rate: 0.08 },
  { min: 50001,   max: 70000,    rate: 0.13 },
  { min: 70001,   max: 100000,   rate: 0.21 },
  { min: 100001,  max: 250000,   rate: 0.24 },
  { min: 250001,  max: 400000,   rate: 0.245 },
  { min: 400001,  max: 600000,   rate: 0.25 },
  { min: 600001,  max: 1000000,  rate: 0.26 },
  { min: 1000001, max: Infinity, rate: 0.28 }
];
