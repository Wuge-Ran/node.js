let start = function (){
  var http = require("http");
  console.log('running')
  let i = 0;
  http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);
}

exports.start = start;