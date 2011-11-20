var argumentsRegExp = /^function.+\(([a-z0-9\n\r\t ,]*)\)/i;
var replaceRegExp = /[ ,\n\r\t]+/;

module.exports = function (fn) {
  var fnString = fn.toString();
  var fnArguments = argumentsRegExp.exec(fnString)[1];
  return fnArguments.trim().split(/[ ,\n\r\t]+/);
};