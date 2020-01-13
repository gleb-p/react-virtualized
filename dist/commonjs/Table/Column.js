'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck'),
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn'),
);

var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf'),
);

var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inherits'),
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty'),
);

var _propTypes = _interopRequireDefault(require('prop-types'));

var React = _interopRequireWildcard(require('react'));

var _defaultHeaderRenderer = _interopRequireDefault(
  require('./defaultHeaderRenderer'),
);

var _defaultCellRenderer = _interopRequireDefault(
  require('./defaultCellRenderer'),
);

var _defaultCellDataGetter = _interopRequireDefault(
  require('./defaultCellDataGetter'),
);

var _SortDirection = _interopRequireDefault(require('./SortDirection'));

/**
 * Describes the header and cell contents of a table column.
 */
var Column =
  /*#__PURE__*/
  (function(_React$Component) {
    (0, _inherits2['default'])(Column, _React$Component);

    function Column() {
      (0, _classCallCheck2['default'])(this, Column);
      return (0, _possibleConstructorReturn2['default'])(
        this,
        (0, _getPrototypeOf2['default'])(Column).apply(this, arguments),
      );
    }

    return Column;
  })(React.Component);

exports['default'] = Column;
(0, _defineProperty2['default'])(Column, 'defaultProps', {
  cellDataGetter: _defaultCellDataGetter['default'],
  cellRenderer: _defaultCellRenderer['default'],
  defaultSortDirection: _SortDirection['default'].ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: _defaultHeaderRenderer['default'],
  style: {},
});
