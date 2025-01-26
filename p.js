function generatePassword() {
  
    // Get the password length from the input field
    
    const length = document.getElementById('length').value;
    
    // Check if the user wants uppercase letters, numbers, or symbols
    
    const includeUpperCase = document.getElementById('includeUpperCase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    
    // Define the character sets
    
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_-+=<>?';
    
    // Start with lowercase letters as the base set of characters
    
    let characters = lowercaseLetters;
    
    // Add the other character sets if selected by the user
    
    if (includeUpperCase) characters += uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    
    // Create an empty string for the password
    
    let password = '';
    
    // Randomly pick characters from the selected character sets
    
    for (let i = 0; i < length; i++) {
    
        // Get a random index from the characters string
    
        const randomIndex = Math.floor(Math.random() * characters.length);
    
        // Add the character at the random index to the password
    
        password += characters.charAt(randomIndex);
    }
    
    // Display the generated password in the input field
    
    document.getElementById('password').value = password;
}

