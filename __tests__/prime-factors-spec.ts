import { PrimeFactors } from '../src/prime-factors';

test('1 has no prime factors', () => {
  expect(PrimeFactors.factor(1)).toEqual([]);
});

test('2 has a prime factor of 2', () => {
  expect(PrimeFactors.factor(2)).toEqual([2]);
});

test('3 returns itself as a prime factor', () => {
  expect(PrimeFactors.factor(3)).toEqual([3]);
});

test('4 returns 2, 2', () => {
  expect(PrimeFactors.factor(4)).toEqual([2, 2]);
});

test('6 returns 3, 2', () => {
  expect(PrimeFactors.factor(6)).toEqual([2, 3]);
});

test('8 returns 2, 2, 2', () => {
  expect(PrimeFactors.factor(8)).toEqual([2, 2, 2]);
});

test('9 returns 3, 3', () => {
  expect(PrimeFactors.factor(9)).toEqual([3, 3]);
});