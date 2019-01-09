const runOnce = require('./runOnce')
const { Transform } = require('readable-stream')

class ShellAfter extends Transform {
  constructor (args) {
    super()

    this.run = runOnce(args)
  }

  _transform (chunk, encoding, callback) {
    this.push(chunk)

    callback()
  }

  _flush (callback) {
    this.run().then(() => {
      callback()
    }).catch(err => callback(err))
  }
}

module.exports = ShellAfter
