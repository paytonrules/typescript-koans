import { PrimeFactors } from '../src/prime-factors';

test('1 has no prime factors', () => {
  expect(PrimeFactors.factor(1)).toEqual([]);
});
