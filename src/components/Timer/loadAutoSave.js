// File: src/components/Timer/loadAutoSave.js
export function loadAutoSave() {
  const saved = localStorage.getItem("autosave_timer");
  if (!saved) return "";
  try {
    return JSON.parse(saved);
  } catch {
    return "";
  }
}
