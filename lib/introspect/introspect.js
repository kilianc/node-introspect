var argumentsRegExp = /constructor\w*\s*\(([\s\S]*?)\)|function\s*\w*\(([\s\S]*?)\)/;
var replaceRegExp = /[ ,\n\r\t]+/;

module.exports = function (fn) {
  var fnArguments = argumentsRegExp.exec(fn)
  if(!fnArguments || !fnArguments[1]){
    return []
  }
  fnArguments = fnArguments[1].trim();
  if (0 === fnArguments.length) return [];
  return fnArguments.split(replaceRegExp);
};
