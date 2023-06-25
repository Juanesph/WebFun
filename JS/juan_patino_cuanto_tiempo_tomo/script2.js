//Fibonacci
// recursive
const start = performance.now();
function rFib(n) {
  if (n < 2) {
    return n;
  }
  return rFib(n - 1) + rFib(n - 2);
}
rFib(20);
console.log(`This recursive ${performance.now() - start} milliseconds to run`);

// iterative
const start1 = performance.now();
function iFib(n) {
  const vals = [0, 1];
  while (vals.length - 1 < n) {
    let len = vals.length;
    vals.push(vals[len - 1] + vals[len - 2]);
  }
  return vals[n];
}
iFib(20);
console.log(`This iterative ${performance.now() - start1} milliseconds to run`);

//iterativa es más rápida