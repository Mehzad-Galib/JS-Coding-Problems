function palindromeChecker(stra) {
    str = stra.toLowerCase();
    if (str.includes(' ')) // checking space in the string(if the string is a sentence)
    {
        let spaceLess = str.replace(' ', ''); // replacing whitespace
        let reverse = spaceLess.split('').reverse().join(''); //reversing and joining
        if (spaceLess == reverse) {
            return "This is a Palindrome";
        } else {
            return "This is not a Palindrome";
        }
    } else { // if the string has only one word
        let reverse = str.split('').reverse().join('');
        if (str == reverse) {
            return "This is a Palindrome";
        } else {
            return "This is not a Palindrome";
        }
    }
}
let result = palindromeChecker("Nurses Run"); // sentence and capitalization problem solved
console.log(result);