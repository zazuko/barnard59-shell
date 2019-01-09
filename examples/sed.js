const Shell = require('../lib/Shell')

function sed (search, replace) {
  return new Shell(['sed', `--expression=s/${search}/${replace}/g`])
}

module.exports = sed
