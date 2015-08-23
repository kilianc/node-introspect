var argumentsRegExp = /\(([\s\S]*?)\)/;
var replaceRegExp = /[ ,\n\r\t]+/;

module.exports = function (fn) {
  var fnArguments = argumentsRegExp.exec(fn)
  if(!fnArguments || !fnArguments[1]){
    return null
  }
  fnArguments = fnArguments[1].trim();
  if (0 === fnArguments.length) return [];
  return fnArguments.split(replaceRegExp);
};
