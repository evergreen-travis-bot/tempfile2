'use strict'

var TMP_DIR = require('os-tmpdir')()
var mkdirp = require('mkdirp')
var path = require('path')
var uuid = require('uuid')

function DEFAULTS () {
  return {
    ext: '',
    path: TMP_DIR,
    name: uuid.v4()
  }
}

module.exports = function (opts) {
  // backward compatibility
  if (typeof opts === 'string') return path.join(TMP_DIR, uuid.v4() + (opts || ''))
  opts = Object.assign(DEFAULTS(), opts)
  mkdirp.sync(opts.path, {mode: opts.mode})
  return path.join(opts.path, opts.filename + opts.ext)
}
