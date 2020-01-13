'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var React = _interopRequireWildcard(require('react'));

var _ScalingCellSizeAndPositionManager = _interopRequireDefault(
  require('./utils/ScalingCellSizeAndPositionManager'),
);

var bpfrpt_proptype_CellPosition =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        columnIndex: require('prop-types').number.isRequired,
        rowIndex: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellPosition', {
    value: bpfrpt_proptype_CellPosition,
    configurable: true,
  });
var bpfrpt_proptype_CellRendererParams =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        columnIndex: require('prop-types').number.isRequired,
        isScrolling: require('prop-types').bool.isRequired,
        isVisible: require('prop-types').bool.isRequired,
        key: require('prop-types').string.isRequired,
        parent: require('prop-types').object.isRequired,
        rowIndex: require('prop-types').number.isRequired,
        style: require('prop-types').object.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellRendererParams', {
    value: bpfrpt_proptype_CellRendererParams,
    configurable: true,
  });
var bpfrpt_proptype_CellRenderer =
  process.env.NODE_ENV === 'production' ? null : require('prop-types').func;
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellRenderer', {
    value: bpfrpt_proptype_CellRenderer,
    configurable: true,
  });
var bpfrpt_proptype_CellCache =
  process.env.NODE_ENV === 'production'
    ? null
    : require('prop-types').objectOf(require('prop-types').node.isRequired);
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellCache', {
    value: bpfrpt_proptype_CellCache,
    configurable: true,
  });
var bpfrpt_proptype_StyleCache =
  process.env.NODE_ENV === 'production'
    ? null
    : require('prop-types').objectOf(require('prop-types').object.isRequired);
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_StyleCache', {
    value: bpfrpt_proptype_StyleCache,
    configurable: true,
  });
var bpfrpt_proptype_CellRangeRendererParams =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        cellCache: require('prop-types').objectOf(
          require('prop-types').node.isRequired,
        ).isRequired,
        cellRenderer: require('prop-types').func.isRequired,
        columnSizeAndPositionManager: function columnSizeAndPositionManager() {
          return (typeof _ScalingCellSizeAndPositionManager['default'] ===
          'function'
            ? require('prop-types').instanceOf(
                _ScalingCellSizeAndPositionManager['default'],
              ).isRequired
            : require('prop-types').any.isRequired
          ).apply(this, arguments);
        },
        columnStartIndex: require('prop-types').number.isRequired,
        columnStopIndex: require('prop-types').number.isRequired,
        deferredMeasurementCache: require('prop-types').object,
        horizontalOffsetAdjustment: require('prop-types').number.isRequired,
        isScrolling: require('prop-types').bool.isRequired,
        isScrollingOptOut: require('prop-types').bool.isRequired,
        parent: require('prop-types').object.isRequired,
        rowSizeAndPositionManager: function rowSizeAndPositionManager() {
          return (typeof _ScalingCellSizeAndPositionManager['default'] ===
          'function'
            ? require('prop-types').instanceOf(
                _ScalingCellSizeAndPositionManager['default'],
              ).isRequired
            : require('prop-types').any.isRequired
          ).apply(this, arguments);
        },
        rowStartIndex: require('prop-types').number.isRequired,
        rowStopIndex: require('prop-types').number.isRequired,
        scrollLeft: require('prop-types').number.isRequired,
        scrollTop: require('prop-types').number.isRequired,
        styleCache: require('prop-types').objectOf(
          require('prop-types').object.isRequired,
        ).isRequired,
        verticalOffsetAdjustment: require('prop-types').number.isRequired,
        visibleColumnIndices: require('prop-types').object.isRequired,
        visibleRowIndices: require('prop-types').object.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellRangeRendererParams', {
    value: bpfrpt_proptype_CellRangeRendererParams,
    configurable: true,
  });
var bpfrpt_proptype_CellRangeRenderer =
  process.env.NODE_ENV === 'production' ? null : require('prop-types').func;
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellRangeRenderer', {
    value: bpfrpt_proptype_CellRangeRenderer,
    configurable: true,
  });
