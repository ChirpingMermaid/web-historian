// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var http = require('http');

archive.readListOfUrls(function (arr) {
  archive.downloadUrls(arr);
});

