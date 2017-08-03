export class PrimeFactors {

  public static factor(num:number) :number[] {
    const primes:number[] = [];
    for (let candidate = 2; candidate <= num; candidate++) {
      for (; num % candidate === 0; num /= candidate) {
        primes.push(candidate); 
      }
    }
    return primes;
  }
}
