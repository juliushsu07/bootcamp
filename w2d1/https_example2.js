function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var https = require('https');

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    var buffer = "";
    response.on('data', function(data){
      buffer += data;
    })
    response.on('end', function() {
      console.log(buffer);
    })

  })

}

getAndPrintHTML ();