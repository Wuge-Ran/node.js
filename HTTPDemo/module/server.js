let url = require("url");
let http = require("http");
let router =  require('./router')
var requestHandlers = require("./requestHandlers");
let start = function (){
  http.createServer(onRequest).listen(8888);
  console.log('running')
}
let handle = {
  '/':requestHandlers.start,
  '/start':requestHandlers.start,
  '/update':requestHandlers.update
}

function onRequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");
  router.route(pathname,handle);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write('hello world!!');
  response.end();
}

exports.start = start;