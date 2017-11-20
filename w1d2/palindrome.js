function isPalindrome(str) {
  var noSpaces = str.split(" ").join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;
  var noSpacesAndCap = noSpaces.toUpperCase();

  for (var i = 0; i <= mid; i++) {
    if (noSpacesAndCap[i] !== noSpacesAndCap[last - i]){
      return false
    }
  }
  return true;
}

//Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);

