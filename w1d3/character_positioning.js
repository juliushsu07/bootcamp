function countLetters(newStr){

  var noSpaces = newStr.toLowerCase().split(" ").join("");

  var letterCounts ={};

  for (i = 0 ; i <= noSpaces.length - 1 ; i++){
    var key = noSpaces[i];

    if(letterCounts[key]){
      letterCounts[key].push(i);
    }
    else {
      letterCounts[key] = [i];
    }
  }
  return letterCounts;
}

var result = countLetters("Lighthouse in the house");

console.log(result);


//letterCounts        object   { l : [0] , i = [1, 5] }

//key                 key        l , i

//letterCounts[key]   value      [0]  , [1, 5]
