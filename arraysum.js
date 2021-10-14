function anArray(num) {
    var total = num[0];
    for (var i = 1; i < num.length; i++) {
        var summation = num[i];
        total = total + summation;
    }
    return total;
}
var num = [78, 95, 42, 56, 99, 10, 100];
var result = anArray(num);
console.log(result);