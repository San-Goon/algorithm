const fs = require('fs')
const input = fs.readFileSync('예제.txt').toString().split(' ')

let H = parseInt(input[0])
let M = parseInt(input[1])

if (H == 0) {
    if (M >= 45) {
        console.log(H + ' ' + (M-45))
    } else {
        console.log(23 + ' ' + (M+15))
    }
} else {
    if (M >= 45) {
        console.log(H + ' ' + (M-45))
    } else {
        console.log((H-1) + ' ' + (M+15))
    }
}
