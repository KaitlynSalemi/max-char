// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// other common similar questions
// What is the most common character in the string
// Does string A have the same characters as sting B (is it an anagram?)
// Does the given string have any repeated characters in it?

function maxChar(str) {
  const characterCount = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    characterCount[char] ? characterCount[char]++ : (characterCount[char] = 1);
  }

  for (let char in characterCount) {
    if (characterCount[char] > max) {
      max = characterCount[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
