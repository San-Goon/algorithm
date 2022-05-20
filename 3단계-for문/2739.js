const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

let A = parseInt(input[0])

for (let i = 1; i < 10; i++) {
    console.log(A + ' * ' + i + ' = ' + (A*i))
}
