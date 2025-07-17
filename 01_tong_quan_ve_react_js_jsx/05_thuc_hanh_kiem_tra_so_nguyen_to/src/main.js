function isPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (var i = 5; i * i <= num; i = i + 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    sum += number;
}
console.log("T\u1ED5ng c\u1EE7a m\u1EA3ng numbers2 l\u00E0: ".concat(sum));
