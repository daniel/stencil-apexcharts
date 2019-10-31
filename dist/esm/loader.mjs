import { a as patchEsm, b as bootstrapLazy } from './core-87ad6187.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["apex-chart",[[0,"apex-chart",{"type":[1],"width":[8],"height":[8],"toolbar":[16],"stacked":[4],"stackType":[1,"stack-type"],"options":[1040],"series":[1040],"chartObj":[32],"updateOptions":[64]}]]]], options);
  });
};

export { defineCustomElements };
