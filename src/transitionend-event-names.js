/* eslint sort-keys: off */

'use strict';

/**
 * maps style transition properties with their event names
 */
var transitions = {
  'transition': 'transitionend',
  'MozTransition': 'transitionend',
  'OTransition': 'oTransitionEnd',
  'WebkitTransition': 'webkitTransitionEnd'
};

module.exports = transitions;
