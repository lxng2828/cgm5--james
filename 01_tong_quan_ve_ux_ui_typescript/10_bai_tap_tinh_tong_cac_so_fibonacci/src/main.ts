function fibonacciRecursive(n: number): number {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
let sum: number = 0;
const numberOfElements: number = 10;
console.log(`Các số Fibonacci đầu tiên (${numberOfElements} số):`);
for (let i = 0; i < numberOfElements; i++) {
    const fibNumber = fibonacciRecursive(i);
    console.log(fibNumber);
    sum += fibNumber;
}
console.log(`\nTổng của ${numberOfElements} số Fibonacci đầu tiên là: ${sum}`);