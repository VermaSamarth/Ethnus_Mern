function reverseNumber(number) {
    // Convert the number to a string
    let numStr = number.toString();

    // Reverse the string
    let reversedStr = numStr.split('').reverse().join('');

    // Convert the reversed string back to a number
    let reversedNum = parseFloat(reversedStr);

    // Handle negative numbers
    if (number < 0) {
        reversedNum = -reversedNum;
    }

    return reversedNum;
}

// Example usage:
const originalNumber=window.prompt("Enter the number to be reversed: ");
const reversed = reverseNumber(originalNumber);
window.alert(`Original Number: ${originalNumber}, Reversed Number: ${reversed}`);