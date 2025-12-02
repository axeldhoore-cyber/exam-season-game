import { create } from "zustand";

export const useDailiesStore = create((set) => ({
  dailies: [],
  addDaily: (daily) =>
    set((state) => ({ dailies: [...state.dailies, daily] })),
  toggleDaily: (id) =>
    set((state) => ({
      dailies: state.dailies.map((d) =>
        d.id === id ? { ...d, completed: !d.completed } : d
      ),
    })),
  resetDailies: () =>
    set((state) => ({
      dailies: state.dailies.map((d) => ({ ...d, completed: false })),
    })),
}));
