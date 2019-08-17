import React, { useState, useEffect } from 'react';
import { object, string, func, node } from 'prop-types';
import { IntlViewerContext } from 'fbt';
import { getLocaleFromStorage, setLocaleToStorage } from './storage';
import LocaleContext from './localeContext';

const LocaleProvider = ({ children, locales, defaultLocale, rerender }) => {
  const [localeState, setLocaleState] = useState(
    getLocaleFromStorage() || defaultLocale,
  );

  const getBcp47ByLocale = loc => locales[loc] && locales[loc].bcp47;

  const getLocaleByBcp47 = bcp47 => {
    let toRet;
    const localeKeys = Object.keys(locales);
    localeKeys.forEach(key => {
      if (getBcp47ByLocale(key) === bcp47) {
        toRet = key;
      }
    });
    return toRet;
  };

  const isRtl = loc => !(locales[loc] && !locales[loc].rtl);

  const setLocale = input => {
    const localeExists =
      input && (getLocaleByBcp47(input) || getBcp47ByLocale(input));
    const providedLocale = localeExists
      ? getLocaleByBcp47(input) || input
      : 'en_US';
    const providedBcp47 = localeExists
      ? getBcp47ByLocale(input) || input
      : 'en-US';

    IntlViewerContext.locale = providedLocale;
    document.documentElement.lang = providedBcp47;
    document.body.className = isRtl(providedLocale) ? 'rtl' : 'ltr';
    setLocaleToStorage(providedLocale);
    setLocaleState(providedLocale);
  };

  const setLocaleAndRerender = input => {
    setLocale(input);
    rerender();
  };

  useEffect(() => {
    setLocale(getLocaleFromStorage() || defaultLocale);
  }, []);

  return (
    <LocaleContext.Provider
      value={{ locale: localeState, setLocale: setLocaleAndRerender }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: node.isRequired,
  locales: object.isRequired,
  defaultLocale: string.isRequired,
  rerender: func,
};

LocaleProvider.defaultProps = {
  rerender: () => window.location.reload(),
};

export default LocaleProvider;
