var argumentsRegExp = /\(([\s\S]*?)\)/;
var isClassRegExp = /class/;
var classArgumentsRegExp = /constructor\s*\(([\s\S]*?)\)/;
var replaceRegExp = /[ ,\n\r\t]+/;

module.exports = function (fn) {
  var isClass = isClassRegExp.test(fn);
  var regEx = isClass ? classArgumentsRegExp : argumentsRegExp;
  var results = regEx.exec(fn);
  if (null === results) return [];
  var fnArguments = results[1].trim();
  if (0 === fnArguments.length) return [];
  return fnArguments.split(replaceRegExp);
};
