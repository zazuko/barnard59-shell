const ShellBefore = require('./lib/ShellBefore')

function init () {
  return new ShellBefore(Array.prototype.slice.call(arguments))
}

module.exports = init
