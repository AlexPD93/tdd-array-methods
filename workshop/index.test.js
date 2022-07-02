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
