// Factorial with Recursive Method
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
var result = factorial(1);
console.log(result);

// Factorial with Iterative Method
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact = fact * i;

        }
        return fact;
    }
}
let result = factorial(5);
console.log(result);