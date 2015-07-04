'use strict';

var path     = require('path');
var uuid     = require('uuid');
var mkdirp   = require('mkdirp');
var TMP_DIR  = require('os-tmpdir')();

module.exports = function(params) {

  // backward compatibility
  if (typeof params === 'string')
    return path.join(TMP_DIR, uuid.v4() + (params || ''));

  if (!params) params = {};

  var ext = params.ext || '';
  var rootpath = params.rootpath || TMP_DIR;

  mkdirp.sync(rootpath, {mode: params.mode});
  return path.join(rootpath, uuid.v4() + ext);
};
