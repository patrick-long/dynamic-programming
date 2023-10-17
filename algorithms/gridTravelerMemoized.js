const memoryStart = process.memoryUsage();
const heapStart = memoryStart.heapUsed;

export default function gridTraveler(n, m, memo = {}) {
  const key = `${n},${m}`;

  if (key in memo) {
    return memo[key];
  }

  if (n === 1 && m === 1) {
    return 1;
  }

  if (n === 0 || m === 0) {
    return 0;
  }

  memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
  return memo[key];
}

const start = performance.now();
gridTraveler(1, 1);
gridTraveler(2, 3);
gridTraveler(3, 2);
gridTraveler(3, 3);
gridTraveler(14, 14);
const end = performance.now();

const memoryEnd = process.memoryUsage();
const heapEnd = memoryEnd.heapUsed;

const totalMemoryUsedInFile = (heapEnd - heapStart) / 1_000.0 + 'kB';

console.log('//////////// Grid Traveler Memoized ////////////');
console.log(totalMemoryUsedInFile);
console.log(end - start + 'ms');
