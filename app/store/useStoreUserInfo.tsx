import { create } from "zustand";

interface State {
  userName: string;
  age: number | null;
  setUserName: (name: string) => void;
}

export const useStoreUserInfo = create<State>((set) => ({
  userName: "",
  age: null,
  setUserName: (name) => {
    set({ userName: name });
  },
}));
