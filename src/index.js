'use strict';

export const sort = (originArray, options) => {
  const opts = Object.assign({
    isWhiteKey: 'isWhite',
    isRedKey: 'isRed',
    isBlueKey: 'isBlue'
  }, options);

  if (!Array.isArray(originArray)) {
    throw new TypeError(`"originArray" must be an array`);
  }

  const copiedArray = originArray.slice();

  let begin = 0;
  let current = begin;
  let end = copiedArray.length - 1;

  const swap = (i, j) => {
    let tmp = copiedArray[i];
    copiedArray[i] = copiedArray[j];
    copiedArray[j] = tmp;
  };

  const [isWhite, isRed, isBlue] = ['isWhite', 'isRed', 'isBlue'].map(key => {
    return ele => {
      if (!ele) {
        return false;
      }
      const f = ele[opts[key + 'Key']];
      if ('function' === typeof f) {
        return f.call(ele);
      } else {
        return f;
      }
    };
  });

  while (current !== end) {
    if (isRed(copiedArray[current])) {
      swap(begin, current);
      begin += 1;
      current += 1;
    } else if (isBlue(copiedArray[current])) {
      swap(current, end);
      end -= 1;
    } else if (isWhite(copiedArray[current])) {
      current += 1;
    } else {
      throw new Error(`"${copiedArray[current]}" should be red/white/blue`);
    }
  }
  return copiedArray;
};