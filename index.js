/*
 * Name: SQLite Viewer
 * Description: SQLite Viewer for Node JS or JavaScript and TypeScript.
 * Version: 0.0.1
 * Developer: Sushil Kumar
 * Github: https://github.com/SQLiteAdmin/SQLite-Viewer.git
 * */

const http = require("http");
//const port = process.env.PORT || 8080;
const path = require("path");
const fs = require("fs");


http.createServer(function(req, res){
  res.write("Hello Nodejs!");
  res.write(req.url);
  res.end();
}).listen(8080);
console.log("Server running on PORT 8080");
