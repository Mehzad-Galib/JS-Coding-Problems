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