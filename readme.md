# which-transition-end-event
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

returns the browser transition end event name and caches it for future use

## table of contents
* [installation](#installation)
* [usage](#usage)
  * [default](#default)
  * [clear cache](#clear-cache)
* [license](#license)

## installation
```javascript
npm install dan-nl/which-transition-end-event
```

## usage
### default
```javascript
var whichTransitionEndEvent = require( 'which-transition-end-event' );
var elm = document.getElementById( 'my-elm' );

function eventHandler( evt ) {
  console.log( evt );
}

elm.addEventListener( whichTransitionEndEvent(), eventHandler );
```

### clear cache
```javascript
var whichTransitionEndEvent = require( 'which-transition-end-event' );
var elm = document.getElementById( 'my-elm' );

function eventHandler( evt ) {
  console.log( evt );
}

elm.addEventListener( whichTransitionEndEvent( true ), eventHandler );
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/which-transition-end-event/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/which-transition-end-event?branch=master
[david-dm-image]: https://david-dm.org/dan-nl/which-transition-end-event.svg
[david-dm-url]: https://david-dm.org/dan-nl/which-transition-end-event
[david-dm-dev-image]: https://david-dm.org/dan-nl/which-transition-end-event/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/which-transition-end-event?type=dev
[mit-license]: https://raw.githubusercontent.com/dan-nl/which-transition-end-event/master/license.txt
[npm-image]: https://img.shields.io/npm/v/which-transition-end-event.svg
[npm-url]: https://www.npmjs.com/package/which-transition-end-event
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/8e6a0633-11dd-4713-ad9f-a6f11a281993/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/8e6a0633-11dd-4713-ad9f-a6f11a281993
[travis-image]: https://travis-ci.org/dan-nl/which-transition-end-event.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/which-transition-end-event
