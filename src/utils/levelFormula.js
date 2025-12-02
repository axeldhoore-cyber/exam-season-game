// File: src/utils/levelFormula.js
export function calculateLevel(totalXP) {
  const level = Math.floor(Math.pow(totalXP / 100, 0.5));
  const nextLevelXP = Math.pow(level + 1, 2) * 100;
  const currentLevelXP = Math.pow(level, 2) * 100;
  const progress = ((totalXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

  return {
    level,
    progress: Math.min(Math.max(progress, 0), 100),
    currentLevelXP,
    nextLevelXP
  };
}
