'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var React = _interopRequireWildcard(require('react'));

var bpfrpt_proptype_RowRendererParams =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        index: require('prop-types').number.isRequired,
        isScrolling: require('prop-types').bool.isRequired,
        isVisible: require('prop-types').bool.isRequired,
        key: require('prop-types').string.isRequired,
        parent: require('prop-types').object.isRequired,
        style: require('prop-types').object.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_RowRendererParams', {
    value: bpfrpt_proptype_RowRendererParams,
    configurable: true,
  });
var bpfrpt_proptype_RowRenderer =
  process.env.NODE_ENV === 'production' ? null : require('prop-types').func;
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_RowRenderer', {
    value: bpfrpt_proptype_RowRenderer,
    configurable: true,
  });
var bpfrpt_proptype_RenderedRows =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        overscanStartIndex: require('prop-types').number.isRequired,
        overscanStopIndex: require('prop-types').number.isRequired,
        startIndex: require('prop-types').number.isRequired,
        stopIndex: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_RenderedRows', {
    value: bpfrpt_proptype_RenderedRows,
    configurable: true,
  });
var bpfrpt_proptype_Scroll =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        clientHeight: require('prop-types').number.isRequired,
        scrollHeight: require('prop-types').number.isRequired,
        scrollTop: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_Scroll', {
    value: bpfrpt_proptype_Scroll,
    configurable: true,
  });
