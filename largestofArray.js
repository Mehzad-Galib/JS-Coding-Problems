function largestArray(num) {
    var largest = num[0];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > largest) {
            largest = num[i];
        }
    }
    return largest
}
var num = [78, 95, 42, 56, 99, 10, 36];
var result = largestArray(num);
console.log(result);