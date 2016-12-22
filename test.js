console.log("hi");
var http= require("http");
http.createServer(function (req, resp) {
    resp.writeHead(200);
    
    resp.end("hello");
}).listen(3322);