let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
    }
}

let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}
