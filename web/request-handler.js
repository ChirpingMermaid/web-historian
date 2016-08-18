var path = require('path');
var archive = require('../helpers/archive-helpers');
var utils = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // res.end(archive.paths.list);
  //console.log("=============method", req.method);
  if (req.method === 'GET') {

    fs.readFile('./public/index.html', function (err, html) {
      if (err) {
        throw err; 
      }  
      res.writeHead(200, utils.headers);
      res.end(html);
    });
  }
};
