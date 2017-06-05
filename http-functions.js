module.exports = function getHTML (options, callback) {
var https = require('https');   
    var chunks = '';
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

function printHTML (html) {
  console.log(html);
}