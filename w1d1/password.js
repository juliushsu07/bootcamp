var args = process.argv.slice(2);
function obfuscate(password){
  var newString = '';
  if(password === undefined){
    return 'Please enter a word!'
  }
  for(i = 0 ; i < password.length ; i ++){
    if(password[i] === 'a'){
      newString = newString + '4'    }
    else if(password[i] === 'e' ){
      newString = newString + '3';
    }
    else if(password[i] === 'o'){
      newString = newString + '0';
    }
    else if(password[i] === 'l'){
      newString = newString + '1';
    }
    else{
      newString = newString + password[i];
    }
  }
  return newString;
}

var result = obfuscate(args[0]);
console.log(result);