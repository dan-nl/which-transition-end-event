/* eslint no-underscore-dangle: off */

'use strict';

/**
 * module dependencies
 */
var browsers = require( './browsers' );
var transitionend_event_names = require( '../../src/transitionend-event-names' );
var transition_properties = require( './transition-properties' );

/**
 * module variables
 */
var _browser = 'Chrome';

/**
 * @param {string} tag_name
 * @constructor
 */
function Element( tag_name ) {
  var transition_property = transition_properties[ _browser ];

  this.style = {};
  this.tagName = tag_name;

  if ( transition_property ) {
    this.style[ transition_property ] = transitionend_event_names[ transition_property ];
  }
}

/**
 * @returns {{createElement: createElement, setBrowser: setBrowser}}
 */
function document() {
  /**
   * @param {string} tag_name
   * @returns {Element}
   */
  function createElement( tag_name ) {
    return new Element( tag_name );
  }

  /**
   * @param {string} browser
   * @returns {undefined}
   */
  function setBrowser( browser ) {
    _browser = browsers[ browser ] || _browser;
  }

  return {
    createElement: createElement,
    setBrowser: setBrowser
  };
}

module.exports = document;
