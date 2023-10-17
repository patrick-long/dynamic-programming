const memoryStart = process.memoryUsage();
const heapStart = memoryStart.heapUsed;

export default function fib(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}

const start = performance.now();
fib(2);
fib(5);
fib(10);
fib(25);
fib(35);
const end = performance.now();

const memoryEnd = process.memoryUsage();
const heapEnd = memoryEnd.heapUsed;

const totalMemoryUsedInFile = (heapEnd - heapStart) / 1_000.0 + 'kB';

console.log('//////////// Fibonacci Memoized ////////////');
console.log(totalMemoryUsedInFile);
console.log(end - start + 'ms');
