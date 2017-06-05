var https = require('https');



function getAndPrintHTML (options) {
  //console.log(options);
  var chunks = '';
  https.get(options, function (response){
//console.log(requestOptions)
//console.log(response)
  response.setEncoding('utf8');
  response.on('data', function(data){
    //console.log(data);
    chunks += data;
    console.log(chunks);
  });
  response.on('end', function(){
    console.log('Response stream complete.');
  })
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
