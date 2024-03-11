import { I18n } from "i18n-js";
import fr from "./French.json";
import en from "./English.json";
import es from "./Spanish.json";

export const enabledLanguages = {
  english: { key: "en", value: "English" },
  spanish: { key: "es", value: "Spanish" },
  french: { key: "fr", value: "French" },
} as const;

export const i18n = new I18n({ es, en, fr });
// i18n.fallbacks = true;
// i18n.locale = "es";
// i18n.defaultLocale = "es";

type DefaultLocale = typeof en;
type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

//suggests json keys
type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

//translate function
export function i18nTranslate(key: TxKeyPath, options?: i18n.TranslateOptions) {
  return i18n.t(key, options);
}

type LanguageValue =
  (typeof enabledLanguages)[keyof typeof enabledLanguages]["value"];
export const changeAppLanguage = (language: LanguageValue) => {
  for (const [key, lang] of Object.entries(enabledLanguages)) {
    if (lang.value === language) {
      i18n.locale = lang.key;
    }
  }
};
