let calculator = {
        read,
        sum,
        mul
        };
function read (){
    calculator.value1 = Number(prompt("enter value a"));
    calculator.value2 = Number(prompt("enter value b"));
}
function sum (){
    return calculator.value1 + calculator.value2;
}
function mul () {
    return calculator.value1 * calculator.value2;
}

calculator.read();
alert("sum = " + calculator.sum());
alert("mul = " + calculator.mul());