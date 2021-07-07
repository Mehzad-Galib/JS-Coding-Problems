var word = "I am a good Person and I don't know Yoga";
var count = 0;

for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (char == "a") {
        count++;
    }


}
console.log(count);