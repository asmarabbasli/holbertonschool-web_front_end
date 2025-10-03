function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

const startTime = performance.now();
const primeCount = countPrimeNumbers();
const endTime = performance.now();

console.log(`Prime numbers from 2 to 100: ${primeCount}`);
console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);