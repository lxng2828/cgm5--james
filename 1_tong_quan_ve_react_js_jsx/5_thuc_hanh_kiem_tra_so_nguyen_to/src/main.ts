function isPrimeNumber(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= num; i = i + 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

let numbers: number[] = [1, 2, 3, 4, 5];
let sum = 0;

for (const number of numbers) {
    sum += number;
}
console.log(`Tổng của mảng numbers2 là: ${sum}`);