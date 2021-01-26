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
  let highestNumRep = 0;
  let mostUsedChar = '';

  for (let char of str) {
    characterCount[char] ? characterCount[char]++ : (characterCount[char] = 1);
  }
  // maxChar('hello')
  // characterCount = {
  //   'h': 1,
  //   'e': 1,
  //   'l': 2,
  //   'o': 1
  // }

  for (let key in characterCount) {
    if (characterCount[key] > highestNumRep) {
      highestNumRep = characterCount[key];
      mostUsedChar = key;
    }
  }
  return mostUsedChar;
}

module.exports = maxChar;
