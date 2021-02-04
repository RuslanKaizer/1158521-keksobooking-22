'use strict'
const getRandomNumber = function (min, max) {
  const isValidCondition =  min < 0 || max < 0;
  if (isValidCondition) {
    alert('Значения не могут быть отрицательны');
    return;
  }
  if (max < min) {
    let buffer = max;
    max = min;
    min = buffer;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatingPoint = function (min, max, roundTo) {
  const isValidCondition = min < 0 || max < 0 || roundTo < 0;
  if (isValidCondition) {
    alert('Значения не могут быть отрицательны');
    return;
  }
  if (min > max){
    let buffer = max;
    max = min;
    min = buffer;
  }
  if (roundTo > 5) {
    roundTo = 5;
  }
  return min + ((Math.floor(((Math.random() * (max - min + 1))) * 10 ** roundTo)) / (10 ** roundTo));
}
