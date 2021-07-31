const { exponentialDelay } = require('../delays');

describe('delays', () => {
  describe('exponential delay', () => {
    it('should return the correct value in milliseconds', () => {
      const delayMs = exponentialDelay(2);
  
      expect(delayMs >= 4000 && delayMs < 8000).toBeTruthy();
    });

    it('should return the correct value in milliseconds when retry number is undefined', () => {
      const delayMs = exponentialDelay();
  
      expect(delayMs >= 1000 && delayMs < 2000).toBeTruthy();
    });
  });
});
