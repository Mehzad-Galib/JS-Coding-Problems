// // In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. f.e: 
// // highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


// Method 1: Math.max function
// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//   }

//   console.log(highAndLow('2 3 6 -9 8'))

const highAndLow = (numbers) => {
    arr = numbers.split(' ').map(n=> parseInt(n)).sort();
    return arr[arr.length - 1] + ' ' + arr[0];
}

//   console.log(highAndLow('2 3 6 -9 8'))