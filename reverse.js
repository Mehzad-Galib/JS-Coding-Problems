// Reverse Method 1(Text)
function reverseText(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse; // the reverse process. Might overview later
    }
    return reverse;
}
var statement = "Hello alien vai brothers."
var forAlien = reverseText(statement);
console.log(forAlien);

//Reverse Method 2(Text)
var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join("");
console.log(reverse)

// Reversing A Long Number
function reverseNum(n) {
    let result = n.toString();
    let rev = result.split("").reverse().join("");
    return rev;
}
let something = 12345;
let some = reverseNum(something);
console.log(some);

//Reversing a number by iterating