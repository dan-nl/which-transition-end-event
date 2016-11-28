/* eslint no-prototype-builtins: off */

'use strict';

/**
 * module variables
 */
var transitionend_event_name;
var transitionend_event_names = require( './transitionend-event-names' );

/**
 * @link https://davidwalsh.name/css-animation-callback
 *
 * @param {boolean} clear_cache
 * @returns {string|undefined}
 */
module.exports = function whichTransitionEndEvent( clear_cache ) {
  var t;
  var elm;

  if ( !clear_cache && transitionend_event_name ) {
    return transitionend_event_name;
  }

  elm = document.createElement( 'fakeelement' );

  for ( t in transitionend_event_names ) {
    if ( transitionend_event_names.hasOwnProperty( t ) ) {
      if ( typeof elm.style[ t ] !== 'undefined' ) {
        transitionend_event_name = transitionend_event_names[ t ];
        break;
      }
    }
  }

  return transitionend_event_name;
};
