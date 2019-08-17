const storage = window && window.localStorage;

const CURRENT_LOCALE_STORAGE_KEY = '___locale___';

export const getLocaleFromStorage = () =>
  storage.getItem(CURRENT_LOCALE_STORAGE_KEY);

export const setLocaleToStorage = locale =>
  storage.setItem(CURRENT_LOCALE_STORAGE_KEY, locale);
