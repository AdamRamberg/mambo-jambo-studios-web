import React from 'react';
import { string } from 'prop-types';
import { LocaleConsumer } from 'fbt-easy-setup';

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
  <LocaleConsumer>
    {({ locale, setLocale }) => (
      <button
        type="button"
        onClick={() => setLocale(locale === 'sv_SE' ? 'en_US' : 'sv_SE')}
      >
        <Emoji locale={locale} />
      </button>
    )}
  </LocaleConsumer>
);

export default LocaleSelector;
