var argumentsRegExp = /\(([\s\S]*?)\)/;
var replaceRegExp = /[ ,\n\r\t]+/;

module.exports = function (fn) {
  var fnArguments = argumentsRegExp.exec(fn)
  if( fnArguments === null){
    return []
  }
  fnArguments = fnArguments[1].trim();
  return fnArguments.split(replaceRegExp);
};
