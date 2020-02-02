/**
 * Open a webserver to serve a basic page with elements to check the steps.
 */

var http = require('http');
var fs = require("fs");
 
console.log("Running on http://localhost:3000");

http.createServer(function(request, response) {
  console.log(request.url);
  let file = '';
  switch (request.url) {
    case '/confirm_page.html':
      file = 'tests/web/confirm_page.html';
      break;

    case '/':
    default:
      file = 'tests/web/index.html';
  }

  fs.readFile(file, function(err, data){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    });

}).listen(3000);
