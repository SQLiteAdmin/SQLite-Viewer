/*
 * Name: SQLite Viewer
 * Description: SQLite Viewer for Node JS or JavaScript and TypeScript.
 * Version: 0.0.1
 * Developer: Sushil Kumar
 * Github: https://github.com/SQLiteAdmin/SQLite-Viewer.git
 * */

const http = require("http");
const port = process.env.PORT || 8888;
const path = require("path");
const fs = require("fs");


http.createServer(function(req, res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("<h2>Welcome to SQLite Viewer!</h2>");
  res.end();
}).listen(port);
console.log(`Server running on ${port}`);
