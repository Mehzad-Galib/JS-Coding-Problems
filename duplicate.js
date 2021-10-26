let num = [78, 95, 42, 56, 99, 10, 100, 95, 77, 56, 91, 44, 10, 10];
let unique = [];
let fraud = [];

for (let i = 0; i < num.length; i++) {
    let element = num[i];
    let index = unique.indexOf(element);
    // difficult to understand this line, might review this later. It looks for the index of element, and if found none, it will push into the unique array
    if (index == -1) {
        unique.push(element);
    } else {
        fraud.push(element);
    }
}
console.log(unique);
console.log(fraud);