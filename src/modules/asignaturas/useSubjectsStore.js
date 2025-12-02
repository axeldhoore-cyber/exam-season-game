// File: src/modules/asignaturas/useSubjectsStore.js
import { create } from "zustand";

export const useSubjectsStore = create((set) => ({
  subjects: [],
  addSubject: (subject) =>
    set((state) => ({
      subjects: [...state.subjects, { id: Date.now(), ...subject }],
    })),
  removeSubject: (id) =>
    set((state) => ({
      subjects: state.subjects.filter((s) => s.id !== id),
    })),
}));