var bpfrpt_proptype_CellSizeGetter =
  process.env.NODE_ENV === 'production' ? null : require('prop-types').func;
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellSizeGetter', {
    value: bpfrpt_proptype_CellSizeGetter,
    configurable: true,
  });
var bpfrpt_proptype_CellSize =
  process.env.NODE_ENV === 'production'
    ? null
    : require('prop-types').oneOfType([
        require('prop-types').func,
        require('prop-types').number,
      ]);
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellSize', {
    value: bpfrpt_proptype_CellSize,
    configurable: true,
  });
var bpfrpt_proptype_NoContentRenderer =
  process.env.NODE_ENV === 'production' ? null : require('prop-types').func;
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_NoContentRenderer', {
    value: bpfrpt_proptype_NoContentRenderer,
    configurable: true,
  });
var bpfrpt_proptype_Scroll =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        clientHeight: require('prop-types').number.isRequired,
        clientWidth: require('prop-types').number.isRequired,
        scrollHeight: require('prop-types').number.isRequired,
        scrollLeft: require('prop-types').number.isRequired,
        scrollTop: require('prop-types').number.isRequired,
        scrollWidth: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_Scroll', {
    value: bpfrpt_proptype_Scroll,
    configurable: true,
  });
var bpfrpt_proptype_ScrollbarPresenceChange =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        horizontal: require('prop-types').bool.isRequired,
        vertical: require('prop-types').bool.isRequired,
        size: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_ScrollbarPresenceChange', {
    value: bpfrpt_proptype_ScrollbarPresenceChange,
    configurable: true,
  });
var bpfrpt_proptype_RenderedSection =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        columnOverscanStartIndex: require('prop-types').number.isRequired,
        columnOverscanStopIndex: require('prop-types').number.isRequired,
        columnStartIndex: require('prop-types').number.isRequired,
        columnStopIndex: require('prop-types').number.isRequired,
        rowOverscanStartIndex: require('prop-types').number.isRequired,
        rowOverscanStopIndex: require('prop-types').number.isRequired,
        rowStartIndex: require('prop-types').number.isRequired,
        rowStopIndex: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_RenderedSection', {
    value: bpfrpt_proptype_RenderedSection,
    configurable: true,
  });
var bpfrpt_proptype_OverscanIndicesGetterParams =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        // One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
        direction: require('prop-types').oneOf(['horizontal', 'vertical'])
          .isRequired,
        // One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
        scrollDirection: require('prop-types').oneOf([-1, 1]).isRequired,
        // Number of rows or columns in the current axis
        cellCount: require('prop-types').number.isRequired,
        // Maximum number of cells to over-render in either direction
        overscanCellsCount: require('prop-types').number.isRequired,
        // Begin of range of visible cells
        startIndex: require('prop-types').number.isRequired,
        // End of range of visible cells
        stopIndex: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(
    exports,
    'bpfrpt_proptype_OverscanIndicesGetterParams',
    {
      value: bpfrpt_proptype_OverscanIndicesGetterParams,
      configurable: true,
    },
  );
var bpfrpt_proptype_OverscanIndices =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        overscanStartIndex: require('prop-types').number.isRequired,
        overscanStopIndex: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_OverscanIndices', {
    value: bpfrpt_proptype_OverscanIndices,
    configurable: true,
  });
var bpfrpt_proptype_OverscanIndicesGetter =
  process.env.NODE_ENV === 'production' ? null : require('prop-types').func;
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_OverscanIndicesGetter', {
    value: bpfrpt_proptype_OverscanIndicesGetter,
    configurable: true,
  });
var bpfrpt_proptype_Alignment =
  process.env.NODE_ENV === 'production'
    ? null
    : require('prop-types').oneOf(['auto', 'end', 'start', 'center']);
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_Alignment', {
    value: bpfrpt_proptype_Alignment,
    configurable: true,
  });
var bpfrpt_proptype_VisibleCellRange =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        start: require('prop-types').number,
        stop: require('prop-types').number,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_VisibleCellRange', {
    value: bpfrpt_proptype_VisibleCellRange,
    configurable: true,
  });
