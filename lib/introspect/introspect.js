var isClassRegExp = /class/;
var hasCtorRegExp = /constructor\s*\(/;
var argumentsRegExp = /\(([\s\S]*?)\)/;
var classArgumentsRegExp = /constructor\s*\(([\s\S]*?)\)/;
var replaceRegExp = /[ ,\n\r\t]+/;

function findFirstCtor(fn){
  while (!hasCtorRegExp.test(fn) && isClassRegExp.test(fn)){
    fn = Object.getPrototypeOf(fn);
  }
  return fn;
}

module.exports = function (fn) {
  var isClass = isClassRegExp.test(fn);
  var regEx = argumentsRegExp;
  if (isClass){
    regEx = classArgumentsRegExp;
    fn = findFirstCtor(fn);
  }
  var results = regEx.exec(fn);
  if (null === results) return [];
  var fnArguments = results[1].trim();
  if (0 === fnArguments.length) return [];
  return fnArguments.split(replaceRegExp);
};
