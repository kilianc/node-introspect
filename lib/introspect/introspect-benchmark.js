var
  vows = require('vows'),
  assert = require('assert'),
  introspect = require('./introspect'),
  Table = require('cli-table');

var table = new Table({
    head: ['Lines of code', 'Iterations', 'Result (ms)', 'Results avg (ms)', 'Platform'],
    colWidths: [15, 15, 15, 20, 30]
});

var tests = [10, 50, 100, 200, 300, 400, 500, 750, 1000];
var iterations = 10000;

function createDummyFunction (linesOfCode) {
  var fnStr = '  var foo;\n';
  for (var i = 0; i < linesOfCode; i++) {
    fnStr += '  foo += 50 + 100 + 60 / 100 / 2000 * 400;\n';
  }
  return new Function('foo', 'bar', 'foobar', 'callback', fnStr);
}

for (var i = 0; i < tests.length; i++) {
  var t = new Date().getTime();
  for(var c = 0; c < iterations; c++) {
      var result = introspect(createDummyFunction(tests[i]));
  }
  var ms = new Date().getTime() - t;
  table.push([tests[i], iterations, new Date().getTime() - t, ms / iterations, [process.platform, process.arch, process.version].join(' / ')]);
}

console.log(table.toString());