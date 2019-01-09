const Shell = require('./lib/Shell')

function init () {
  return new Shell(Array.prototype.slice.call(arguments))
}

module.exports = init
