import { create } from "zustand";

interface ModalState {
  HelpModal: boolean;
  setHelpModal: () => void;
}

export const useHelpStateState = create<ModalState>((set) => ({
  HelpModal: false,
  setHelpModal: () => set((state) => ({ HelpModal: !state?.HelpModal })),
}));
