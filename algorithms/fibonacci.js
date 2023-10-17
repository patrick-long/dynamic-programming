const memoryStart = process.memoryUsage();
const heapStart = memoryStart.heapUsed;

export default function fib(n) {
  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
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

console.log('//////////// Fibonacci ////////////');
console.log(totalMemoryUsedInFile);
console.log(end - start + 'ms');
