let x = require('readline-sync')

let a = x.question('Enter a number: ')

let count = 0
a % 2 == 0 ? a = a - 1 : a - a

console.log('number is the:')

for (let i = 1; i < a * 2; i++) {
    if (i % 2 != 0 && count <= a) {
        console.log(1);
        count++;
    }
}