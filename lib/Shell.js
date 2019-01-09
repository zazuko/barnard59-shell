const { spawn } = require('child_process')
const { Duplex } = require('readable-stream')

class Shell extends Duplex {
  constructor (args) {
    super()

    const cmd = args[0]
    const params = args.slice(1)

    this.child = spawn(cmd, params)

    this.child.on('error', err => this.emit(err))
    this.child.on('close', () => this.push(null))
    this.child.stdout.on('readable', () => this.forward())
    this.on('finish', () => this.child.stdin.end())

    this.child.stderr.on('data', chunk => process.stderr.write(chunk))
  }

  _write (chunk, encoding, callback) {
    this.child.stdin.write(chunk, encoding, callback)
  }

  _read (size) {
    this.forward(size)
  }

  forward (size) {
    let data
    let more = true

    while (more && (data = this.child.stdout.read(size)) !== null) {
      more = this.push(data)
    }
  }
}

module.exports = Shell
