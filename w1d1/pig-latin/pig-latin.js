var args = process.argv.slice(2);

function piglatin(array){
    var newString = '';
    var firstLetter = array[0];
    for(var i = 1 ; i <= array.length - 1; i++){
      newString += array[i];
    }
    newString = newString + firstLetter + 'ay';
    return newString;
  }

function output(args){
  var newString = '';
  for(var i = 0; i < args.length ; i++){
    newString += piglatin(args[i]) + ' ';
  }
  console.log(newString);
}

var result = output(args);
