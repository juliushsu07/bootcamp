var args = process.argv.slice(2);

function rollDice(number){
  var str = generateRandomNumber();

  for(i = 1 ; i < number; i++){
    str = str + ', '  + generateRandomNumber() ;
  }
  return str;
}

function generateRandomNumber(){
  return Math.floor(Math.random() * (( 6 -1 ) + 1) + 1 );
}

var result = rollDice(args[0]);
console.log('Rolled' + ' ' + args[0]  + ' ' + 'dice: ' + result);