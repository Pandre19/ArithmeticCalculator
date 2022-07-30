var operand_first = document.mycalculator.input_a;
var operand_second = document.mycalculator.input_b;
var number_one, number_two;

function doOperation(el) {
    if(!isInputComplete()) {
        document.mycalculator.output.value = "FILL OUT BOTH OPERANDS";
        return;
    } else if(!areAllNumbers()) {
        document.mycalculator.output.value = "USE NUMBERS";
        return;
    }
    var op = el.name;
    if(op === "div" && number_two === 0) {
        document.mycalculator.output.value = "NO DIVISION BY 0";
        return;
    }

    displayAnswer(op);
}

function clearAll() {
    document.mycalculator.reset();
}

function isInputComplete() {
    if(operand_second.value === null || operand_first.value === null
        || operand_second.value === "" || operand_first.value === "") {
        
        return false;
    }
    return true;
}

function areAllNumbers() {
    number_one = parseFloat(operand_first.value);
    number_two = parseFloat(operand_second.value);
    
    if(Number.isNaN(number_one) || Number.isNaN(number_two)) {
        return false;
    }
    return true;
}

function displayAnswer(operand) {
    var answer;
    var op;
    switch(operand) {
        case "add":
            answer = number_one + number_two;
            op ="+";
            break;
        case "mul":
            answer = number_one * number_two;
            op = "x";
            break;
        case "div":
            answer = number_one / number_two;
            op = "/";
            break;
    }

    document.mycalculator.output.value =  operand_first.value + " " + op + " " + operand_second.value + " = " + answer.toFixed(2);

}