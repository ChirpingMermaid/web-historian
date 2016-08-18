var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  homepage: path.join(__dirname, '../web/public/index.html'),
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(cb) {  
  //console.log("======homepage: ", exports.paths.homepage);
  var body = [];
  fs.readFile(exports.paths.list, function(err, data) {
    if (err) {
      throw err;
    }
    body.push(data);
    body = Buffer.concat(body).toString().split('\n');
    cb(body);
  });
};

exports.isUrlInList = function(url, cb) {
  exports.readListOfUrls(function(urls) {
    if (urls.indexOf(url) !== -1) {
      cb(true);
    } else {
      cb(false);
    }
  });
};

exports.addUrlToList = function(url, cb) {
  exports.isUrlInList(url, function(bool) {
    //console.log("booooool", bool);
    if (!bool) {
      //console.log("======url", url);
      fs.appendFile(exports.paths.list, url, function() {
        cb();
      });
    }
  });
};

exports.isUrlArchived = function() {
};

exports.downloadUrls = function() {
};
