const debug = require('debug');
const _ = require('lodash');
const faker = require('faker');
const algo = require('./algo/index');

const log = debug('Index');

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRandomArray(min, max){
  const rand = [];
  for (let i = 0; i < 10; i++) {
    rand.push(getRandomInteger(min, max));
  }
  return rand;
}

function getInputArray(type) {
  switch (type) {
    case 'duplicates': return [292, 254, 298, 276, 291, 271, 237, 200, 215, 269, 276, 200, 271];
    case 'unique': return [248, 241, 247, 295, 209, 255, 292, 237, 228, 230];

    default:
    case 'random': return getRandomArray(200, 300);
  }
}

const array = getInputArray('duplicates');

log(array);
log('-----------------------------------------------');
const result = algo.quicksort(array);
log('-----------------------------------------------');
log('RESULT: ');
log(result);
