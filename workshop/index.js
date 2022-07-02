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
