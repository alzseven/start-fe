function random(val1, val2) {
  if (val2 === undefined) {
    return val1;
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(val1) || isNaN(val2)) {
    return -1;
  }
  const big = val1 > val2 ? val1 : val2;
  const small = val1 <= val2 ? val1 : val2;
  return parseInt(Math.random() * (big - small), 10) + parseInt(small, 10);
}

export default random;
