'use strict';

const core = require('./core-9da6a938.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["apex-chart.cjs",[[0,"apex-chart",{"type":[1],"width":[8],"height":[8],"toolbar":[16],"stacked":[4],"stackType":[1,"stack-type"],"options":[1040],"series":[1040],"chartObj":[32],"updateOptions":[64]}]]]], options);
});