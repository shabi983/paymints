let memory = 0;
let display = document.getElementById('result104');

// Insert numbers and operators
function insert(value) {
    display.value += value;
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

// Clear current entry
function clearEntry() {
    display.value = "";
}

// Clear all entries
function allClear() {
    display.value = "";
    memory = 0;
}

// Memory functions
function memoryAdd() {
    memory += parseFloat(display.value) || 0;
}

function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    display.value = memory;
}

// Trigonometric functions
function sin() {
    display.value = Math.sin(parseFloat(display.value) * (Math.PI / 180)).toFixed(4);
}

function cos() {
    display.value = Math.cos(parseFloat(display.value) * (Math.PI / 180)).toFixed(4);
}

function tan() {
    display.value = Math.tan(parseFloat(display.value) * (Math.PI / 180)).toFixed(4);
}

// Advanced functions
function squareRoot() {
    display.value = Math.sqrt(parseFloat(display.value)).toFixed(4);
}

function power() {
    display.value += '**';
}

// Scientific notation
function scientificNotation() {
    display.value = Number(display.value).toExponential();
}

// Toggle sign
function toggleSign() {
    display.value = parseFloat(display.value) * -1;
}

// Keyboard functionality
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Check for number keys
    if (!isNaN(key) || key === '.') {
        insert(key);
    }

    // Check for basic operators
    if (['+', '-', '*', '/'].includes(key)) {
        insert(key);
    }

    // Enter key for calculating the result
    if (key === 'Enter') {
        calculate();
    }

    // Backspace for clearing the last entry
    if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }

    // Clear display on 'C' key press
    if (key.toUpperCase() === 'C') {
        clearEntry();
    }

    // All-clear on 'Escape' key press
    if (key === 'Escape') {
        allClear();
    }

    // Memory functions with key combinations
    if (key === 'm') {
        memoryAdd();
    } else if (key === 'n') {
        memorySubtract();
    } else if (key === 'r') {
        memoryRecall();
    } else if (key === 'k') {
        memoryClear();
    }

    // Advanced functions using custom keys
    if (key === 's') squareRoot();
    if (key === '^') power();
    if (key === 't') tan();
    if (key === 'g') sin();
    if (key === 'c') cos();
});

// Prevents the default Enter key action to avoid form submission
document.querySelector('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});
