import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  languageName: string;
  languageKey: string;
  theme: "white" | "dark";
  setLanguage: () => void;
  testNumber: number;
  moreTestNumber: () => void;
  lessTestNumber: () => void;
}

export const useStoreSettingsUser = create<State>()(
  persist(
    (set, get) => ({
      testNumber: 0,
      lessTestNumber: () => set({ testNumber: get().testNumber - 1 }),
      moreTestNumber: () => set({ testNumber: get().testNumber + 1 }),
      languageName: "first",
      languageKey: "",
      theme: "dark",
      setLanguage: () => {
        set({ languageName: "IDIOMA" });
      },
    }),
    {
      name: "testMathi-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage),
      // storage: () => AsyncStorage, // Add this here!
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
