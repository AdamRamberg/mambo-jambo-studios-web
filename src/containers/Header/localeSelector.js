import React from 'react';
import { string } from 'prop-types';

import LocaleContext from '../../i18n/localeContext';

const Emoji = ({ locale }) =>
  locale === 'sv_SE' ? (
    <span role="img" aria-label="language">
      🇸🇪
    </span>
  ) : (
    <span role="img" aria-label="language">
      🇺🇸
    </span>
  );

Emoji.propTypes = {
  locale: string.isRequired,
};

const LocaleSelector = () => (
  <LocaleContext.Consumer>
    {({ locale, setLocale }) => (
      <button
        type="button"
        onClick={() => setLocale(locale === 'sv_SE' ? 'en_US' : 'sv_SE')}
      >
        <Emoji locale={locale} />
      </button>
    )}
  </LocaleContext.Consumer>
);

export default LocaleSelector;
