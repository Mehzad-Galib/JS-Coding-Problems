var a = 5;
var b = 7;
// console.log("before swap, a =", a, "b =", b);
var temp = a;
a = b;
b = temp;
// console.log("after swap, a =", a, "b =", b);

var x = 6;
var y = 7;
x = x + y;
y = x - y;
x = x - y;

var p = 5;
var q = 9;
[p, q] = [q, p]
console.log("after swap, p =", p, "q =", q);
// Real way to swap things