function isPalindrome(word) {
  // Write your algorithm here
  ("mom", "abba")
    word = word.toLowerCase();
    
    word = word.replace();
  
    return word === word.split('').reverse().join('');
  }

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
    // Convert the word to lowercase to handle case-insensitivity

    // Remove any non-alphanumeric characters from the word

    // Compare the original word with its reverse

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

  // Test cases
  console.log(isPalindrome("mom")); // Output: true
  console.log(isPalindrome("abba")); // Output: true
  console.log(isPalindrome("racecar")); // Output: false
