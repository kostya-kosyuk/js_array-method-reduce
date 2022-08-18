'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prevValue = arguments.length === 1 ? this[0] : initialValue;
    const startIndex = prevValue === this[0] ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      prevValue = callback(prevValue, this[i], i, this);
    }

    return prevValue;
  };
}

module.exports = applyCustomReduce;
