import { exampleHook } from './example-hook.function';

describe('exampleHook Function', () => {
  it('should import', () => {
    expect(typeof exampleHook).toBe('function');
  });
});
