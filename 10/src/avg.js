function avg(...args) {
  const params = Array.isArray(args[0]) ? [...args[0]] : args;
  let sum = 0;
  let numberCnt = 0;
  for (let i = 0; i < params.length; i += 1) {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(params[i]) === false) {
      sum += params[i];
      numberCnt += 1;
    }
  }
  return sum / numberCnt;
}

export default avg;
