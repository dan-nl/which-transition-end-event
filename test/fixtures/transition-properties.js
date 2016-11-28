'use strict';

/**
 * maps browser names with their transition property names
 */
var transition_properties = {
  'Chrome': 'WebkitTransition',
  'Google Chrome': 'transition',
  'Mozilla': 'MozTransition',
  'Opera': 'OTransition'
};

module.exports = transition_properties;
