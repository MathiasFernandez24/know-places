import { create } from "zustand";

interface State {
  languageName: string;
  languageKey: string;
  theme: "white" | "dark";
  setLanguage: () => void;
}

export const useSettingsUserStore = create<State>((set) => ({
  languageName: "first",
  languageKey: "",
  theme: "dark",
  setLanguage: () => {
    set({ languageName: "IDIOMA" });
  },
}));
