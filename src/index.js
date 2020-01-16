import /* codegen */ '../scripts/generate-prefix-map';

const ms = 0b001;
const moz = 0b010;
const webkit = 0b100;
const cache = {};

export const prefixProperty = prop => {
  if (cache[prop]) return cache[prop];
  return (cache[prop] = (msPrefixRe.test(prop) ? ms : 0)
    | (mozPrefixRe.test(prop) ? moz : 0)
    | (webkitPrefixRe.test(prop) ? webkit : 0));
};

export const prefixValue = (prop, value) => {
  if (
    (prop === 'position' && value === 'sticky') ||
    (prop === 'background-clip' && value === 'text')
  ) {
    return `-webkit-${value}, ${value}`;
  }

  return value;
};
