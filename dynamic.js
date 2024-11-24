// Corrected appendDisplay function
function appendDisplay(value) {
    const display = document.getElementById('display');  // Select the display input
    display.value += value;  // Append the value to the current display
}

// Corrected clearDisplay function
function clearDisplay() {
    document.getElementById('display').value = '';  // Clear the display input
}

// Corrected calculate function
function calculate() {
    const display = document.getElementById('display');  // Select the display input
    try {
        // Replace custom symbols with valid JS operators and calculate the result
        display.value = eval(display.value.replace('x', '*').replace('÷', '/'));
    } catch (error) {
        display.value = 'Error';  // Handle any errors during evaluation
    }
}
