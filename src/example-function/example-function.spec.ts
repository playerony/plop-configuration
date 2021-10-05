import { exampleFunction } from './example-function.function';

describe('exampleFunction Function', () => {
  it('should import', () => {
    expect(typeof exampleFunction).toBe('function');
  });
});
