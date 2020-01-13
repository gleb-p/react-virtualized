var bpfrpt_proptype_Index =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        index: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_Index', {
    value: bpfrpt_proptype_Index,
    configurable: true,
  });
var bpfrpt_proptype_PositionInfo =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        x: require('prop-types').number.isRequired,
        y: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_PositionInfo', {
    value: bpfrpt_proptype_PositionInfo,
    configurable: true,
  });
var bpfrpt_proptype_ScrollPosition =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        scrollLeft: require('prop-types').number.isRequired,
        scrollTop: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_ScrollPosition', {
    value: bpfrpt_proptype_ScrollPosition,
    configurable: true,
  });
var bpfrpt_proptype_SizeAndPositionInfo =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        height: require('prop-types').number.isRequired,
        width: require('prop-types').number.isRequired,
        x: require('prop-types').number.isRequired,
        y: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_SizeAndPositionInfo', {
    value: bpfrpt_proptype_SizeAndPositionInfo,
    configurable: true,
  });
var bpfrpt_proptype_SizeInfo =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        height: require('prop-types').number.isRequired,
        width: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_SizeInfo', {
    value: bpfrpt_proptype_SizeInfo,
    configurable: true,
  });
