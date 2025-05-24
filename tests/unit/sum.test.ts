import { describe, expect, it } from 'vitest';
import { sum } from './sum';

describe('sum test', () => {
  it('The sum of two numbers', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
