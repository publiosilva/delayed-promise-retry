const { expect } = require('@jest/globals');
const { delayedPromiseRetry } = require('../index');

describe('delayed promise retry', () => {
  it('should throw an error if the attempts end', async () => {
    const fakeError = new Error('any_message');
    const promise = delayedPromiseRetry(
      () => {
        throw fakeError;
      },
      3,
      1000,
    );

    await expect(promise).rejects.toThrow(fakeError);
  });

  it('should call retry delay function', async () => {
    const retryDelay = jest.fn();
    
    const promise = delayedPromiseRetry(
      () => {
        throw new Error('any_message');
      },
      1,
      retryDelay,
    );

    await expect(promise).rejects.toThrow();
    expect(retryDelay).toBeCalledWith(0);
  });

  it('should return the value of the original function', async () => {
    const result = await delayedPromiseRetry(
      () => 'any_result',
      3,
    );

    expect(result).toBe('any_result');
  });
});