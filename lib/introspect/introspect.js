var argumentsRegExp = /\(([\s\S]*?)\)/;
var replaceRegExp = /[ ,\n\r\t]+/;

module.exports = function (fn) {
  var fnArguments = argumentsRegExp.exec(fn)[1].trim();
  return fnArguments.split(replaceRegExp);
};