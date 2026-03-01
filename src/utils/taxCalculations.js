// src/utils/taxCalculations.js

import { TAX_BANDS_2024 } from './reliefData';

export const calculateTaxableIncome = (grossIncome, totalReliefs) => {
  return Math.max(0, grossIncome - totalReliefs);
};

export const calculateTax = (taxableIncome) => {
  let tax = 0;
  
  for (let band of TAX_BANDS_2024) {
    if (taxableIncome > band.max) {
      tax += (band.max - band.min + 1) * band.rate;
    } else if (taxableIncome >= band.min) {
      tax += (taxableIncome - band.min + 1) * band.rate;
      break;
    }
  }
  
  return Math.round(tax);
};

export const calculateTaxOutcome = (grossIncome, totalReliefs, pcbDeducted) => {
  const taxableIncome = calculateTaxableIncome(grossIncome, totalReliefs);
  const totalTax = calculateTax(taxableIncome);
  const difference = pcbDeducted - totalTax;
  
  return {
    grossIncome,
    totalReliefs,
    taxableIncome,
    totalTax,
    pcbDeducted,
    difference, // positive = refund, negative = need to pay
    status: difference > 0 ? 'refund' : difference < 0 ? 'payable' : 'balanced'
  };
};

export const estimateMonthlyRefund = (annualRefund) => {
  return Math.round(annualRefund / 12);
};

export const groupExpensesByCategory = (expenses) => {
  const grouped = {};
  expenses.forEach(exp => {
    if (!grouped[exp.category]) {
      grouped[exp.category] = [];
    }
    grouped[exp.category].push(exp);
  });
  return grouped;
};

export const calculateTotalByCategory = (expenses, category) => {
  return expenses
    .filter(exp => exp.category === category)
    .reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);
};

export const isCategoryLimitExceeded = (expenses, category, limit) => {
  if (!limit) return false;
  const total = calculateTotalByCategory(expenses, category);
  return total > limit;
};
