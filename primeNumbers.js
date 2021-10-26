function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return "Not a Prime Number";
        }


    }
    return "Is prime Number";

}
const result = isPrime(53);
console.log(result);