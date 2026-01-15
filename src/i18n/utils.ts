import { ui, defaultLang, type Language, type UiKey } from './ui';

export const showDefaultLang = false;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: UiKey) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return !showDefaultLang && l === defaultLang ? cleanPath : `/${l}${cleanPath}`;
  }
}

export function getRouteFromUrl(url: URL) {
  const pathname = url.pathname;
  const parts = pathname.split('/');
  const lang = parts[1];

  if (lang in ui) {
    return `/${parts.slice(2).join('/')}`;
  }

  return pathname;
}
