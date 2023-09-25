function sortStringAlphabetically(inputString) {
    // Convert the string to an array of characters, sort it, and join it back into a string
    return inputString.split('').sort().join('');
}

// Example usage:
const input = window.prompt("Enter the string to be reversed:");
const sortedString = sortStringAlphabetically(input);
window.alert(`Inputted String: ${input}, Sorted String: ${sortedString}`);
