var http = require("http");

const fs = require('fs');

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

  case "/":
    fs.readFile(__dirname + "/html-pages/homepage.html", function(err, data) {
    
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    })
    break;

  case "/portfolio":
    fs.readFile(__dirname + "/html-pages/portfolio.html", function(err, data) {
    
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    })
    break;

    case "/contact":
    fs.readFile(__dirname + "/html-pages/contact.html", function(err, data) {
    
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    })
    break;

  default:
    return display404(path, req, res);
  }
}





