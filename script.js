function firstNonRepeatedChar(str) {
 // Write your code here
	
    if (!str) {
        // Return null if the input string is empty
        return null;
    }

    // Create an object to store character frequencies
    const charFrequency = {};

    // Iterate through the string to count character frequencies
    for (const char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (const char of str) {
        if (charFrequency[char] === 1) {
            return char; // Found the first non-repeated character
        }
    }

    // If all characters are repeated, return null
    return null;

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
