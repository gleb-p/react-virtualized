import * as React from 'react';
import SortIndicator from './SortIndicator';

/**
 * Default table header renderer.
 */
export default function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
    label = _ref.label,
    sortBy = _ref.sortBy,
    sortDirection = _ref.sortDirection;
  var showSortIndicator = sortBy === dataKey;
  var children = [
    React.createElement(
      'span',
      {
        className: 'ReactVirtualized__Table__headerTruncatedText',
        key: 'label',
        title: typeof label === 'string' ? label : null,
      },
      label,
    ),
  ];

  if (showSortIndicator) {
    children.push(
      React.createElement(SortIndicator, {
        key: 'SortIndicator',
        sortDirection: sortDirection,
      }),
    );
  }

  return children;
}
defaultHeaderRenderer.propTypes =
  process.env.NODE_ENV === 'production'
    ? null
    : require('./types').bpfrpt_proptype_HeaderRendererParams ===
      require('prop-types').any
    ? {}
    : require('./types').bpfrpt_proptype_HeaderRendererParams;
