const start = performance.now();
const arr = [10, 30, 1, 25, 2, 12, 33, 50, 55, 3];

arr.sort(function(a, b){return a-b});
console.log(arr);
console.log(`This took ${performance.now() - start} milliseconds to run`);

const array1 = [1, 30, 4, 21, 100000];
array1.sort(function(a, b){return a-b});
console.log(array1);