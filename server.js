var http = require("http");

var a = 10;
var b = 50;
var c = a+b;
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("hello world!");
    res.write(`A value is ${a} and B value is ${b} and sum is ${c}`);
    res.end('Bye');

}).listen(3000);
console.log("server listening on http://127.0.0.1:3000");