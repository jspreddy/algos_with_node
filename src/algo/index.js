const debug = require('debug');
const log = debug('algo');

let array = [];

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

function quicksort(a) {
  array = Array.from(a);
  quicksort_internal(0, array.length - 1);
  return array;
}

function quicksort_internal(start, end) {
  if (start >= end) return;

  const pivotIndex = start;
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
    // TODO: if there are duplicates in the array, handle it.
    // if (array[i] === pivotElement && i < pivotIndex) {
    //   i++;
    //   log("++i: ", i);
    //   swap(i, pivotIndex);
    //   pivotIndex = i;
    // }
    // else if(array[j] === pivotElement && j > pivotIndex) {
    //   j--;
    //   log("--j: ", j);
    //   swap(pivotIndex, j);
    //   pivotIndex = j;
    // }

    while (array[i] <= pivotElement && i < j) {
      i++;
      log("++i: ", i);
    }

    while (array[j] > pivotElement) {
      j--;
      log("--j: ", j);
    }

    if(i<j) swap(i, j);
    log(array);
  }

  swap(start, j);

  log(array);
  quicksort_internal(start, j - 1);
  quicksort_internal(j+1, end);
}


module.exports = {
  quicksort
};
