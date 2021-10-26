function largestNumber(arr) {
    var largest = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];

        }
    }
    return largest;
}
var anArray = [75, 98, 35, 25, 65, 91, 42];
console.log(largestNumber(anArray));

// method 2 

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