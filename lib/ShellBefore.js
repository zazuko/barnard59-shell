const runOnce = require('./runOnce')
const { Transform } = require('readable-stream')

class ShellBefore extends Transform {
  constructor (args) {
    super()

    this.run = runOnce(args)
  }

  _transform (chunk, encoding, callback) {
    this.run().then(() => {
      this.push(chunk)

      callback()
    }).catch(err => callback(err))
  }
}

module.exports = ShellBefore
