function isPalindrome(s) {
  var nSpace = s.split(" ").join("");
  console.log(nSpace);
  var stringReverse = nSpace.split("").reverse().join("");
  console.log(stringReverse);
  return nSpace == stringReverse;
}

module.exports = isPalindrome;
console.log(isPalindrome('a man a plan a canal panama'));