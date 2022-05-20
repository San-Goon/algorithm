const fs = require('fs')
const input = fs.readFileSync('예제.txt').toString().split(' ')

let A = parseInt(input[0])
let B = parseInt(input[1])

if (A > B) {
    console.log('>')
} else if (A < B) {
    console.log('<')
} else {
    console.log('==')
}
