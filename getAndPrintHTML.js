var https = require('https');



function getAndPrintHTMLChunks () {
  var chunks = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function (response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    chunks += data;
  });
  response.on('end', function(){
    console.log(chunks);
  })
  });
}

getAndPrintHTMLChunks();
