const fs = require('fs')
const input = fs.readFileSync('예제.txt').toString().split(' ')

let A = parseInt(input[0])
let B = A - (2541 - 1998)

console.log(B)
