var args = process.argv.slice(2);

function reverse(array){
    var newString = '';
    for(var i = array.length - 1 ; i >= 0 ; i--){
      newString += array[i];
    }
    return newString;
  }

function output(args){
  for(var i = 0; i < args.length ; i++){
    console.log(reverse(args[i]))
  }
}

var result = output(args);
