function map(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]));
  }
  return results;
}

function filter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    } else {
      delete array[i];
    }
  }
  return result;
}

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    } else {
      return false;
    }
  }
}

function some(array, callback) {
  let some = false;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      some = true;
      // Break out of the loop
      break;
    } else {
      some = false;
    }
  }
  return some;
}

function find(array, callback) {
  let found = "";
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      found = array[i];
      break;
    } else {
      found = undefined;
    }
  }
  return found;
}

function reduce(array, callback, accumulatorStart) {
  let i = 0;
  if (accumulatorStart == undefined) {
    accumulatorStart = array[0];
    i = 1;
  }

  let accumulator = accumulatorStart;

  for (; i < array.length; i++) {
    const item = array[i];
    accumulator = callback(accumulator, item, i);
  }

  return accumulator;
}

function flat(arr, d = 1) {
  //If d is higher than 0
  return d > 0
    ? arr.reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? flat(val, d - 1) : val),
        []
      )
    : arr.slice();
}
