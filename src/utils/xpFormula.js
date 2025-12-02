// File: src/utils/xpFormula.js
export function calculateXP({ cycles, focusMinutes, streak, difficulty }) {
  const baseXP = cycles * 50;
  const focusXP = Math.floor(focusMinutes * 1.2);
  const streakXP = streak * 10;

  const difficultyMultiplier = {
    easy: 1,
    normal: 1.3,
    hard: 1.6,
    insane: 2,
  }[difficulty] || 1;

  return Math.floor((baseXP + focusXP + streakXP) * difficultyMultiplier);
}
