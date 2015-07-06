'use strict';

var nodePath      = require('path');
var uuid          = require('uuid');
var mkdirp        = require('mkdirp');
var TMP_DIR       = require('os-tmpdir')();
var existsDefault = require('existential-default');

module.exports = function(params) {

  // backward compatibility
  if (typeof params === 'string') return nodePath.join(TMP_DIR, uuid.v4() + (params || ''));

  if (!params) params = {};

  var ext = existsDefault(params.ext, '');
  var path = existsDefault(params.path, TMP_DIR);
  var ensure = existsDefault(params.ensure, true);
  var filename = existsDefault(params.name, uuid.v4());

  if (ensure) mkdirp.sync(path, {mode: params.mode});
  return nodePath.join(path, filename + ext);
};
