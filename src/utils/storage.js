// src/utils/storage.js

const STORAGE_KEYS = {
  WIZARD_DATA: 'taxTracker_wizardData',
  EXPENSES: 'taxTracker_expenses',
  USER_PROFILE: 'taxTracker_userProfile',
  YEAR: 'taxTracker_year'
};

export const saveWizardData = (data) => {
  localStorage.setItem(STORAGE_KEYS.WIZARD_DATA, JSON.stringify(data));
};

export const getWizardData = () => {
  const data = localStorage.getItem(STORAGE_KEYS.WIZARD_DATA);
  return data ? JSON.parse(data) : null;
};

export const saveExpenses = (expenses) => {
  localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(expenses));
};

export const getExpenses = () => {
  const data = localStorage.getItem(STORAGE_KEYS.EXPENSES);
  return data ? JSON.parse(data) : [];
};

export const addExpense = (expense) => {
  const expenses = getExpenses();
  const newExpense = {
    ...expense,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  expenses.push(newExpense);
  saveExpenses(expenses);
  return newExpense;
};

export const deleteExpense = (id) => {
  const expenses = getExpenses();
  const filtered = expenses.filter(exp => exp.id !== id);
  saveExpenses(filtered);
};

export const updateExpense = (id, updates) => {
  const expenses = getExpenses();
  const index = expenses.findIndex(exp => exp.id === id);
  if (index > -1) {
    expenses[index] = { ...expenses[index], ...updates };
    saveExpenses(expenses);
  }
};

export const saveUserProfile = (profile) => {
  localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
};

export const getUserProfile = () => {
  const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
  return data ? JSON.parse(data) : null;
};

export const setCurrentYear = (year) => {
  localStorage.setItem(STORAGE_KEYS.YEAR, JSON.stringify(year));
};

export const getCurrentYear = () => {
  const data = localStorage.getItem(STORAGE_KEYS.YEAR);
  return data ? JSON.parse(data) : new Date().getFullYear();
};

export const clearAllData = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};
