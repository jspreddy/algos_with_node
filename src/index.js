const debug = require('debug');
const _ = require('lodash');
const faker = require('faker');

const log = debug('quicksort');

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

const array = getInputArray('unique');

log(array);
log('-----------------------------------------------');

function swap(i, j) {
  log({
    swap: {
      i,j,
      array_i: array[i],
      array_j: array[j],
    }
  });
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function quicksort_wrapper(a) {
  array = a;
  quicksort(0, array.length - 1);
  return array;
}

function quicksort(start, end) {
  const pivotIndex = _.random(start, end);
  const pivotElement = array[pivotIndex];

  const arrayChunkForLogging = array.slice(start, end + 1);
  log("-----------");
  log({
    functionCall: `quicksort(${start},${end})`,
    workingOn: arrayChunkForLogging,
    pivotElement,
  });

  let i = start;
  let j = end;

  while (i < j) {
    while (array[i] < pivotElement) {
      i++;
      log("++i: ", i);
    }

    while (array[j] > pivotElement) {
      j--;
      log("--j: ", j);
    }

    // TODO: if there are duplicates in the array, handle it.
    // if (array[i] === pivotElement && i != j) {
    //   i++;
    //   log("++i: ", i);
    //   swap(i, j);
    // }
    // if(array[j] === pivotElement && i != j) {
    //   j--;
    //   log("--j: ", j);
    //   swap(i, j);
    // }

    swap(i, j);
    log(array);
  }

  log(array);
  if(i > start) quicksort(start, i - 1);
  if(j < end) quicksort(i+1, end);
}


quicksort(0, array.length-1);
log('-----------------------------------------------');
log('RESULT: ');
log(array);
