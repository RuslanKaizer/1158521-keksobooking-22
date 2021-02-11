import {getRandomNumber, getRandomFloatingPoint, getRandomArrayElement, getUniqueArray} from './util.js';

const IMAGE_NUMBER = {
  MIN: 1,
  MAX: 8,
};

const TITLES = [
  'The Pavilion',
  'North + Vine',
  'Elevate',
  'The Residences at NewCity',
];

const PRICE_NUMBER = {
  MIN: 1,
  MAX: 100000,
};

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'This room provide clean, comfortable lodging with full amenities, to make sure your stay is relaxing and stress-free.',
  'A brand-new, elegantly designed, luxury apartment building located on a tree-lined street.',
  'The Residences at NewCity is the perfect place to call your new home!',
  'Suitable for singles, couple and travellers, you will not regret choosing this place.',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const NUMBERS = {
  MIN: 1,
  MAX: 100,
};

const COORDINATE_X = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const COORDINATE_Y = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const ROUND_FOR_LOCATIONS = 5;

const ARRAY_LENGTH = 10;

const generateOffer = () => {
  const xLocation = getRandomFloatingPoint(COORDINATE_X.MIN, COORDINATE_X.MAX, ROUND_FOR_LOCATIONS);
  const yLocation = getRandomFloatingPoint(COORDINATE_Y.MIN, COORDINATE_Y.MAX, ROUND_FOR_LOCATIONS);
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(IMAGE_NUMBER.MIN,IMAGE_NUMBER.MAX) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: xLocation + ', ' + yLocation,
      price: getRandomNumber(PRICE_NUMBER.MIN, PRICE_NUMBER.MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(NUMBERS.MIN, NUMBERS.MAX),
      guests: getRandomNumber(NUMBERS.MIN, NUMBERS.MAX),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getUniqueArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getUniqueArray(PHOTOS),
    },
    location: {
      x: xLocation,
      y: yLocation,
    },
  }
};

const offers = new Array(ARRAY_LENGTH).fill(null).map(generateOffer);

export {offers};
