function animalCount(depth) {
    var animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
    } else if (depth <= 20) {
        animal = 10 * 50 + (depth - 10) * 100;
    } else {
        animal = 10 * 50 + 10 * 100 + (depth - 20) * 300;
    }
    return animal;
}
var result = animalCount(7);
console.log(result);