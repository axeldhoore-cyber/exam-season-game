import { ATTRIBUTES, BASE_VALUES, GROWTH_RATE } from "./attributesConfig";

export function calculateAttributes(level) {
  const attrs = {};

  ATTRIBUTES.forEach((attr) => {
    attrs[attr] = Math.floor(
      BASE_VALUES[attr] + level * GROWTH_RATE[attr] * 10
    );
  });

  return attrs;
}
