'use strict'
const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min && max < 0 || min >= max){
    alert('Значение не может быть меньше нуля и отрицательно')
  }else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
console.log(getRandomNumber(0,20));

const getRandomFloatingPoint = function (min, max, roundTo) {
  if (min && max && roundTo < 0 || min >= max) {
    alert('Значение не может быть меньше нуля и отрицательно')
  }else {
    return (Math.random() * (max - min) + min).toFixed(roundTo)
  }
}
