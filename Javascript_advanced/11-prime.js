function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

function measureExecutionTime() {
    const startTime = performance.now();

    let executions = 0;

    function run() {
        countPrimeNumbers(); 
        executions++;

        if (executions < 100) {
            setTimeout(run, 0);  
        } else {
            const endTime = performance.now();
            console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
        }
    }

    run();
}

measureExecutionTime();