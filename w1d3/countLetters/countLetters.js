function countLetters(newStr){

  var noSpaces = newStr.toLowerCase().split(" ").join("");

  var letterCounts ={};

  for (i = 0 ; i <= noSpaces.length - 1 ; i++){
    var key = noSpaces[i];

    if(letterCounts[key]){
      letterCounts[key]++;
    }
    else {
      letterCounts[key] = 1;
    }
  }
  return letterCounts;
}

var result = countLetters("Lighthouse in the house");

console.log(result);


//letterCounts        object   { L : 1 , i = 2 }

//key                 key        L , i

//letterCounts[key]   value      1 , 2