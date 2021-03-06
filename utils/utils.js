/**
 * A linear interpolator for hex colors.
 *
 * Based on:
 * https://gist.github.com/rosszurowski/67f04465c424a9bc0dae
 *
 * @param {Number} a  (hex color start val)
 * @param {Number} b  (hex color end val)
 * @param {Number} amount  (the amount to fade from a to b)
 *
 * @example
 * // returns 0x7f7f7f
 * lerpColor(0x000000, 0xffffff, 0.5)
 *
 * @returns {Number}
 */
export const lerpColor = function (a, b, amount) {
  const ar = a >> 16,
    ag = (a >> 8) & 0xff,
    ab = a & 0xff,
    br = b >> 16,
    bg = (b >> 8) & 0xff,
    bb = b & 0xff,
    rr = ar + amount * (br - ar),
    rg = ag + amount * (bg - ag),
    rb = ab + amount * (bb - ab);

  return (rr << 16) + (rg << 8) + (rb | 0);
};

/**
 * A debounced function wrapper
 *
 * @param {Function} func  (function to execute when timeout is over)
 * @param {Number} timeout  (debouncer timeout in miliseconds. Default: 300)
 *
 * @example
 * const update = debounce(() => updateLocomotive());
 * window.addEventListener("resize", update);
 *
 * @returns {Function}
 */
export const debounce = function (func, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
