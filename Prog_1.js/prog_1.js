class operation {
    addition(a, b) {
        let sum;
        sum = parseFloat(a) + parseFloat(b)
        console.log('Sum is: ' + sum)
    }
    subtraction(a, b) {
        let sub;
        sub = a - b
        console.log("Result is: " + sub)    
    }
    multiplication(a, b) {
        let mul;
        mul = a * b
        console.log("Result is: " + mul)
    }
    division(a, b) {
        let div;
        div = a / b
        console.log("Result is: " + div)
    }
}





var read = require('readline-sync')
console.log("1.Addition \n2.Substraction \n3.Multiplication \n4.Division")
let op = new operation()
option = read.question("Select the Option ")
switch (parseInt(option)) {
    case 1: console.log("Enter two number to add")
        let a = read.question()
        let b = read.question()
        op.addition(a, b)
        break
    case 2: console.log("Enter two number to subtract")
        let sub1 = read.question()
        let sub2 = read.question()
        op.subtraction(sub1, sub2)
        break
    case 3: console.log("Enter two number to multiplicate")
        let mul1 = read.question()
        let mul2 = read.question()
        op.multiplication(mul1, mul2)
        break
    case 4: console.log("Enter two number to divide")
        let div1 = read.question()
        let div2 = read.question()
        op.division(div1, div2)
        break;
    default: console.log("Syntax error");
        break;

}