var bpfrpt_proptype_AnimationTimeoutId =
  process.env.NODE_ENV === 'production'
    ? null
    : {
        id: require('prop-types').number.isRequired,
      };
if (!(process.env.NODE_ENV === 'production') && typeof exports !== 'undefined')
  Object.defineProperty(exports, 'bpfrpt_proptype_AnimationTimeoutId', {
    value: bpfrpt_proptype_AnimationTimeoutId,
    configurable: true,
  });
export var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return window.cancelAnimationFrame(frame.id);
};
/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */

export var requestAnimationTimeout = function requestAnimationTimeout(
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
