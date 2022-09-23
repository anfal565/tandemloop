let x = require('readline-sync')
let limit = x.question('Enter the limit of numbers')
var arr = []

for (let i = 0; i < limit; i++) {
    arr[i] = x.question()

}

for (i = 1; i <= 9; i++) {
    let count = 0;

    for (j = 0; j < limit; j++) {
        if (arr[j] % i == 0) {
            count++
        }

    }

    console.log(i + ":" + count);

}