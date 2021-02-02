'use strict'
const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return min && max < 0 || min >= max ? alert('Значения не могут быть равны, и отрицательны') : Math.floor(Math.random() * (max - min + 1)) + min  ;
}

const getRandomFloatingPoint = function (min, max, roundTo) {
    return min && max && roundTo < 0 || min >= max ? alert('Значения не могут быть равны, и отрицательны') : (Math.random() * (max - min) + min).toFixed(roundTo);
}
