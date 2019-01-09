const { exec } = require('child_process')

function runOnce (args) {
  let run = false

  return () => {
    if (run) {
      return Promise.resolve()
    }

    run = true

    return new Promise((resolve, reject) => {
      exec(args.join(' '), null, (err, stdout, stderr) => {
        if (stdout) {
          process.stdout.write(stdout)
        }

        if (stderr) {
          process.stderr.write(stderr)
        }

        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }
}

module.exports = runOnce
