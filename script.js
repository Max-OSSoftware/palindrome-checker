document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;

    if (!inputText) {
        alert('Please input a value');
        return;
    }

    const formattedText = inputText.toLowerCase().replace(/[\W_]/g, '');
    const isPalindrome = formattedText === formattedText.split('').reverse().join('');

    document.getElementById('result').textContent = 
        inputText + ' is ' + (isPalindrome ? '' : 'not ') + 'a palindrome';
});
