// Huxflux returns an array of 7 unique integers
const huxflux = () => {
  // Set to contain unique integers
  const list = new Set();

  // Generate random integer between min and max (inclusive)
  const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Generate a list with a number of random integers between min and max (inclusive), either unordered or orderd (order = false/true)
  const genRandomInt = (num, min, max, order) => {
    do {
      const heltal = randomInt(min, max);
      list.add(heltal);
    } while (list.size < num);

    return order ? [...list].sort((a, b) => a - b) : [...list];
  };

  return genRandomInt(7, 1, 35, false);
};

export { huxflux };
