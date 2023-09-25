
function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
    } else {
        var result;
        if (operation === 'multiply') {
            result = num1 * num2;
        } else if (operation === 'divide') {
            if (num2 === 0) {
                result = 'Division by zero is not allowed.';
            } else {
                result = num1 / num2;
            }
        }
        document.getElementById('result').textContent = 'Result: ' + result;
    }
}