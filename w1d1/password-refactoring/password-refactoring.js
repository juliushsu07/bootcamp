var args = process.argv.slice(2);

function obfuscate(password){
  return password.replace(/a/g, '4').replace(/e/g, '3').replace(/o/g, '0').replace(/l/g, '1');
}

var result = obfuscate(args[0]);
console.log(result);