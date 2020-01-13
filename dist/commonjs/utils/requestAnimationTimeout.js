'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.requestAnimationTimeout = exports.cancelAnimationTimeout = void 0;

//import {caf, raf} from './animationFrame';
var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return window.cancelAnimationFrame(frame.id);
};
/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */

exports.cancelAnimationTimeout = cancelAnimationTimeout;

var requestAnimationTimeout = function requestAnimationTimeout(
  callback,
  delay,
) {
  var start; // wait for end of processing current event handler, because event handler may be long

  Promise.resolve().then(function() {
    start = Date.now();
  });

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = window.requestAnimationFrame(timeout);
    }
  };

  var frame = {
    id: window.requestAnimationFrame(timeout),
  };
  return frame;
};

exports.requestAnimationTimeout = requestAnimationTimeout;
