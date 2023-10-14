const memoryStart = process.memoryUsage();
const heapStart = memoryStart.heapUsed;

const myObj = { test: 'test1', test2: { id: 1, val: 20 }, ids: [1, 2, 3] };

const memoryEnd = process.memoryUsage();
const heapEnd = memoryEnd.heapUsed;

const totalMemoryUsedInFile = (heapEnd - heapStart) / 1_000.0 + 'kB';

console.log('heap start:', heapStart);
console.log('heap end:', heapEnd);
console.log('total memory used in file:', totalMemoryUsedInFile);
