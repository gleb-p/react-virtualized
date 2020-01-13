import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import PropTypes from 'prop-types';
import * as React from 'react';
import defaultHeaderRenderer from './defaultHeaderRenderer';
import defaultCellRenderer from './defaultCellRenderer';
import defaultCellDataGetter from './defaultCellDataGetter';
import SortDirection from './SortDirection';
/**
 * Describes the header and cell contents of a table column.
 */

var Column =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Column, _React$Component);

    function Column() {
      _classCallCheck(this, Column);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Column).apply(this, arguments),
      );
    }

    return Column;
  })(React.Component);

_defineProperty(Column, 'defaultProps', {
  cellDataGetter: defaultCellDataGetter,
  cellRenderer: defaultCellRenderer,
  defaultSortDirection: SortDirection.ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: defaultHeaderRenderer,
  style: {},
});

export {Column as default};
