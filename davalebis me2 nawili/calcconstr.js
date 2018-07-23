"use strict";
window.onload = function () {
    


    function Calculator() {   
        let methods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b
        };
       
        this.calculate = function (str) {
            let split = str.split(' '),
                a = Number(split[0]),
                op = split[1],
                b = Number(split[2]);

            // if (!methods[op] || isNaN(a) || isNaN(b))
            //     return NaN;
            return methods[op](a, b);
        };

        this.addMethod = function (name, func) {
            methods[name] = func;
        };
    }
    
    let calc = new Calculator();

    alert(calc.calculate("3 + 7")); // 10

    let powerCalc = new Calculator();
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    alert(result); // 8
}