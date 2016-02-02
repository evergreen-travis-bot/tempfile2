'use strict';
var assert = require('assert');
var tmpdir = require('os').tmpdir();
var tempfile = require('./..');

describe('tempfile 2 ::', function() {

  context('backward compatibility', function() {

    it('should generate a random temp file path', function() {
      assert(tempfile().indexOf(tmpdir) !== -1);
    });

    it('should have an option to supply an extension', function() {
      assert(/png$/.test(tempfile('.png')));
    });

  });

  context('new options', function() {

    it('should have an option to supply an extension', function() {
      assert(/png$/.test(tempfile({ext:'.png'})));
    });

    it('should have an option to supply an root path', function() {
      assert(/\/tmp\/custom2\//.test(tempfile({path:'/tmp/custom2/'})));
    });
  });
});
