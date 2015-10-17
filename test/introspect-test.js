'use strict';
var
  vows = require('vows'),
  assert = require('assert'),
  introspect = require('../lib/introspect/introspect');

vows.describe('introspect/main').addBatch({
  'introspect should success': {
    'without spaces': function () {
      assert.deepEqual(introspect(function (foo,bar,callback) {}), ['foo', 'bar', 'callback']);
    },
    'with spaces': function () {
      assert.deepEqual(introspect(function ( foo , bar , callback ) { }), ['foo', 'bar', 'callback']);
    },
    'with newline': function () {
      assert.deepEqual(introspect(function (
        foo,
        bar,
        callback
      ) {//foo bar
        //foo bar
        var a = 5;
        for(var b = 0; b < 1000; b ++) { }
        if (a == 5) { }
      }), ['foo', 'bar', 'callback']);
    },
    'with no arguments': function () {
      assert.deepEqual(introspect(function () {}), []);
      assert.deepEqual(introspect(function ( ) {   }), []);
    },
    'with class with no ctor': function () {
      assert.deepEqual(introspect(class NoCtor{}), []);
      assert.deepEqual(introspect(class NoCtor2 {    }), []);
    },
    'with class with ctor with no arguments': function () {
      assert.deepEqual(introspect(class EmptyCtor{ constructor(){}}), []);
      assert.deepEqual(introspect(class EmptyCtor2{ constructor(     ){  }}), []);
    },
    'with class with ctor with arguments': function () {
      assert.deepEqual(introspect(class CtorWithArgs{ constructor(foo,bar,callback){  }}), ['foo','bar','callback']);
    },
    'with class with ineherited ctor': function () {
      class CtorWithArgs{ constructor(foo,bar,callback){  }}
      assert.deepEqual(introspect(class InheritedCtor extends CtorWithArgs{}), ['foo','bar','callback']);
    }
  }
}).export(module);
