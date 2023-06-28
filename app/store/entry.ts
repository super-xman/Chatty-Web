import { create } from "zustand";

export type Mode = "login" | "register" | "forget";

interface AccessControlStore {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const useEntryStore = create<AccessControlStore>((set) => ({
  mode: "login",
  setMode(mode: Mode) {
    set({ mode });
  },
}));
