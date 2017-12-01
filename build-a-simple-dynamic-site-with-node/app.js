var router = require("./router.js");

//Problem: We need a simple way to look at a user's badge count and javscript points from a web browser
//Solution: Use node.js to perform the profile lookups and serve our template via HTTP

//1. Create a web server
var http = require("http");
http
  .createServer(function(request, response) {
    router.home(request, response);
    router.user(request, response);
  })
  .listen(3000, "127.0.0.1");
console.log("Server running at 127.0.0.1:3000");
