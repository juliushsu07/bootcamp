var countdownGenerator = function (x) {
  /* your code here */
  var list = ["T-minus 3", "T-minus 2", "T-minus 1", "Blast Off!", "Rockets already gone, bub"];

  var str = "";
  var index = 0;

  return function() {
    if(index <= list.length - 1){
      str = list[index];
    }
    else str = list[list.length - 1]
    index ++;
    return console.log(str);
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
