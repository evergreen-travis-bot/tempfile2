'use strict';

var nodePath = require('path');
var uuid     = require('uuid');
var mkdirp   = require('mkdirp');
var TMP_DIR  = require('os-tmpdir')();

module.exports = function(params) {

  // backward compatibility
  if (typeof params === 'string')
    return nodePath.join(TMP_DIR, uuid.v4() + (params || ''));

  if (!params) params = {};

  var ext = params.ext || '';
  var path = params.path || TMP_DIR;

  mkdirp.sync(path, {mode: params.mode});
  return nodePath.join(path, uuid.v4() + ext);
};
