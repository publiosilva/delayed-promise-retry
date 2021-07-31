function exponentialDelay(retryNumber = 0) {
  const delayMs = 2 ** retryNumber * 1000;
  const randomSum = delayMs * 0.2 * Math.random();

  return delayMs + randomSum;
}

module.exports = {
  exponentialDelay,
}