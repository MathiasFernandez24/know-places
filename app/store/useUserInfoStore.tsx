import { create } from "zustand";

interface State {
  userName: string;
  age: number | null;
  setUserName: (name: string) => void;
}

export const useUserInfoStore = create<State>((set) => ({
  userName: "",
  age: null,
  setUserName: (name) => {
    set({ userName: name });
  },
}));
