module.exports = function getHTML (options, callback) {
    var chunks = '';
    var https = require('https');   
  //console.log(callback);
  https.get(options, function (response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    chunks += data;
    callback(chunks);
  });
  response.on('end', function(){
    console.log('Response stream complete.');
  })
  });
};

