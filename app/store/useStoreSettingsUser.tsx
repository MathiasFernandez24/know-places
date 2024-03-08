import { create } from "zustand";

interface State {
  languageName: string;
  languageKey: string;
  theme: "white" | "dark";
  setLanguage: () => void;
  testNumber: number;
  moreTestNumber: () => void;
  lessTestNumber: () => void;
}

export const useStoreSettingsUser = create<State>((set) => ({
  testNumber: 0,
  lessTestNumber: () => set((state) => ({ testNumber: state.testNumber - 1 })),
  moreTestNumber: () => set((state) => ({ testNumber: state.testNumber + 1 })),
  languageName: "first",
  languageKey: "",
  theme: "dark",
  setLanguage: () => {
    set({ languageName: "IDIOMA" });
  },
}));
