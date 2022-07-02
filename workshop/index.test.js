// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform the first index of each array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

test("map() should transform all indexes of each array using the fn argument", () => {
  const result = map([1, 2, 3, 4], (x) => x + 1);
  equal(result[0], 2);
  equal(result[1], 3);
  equal(result[2], 4);
  equal(result[3], 5);
});

test("map() should return an array of the same length that was given", () => {
  const result = map([1], (x) => x * 3);
  equal(result.length, 1);
});

test("map() should return an array ", () => {
  const result = map([1], (x) => x * 3);
  equal(Array.isArray(result), true);
});

// testing filter()

test("filter() should return an array", () => {
  const result = filter([1, 2], (x) => x > 1);
  equal(Array.isArray(result), true);
});

test("filter() returns an array with each index that is true", () => {
  const array = [1, 2, 3, 4];
  const result = filter(array, (x) => x > 1);
  equal(result[0], 2);
  equal(result[1], 3);
  equal(result[2], 4);
});

// testing every()

test("every() should return true if all elements passes the test", () => {
  const result = every([10, 20], (x) => x > 9);
  equal(result, true);
});

test("every() should return false if one element doesn't pass the test", () => {
  const result = every([10, 20], (x) => x > 15);
  equal(result, false);
});
