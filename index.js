const delays = require('./delays');
const { sleep } = require('./utils');

async function delayedPromiseRetry(fn, retries, retryDelay = 0, retryCount = 0) {
  try {
    const result = await fn();

    return result;
  } catch (error) {
    if (retries > 0) {
      await sleep(typeof retryDelay === 'function' ? retryDelay(retryCount) : retryDelay);

      return delayedPromiseRetry(fn, retries - 1, retryDelay, retryCount + 1);
    }

    throw error;
  }
}

module.exports = { ...delays, delayedPromiseRetry };
