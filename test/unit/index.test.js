'use strict';

/**
 * module dependencies
 */
var test = require( 'tap' ).test;
var whichTransitionEndEvent = require( '../../src' );

/**
 * globals
 */
global.document = require( '../fixtures/document' )();

test( 'whichTransitionEndEvent(): Chrome', function ( t ) {
  var transitionend;

  document.setBrowser( 'Chrome' );
  transitionend = whichTransitionEndEvent( true );
  t.equal( transitionend, 'webkitTransitionEnd', 'should return webkitTransitionEnd' );

  t.end();
} );

test( 'whichTransitionEndEvent(): Google Chrome', function ( t ) {
  var transitionend;

  document.setBrowser( 'Google Chrome' );
  transitionend = whichTransitionEndEvent( true );
  t.equal( transitionend, 'transitionend', 'should return transitionend' );

  t.end();
} );

test( 'whichTransitionEndEvent(): Mozilla', function ( t ) {
  var transitionend;

  document.setBrowser( 'Mozilla' );
  transitionend = whichTransitionEndEvent( true );
  t.equal( transitionend, 'transitionend', 'should return transitionend' );

  t.end();
} );

test( 'whichTransitionEndEvent(): Opera', function ( t ) {
  var transitionend;

  document.setBrowser( 'Opera' );
  transitionend = whichTransitionEndEvent( true );
  t.equal( transitionend, 'oTransitionEnd', 'should return oTransitionEnd' );

  t.end();
} );

test( 'whichTransitionEndEvent(): no cleared cache', function ( t ) {
  var transitionend;

  document.setBrowser( 'Mozilla' );
  transitionend = whichTransitionEndEvent();
  t.equal( transitionend, 'oTransitionEnd', 'should return oTransitionEnd' );

  t.end();
} );
