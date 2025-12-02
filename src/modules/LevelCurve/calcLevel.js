// File: src/modules/LevelCurve/calcLevel.js
export const xpRequired = (lvl) => Math.floor(50 * Math.pow(lvl, 1.4));

export const calcLevel = (totalXP) => {
  let lvl = 1;
  while (totalXP >= xpRequired(lvl)) {
    totalXP -= xpRequired(lvl);
    lvl++;
  }
  return lvl;
};
