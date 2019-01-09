const ShellAfter = require('./lib/ShellAfter')

function init () {
  return new ShellAfter(Array.prototype.slice.call(arguments))
}

module.exports = init
