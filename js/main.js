'use strict'
const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const isValidCondition =  min < 0 || max < 0;
  return isValidCondition ? alert('Значения не могут быть отрицательны') : Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatingPoint = function (min, max, roundTo) {
  const isValidCondition = min < 0 || max < 0 || roundTo < 0;
  return isValidCondition ? alert('Значения не могут быть отрицательны') : (Math.random() * (max - min) + min).toFixed(roundTo);
}
