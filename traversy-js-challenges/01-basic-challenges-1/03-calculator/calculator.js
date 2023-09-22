function calculator(num1, num2, opr) {
    let result;
    //num1 and num2 must be number
    if (typeof(num1) === "number" && typeof(num2) === "number" && typeof(opr) === "string") {

        switch(opr) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2
                break;
            default:
                throw new Error ("Invalid operator");
        }

    } else {
        throw new Error ("Invalid input");

    }

    return result;
}

module.exports = calculator;
