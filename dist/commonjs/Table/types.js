'use strict';

var bpfrpt_proptype_CellDataGetterParams =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        columnData: require('prop-types').any,
        dataKey: require('prop-types').string.isRequired,
        rowData: function rowData(props, propName, componentName) {
          if (!Object.prototype.hasOwnProperty.call(props, propName)) {
            throw new Error(
              'Prop `'
                .concat(
                  propName,
                  "` has type 'any' or 'mixed', but was not provided to `",
                )
                .concat(componentName, '`. Pass undefined or any other value.'),
            );
          }
        },
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellDataGetterParams', {
    value: bpfrpt_proptype_CellDataGetterParams,
    configurable: true,
  });
var bpfrpt_proptype_CellRendererParams =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        cellData: require('prop-types').any,
        columnData: require('prop-types').any,
        dataKey: require('prop-types').string.isRequired,
        rowData: function rowData(props, propName, componentName) {
          if (!Object.prototype.hasOwnProperty.call(props, propName)) {
            throw new Error(
              'Prop `'
                .concat(
                  propName,
                  "` has type 'any' or 'mixed', but was not provided to `",
                )
                .concat(componentName, '`. Pass undefined or any other value.'),
            );
          }
        },
        rowIndex: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_CellRendererParams', {
    value: bpfrpt_proptype_CellRendererParams,
    configurable: true,
  });
var bpfrpt_proptype_HeaderRowRendererParams =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        className: require('prop-types').string.isRequired,
        columns: require('prop-types').arrayOf(function(
          props,
          propName,
          componentName,
        ) {
          if (!Object.prototype.hasOwnProperty.call(props, propName)) {
            throw new Error(
              'Prop `'
                .concat(
                  propName,
                  "` has type 'any' or 'mixed', but was not provided to `",
                )
                .concat(componentName, '`. Pass undefined or any other value.'),
            );
          }
        }).isRequired,
        style: function style(props, propName, componentName) {
          if (!Object.prototype.hasOwnProperty.call(props, propName)) {
            throw new Error(
              'Prop `'
                .concat(
                  propName,
                  "` has type 'any' or 'mixed', but was not provided to `",
                )
                .concat(componentName, '`. Pass undefined or any other value.'),
            );
          }
        },
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_HeaderRowRendererParams', {
    value: bpfrpt_proptype_HeaderRowRendererParams,
    configurable: true,
  });
var bpfrpt_proptype_HeaderRendererParams =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        columnData: require('prop-types').any,
        dataKey: require('prop-types').string.isRequired,
        disableSort: require('prop-types').bool,
        label: require('prop-types').any,
        sortBy: require('prop-types').string,
        sortDirection: require('prop-types').string,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_HeaderRendererParams', {
    value: bpfrpt_proptype_HeaderRendererParams,
    configurable: true,
  });
var bpfrpt_proptype_RowRendererParams =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        className: require('prop-types').string.isRequired,
        columns: require('prop-types').arrayOf(function(
          props,
          propName,
          componentName,
        ) {
          if (!Object.prototype.hasOwnProperty.call(props, propName)) {
            throw new Error(
              'Prop `'
                .concat(
                  propName,
                  "` has type 'any' or 'mixed', but was not provided to `",
                )
                .concat(componentName, '`. Pass undefined or any other value.'),
            );
          }
        }).isRequired,
        index: require('prop-types').number.isRequired,
        isScrolling: require('prop-types').bool.isRequired,
        onRowClick: require('prop-types').func,
        onRowDoubleClick: require('prop-types').func,
        onRowMouseOver: require('prop-types').func,
        onRowMouseOut: require('prop-types').func,
        rowData: function rowData(props, propName, componentName) {
          if (!Object.prototype.hasOwnProperty.call(props, propName)) {
            throw new Error(
              'Prop `'
                .concat(
                  propName,
                  "` has type 'any' or 'mixed', but was not provided to `",
                )
                .concat(componentName, '`. Pass undefined or any other value.'),
            );
          }
        },
        style: function style(props, propName, componentName) {
          if (!Object.prototype.hasOwnProperty.call(props, propName)) {
            throw new Error(
              'Prop `'
                .concat(
                  propName,
                  "` has type 'any' or 'mixed', but was not provided to `",
                )
                .concat(componentName, '`. Pass undefined or any other value.'),
            );
          }
        },
        key: require('prop-types').string.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_RowRendererParams', {
    value: bpfrpt_proptype_RowRendererParams,
    configurable: true,
  });
