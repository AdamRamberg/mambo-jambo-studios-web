import init from './init';
import translations from '../translatedFbts.json';
import locales from './appLocales';

init({ translations, locales, defaultLocale: navigator.language });
