var path = require('path');
var archive = require('../helpers/archive-helpers');
var utils = require('./http-helpers');
var fs = require('fs');
var http = require('http');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // res.end(archive.paths.list);
  //console.log("=============method", req.method);
  if (req.method === 'GET') {

      // http.request({
      //       hostname: 'www.google.com',
      //       method: 'GET'
      //     }, function(res) {
      //       var body = [];
      //       res.on('data', function (chunk) {
      //         body.push(chunk);
      //       }).on('end', function () {
      //         body = Buffer.concat(body).toString();
      //         fs.writeFile(archive.paths.archivedSites + '/' + 'www.google.com' + '.html', body, function() {
      //           console.log("FILE ARCHIVED!!!!!!!!!!!!");
      //         });

      //       });
      //     }).end(); 

    fs.readFile('./public/index.html', function (err, html) {
      if (err) {
        throw err; 
      }  
      res.writeHead(200, utils.headers);
      res.end(html);
    });

  } else if (req.method === 'POST') {
    var data = [];
    req.on('data', function(chunk) {
      data.push(chunk);
    }).on('end', function() {
      data = Buffer.concat(data).toString().slice(4) + '\n';
      archive.addUrlToList(data, function() {
        res.writeHead(302, utils.headers);
        res.end('Found');
      });
      
    });
  }
};
