let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split(' ');

let A = (parseInt(input[0]));
let B = (parseInt(input[1]));

console.log(A+B);
