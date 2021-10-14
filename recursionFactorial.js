function factorialOf(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorialOf(n - 1);
        // Recursion called to calculate the factorial
    }
}
var result = factorialOf(5);
console.log(result);