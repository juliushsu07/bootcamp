var fs = require("fs");
var fileStr = process.argv[2];
console.log(fileStr);
fs.readFile(fileStr, function(err, data){
  if(err) {
    return console.error(err);
  }

    console.log(data.toString());
});


