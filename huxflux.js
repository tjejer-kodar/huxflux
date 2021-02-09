// Huxflux returns an array of 7 unique integers
const huxflux = () => {
  // Generate a random integer
  const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Set to contain unique integers
  let list = new Set();

  // Fill the set with 7 unique integers between 1 and 35
  do {
    let heltal = randomInt(1, 35);
    list.add(heltal);
  } while (list.size < 7);

  return [...list];
};

export { huxflux };
