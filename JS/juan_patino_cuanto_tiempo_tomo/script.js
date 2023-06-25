Number.prototype.isPrime = function() {
  if (this <= 1) {
    return false;
  }
  if (this <= 3) {
    return true;
  }
  if (this % 2 === 0 || this % 3 === 0) {
    return false;
  }
  const sqrtNum = Math.sqrt(this);
  let divisor = 5;
  while (divisor <= sqrtNum) {
    if (this % divisor === 0 || this % (divisor + 2) === 0) {
      return false;
    }
    divisor += 6;
  }
  return true;
}


const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//de 100.000
//1299709

//de 1.000.000
//15485863


