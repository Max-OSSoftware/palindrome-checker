// Adding an event listener to the 'Check' button
document.getElementById('check-btn').addEventListener('click', function() {
   
    // Retrieving the value from the text input field
    const inputText = document.getElementById('text-input').value;

    // Check if the input field is empty
    if (!inputText) {
        // If empty, display an alert message
        alert('Please input a value');
        return; // Exit the function if no input is provided
    }

    // Formatting the input text
    // Convert to lower case and remove non-alphanumeric characters (including spaces and symbols)
    const formattedText = inputText.toLowerCase().replace(/[\W_]/g, '');

    // Check if the formatted text is a palindrome
    // Split the string into an array, reverse it, join it back to a string, and compare with the original formatted text
    const isPalindrome = formattedText === formattedText.split('').reverse().join('');

    // Displaying the result
    // If the text is a palindrome, 'isPalindrome' will be true and 'is not' won't be added to the string.
    // If not, 'is not' will be added, indicating it's not a palindrome.zapboy216
    document.getElementById('result').textContent = 
        inputText + ' is ' + (isPalindrome ? '' : 'not ') + 'a palindrome';
});
