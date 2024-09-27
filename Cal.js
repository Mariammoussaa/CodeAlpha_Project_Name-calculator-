
const display = document.getElementById("display");

function appendToDisplay(input) {
    if (isOperator(input) && isOperator(display.value.slice(-1))) {
        return;
    }
    display.value += input;
}

function clearDisplay(input){
    display.value = '';
}

function calculate(input){
    try {
        let result = eval(display.value); 
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result.toString();
        }    
    } catch (error) {
        display.value = 'Error';
    }
}
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

