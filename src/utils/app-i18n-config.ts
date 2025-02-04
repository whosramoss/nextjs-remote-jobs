export enum Lang {
  english = "en",
  portuguese = 'pt'
}

interface LanguageOption {
  locale: string;
  path: string;
};

interface LanguageValue {
  lang: Lang;
  value: string;
};

export interface LocaleProps {
  params: { lang: Locale };
}

export const i18n = {
  defaultLocale: Lang.english,
  locales: [Lang.english, Lang.portuguese],
};

type Locale = (typeof i18n)["locales"][number];

export default class AppI18nConfig {
  public currentLanguage = i18n.defaultLocale;
  constructor(newLanguage: Lang) {
    this.currentLanguage = newLanguage
  }

  static getLanguageOptions(): LanguageOption[] {
    return i18n.locales.map((locale) => ({
      locale,
      path: locale === i18n.defaultLocale ? "/" : `/${locale}/`,
    }));
  }

  static isUrlLocalized(url: string): boolean {
    return i18n.locales.some((locale) => url.startsWith(`/${locale}/`) || url === `/${locale}`);
  }

  static setUrlByDefaultLocale(url: string): string {
    return `/${i18n.defaultLocale}${url}`;
  }

  static setLanguagesParams(): { lang: Locale }[] {
    return i18n.locales.map((locale) => ({ lang: locale }));
  }

  static isValidLocale(locale: string): boolean {
    return i18n.locales.includes(locale as Locale);
  }

  static getLocaleFromUrl(url: string): Locale | null {
    const matchedLocale = i18n.locales.find(
      (v) => url.startsWith(`/${v}/`) || url === `/${v}`
    );
    return matchedLocale || null;
  }


  public getTextByLocale(languages: LanguageValue[]): string {
    const validLangs = Object.values(Lang);

    languages.forEach(({ lang }) => {
      if (!validLangs.includes(lang)) {
        throw new Error(`Invalid Lang: ${lang}.`);
      }
    });

    return languages.find(({ lang }) => this.currentLanguage === lang)?.value || '';
  };
}
