/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();
  if (str1.length !== str2.length) {
    console.log("not an anagram");
    return;
  }

  let arr = new Array(26).fill(0);
  for (let i = 0; i < str1.length; i++) {
    arr[str1[i] - "a"]++;
  }

  for (let i = 0; i < str2.length; i++) {
    arr[str2[i] - "a"]--;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      console.log("not an anagram");
      return;
    }
  }
  console.log("anagram");
}
isAnagram("hello", "hello!");

/*
function isAnagram(str1, str2) {
  // Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
      return false;
  }

  // Helper function to sort characters in a string
  function sortString(str) {
      return str.toLowerCase().split('').sort().join('');
  }

  // Sort and compare the sorted strings
  return sortString(str1) === sortString(str2);
}

module.exports = isAnagram;
*/
