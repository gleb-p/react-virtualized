var bpfrpt_proptype_CellMeasureCache =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        hasFixedWidth: require('prop-types').func.isRequired,
        hasFixedHeight: require('prop-types').func.isRequired,
        has: require('prop-types').func.isRequired,
        set: require('prop-types').func.isRequired,
        getHeight: require('prop-types').func.isRequired,
        getWidth: require('prop-types').func.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellMeasureCache', {
    value: bpfrpt_proptype_CellMeasureCache,
    configurable: true,
  });
