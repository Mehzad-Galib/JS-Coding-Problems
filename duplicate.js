let num = [78, 95, 42, 56, 99, 10, 100, 95];
let unique = [];

for (let i = 0; i < num.length; i++) {
    let element = num[i];
    let index = unique.indexOf(element);
    // difficult to understand this line, might review this later. It looks for the index of element, and if found none, it will push into the unique array
    if (index == -1) {
        unique.push(element);
    }
}
console.log(unique);