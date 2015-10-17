'use strict';
var
  vows = require('vows'),
  assert = require('assert'),
  introspect = require('../lib/introspect/introspect');

class ClassWithCtorFirst {
  constructor(a, b) {}
  method(c, d) {}
}

class ClassWithMethodFirst {
  method(c, d) {}
  constructor(a, b) {}
}

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
    'with class with inherited ctor': function () {
      class CtorWithArgs{ constructor(foo,bar,callback){  }}
      assert.deepEqual(introspect(class InheritedCtor extends CtorWithArgs{}), ['foo','bar','callback']);
    },
    'with class with method after ctor': function () {
      assert.deepEqual(introspect(ClassWithCtorFirst), ['a','b']);
    },
    'with class with method before ctor': function () {
      assert.deepEqual(introspect(ClassWithMethodFirst), ['a','b']);
    },
    'with class unbound method': function () {
      assert.deepEqual(introspect(ClassWithCtorFirst.prototype.method), ['c','d']);
      assert.deepEqual(introspect(ClassWithMethodFirst.prototype.method), ['c','d']);
    },
    'with class bound method': function () {
      assert.deepEqual(introspect(new ClassWithCtorFirst().method), ['c','d']);
      assert.deepEqual(introspect(new ClassWithMethodFirst().method), ['c','d']);
    }
  }
}).export(module);
