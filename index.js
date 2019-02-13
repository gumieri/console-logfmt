const logfmt = require('logfmt')
const { Console } = require('console')

function format (params) {
  const data = params.reduce(
    (data, param) => {
      if (typeof param === 'string') {
        if (data.msg) {
          data.msg += ` ${param}`
        } else {
          data.msg = param
        }
      }

      if (typeof param === 'object' && param !== null) {
        data = Object.assign(data, param)
      }

      return data
    },
    { level: 'info' }
  )

  return logfmt.stringify(data)
}

function ConsoleLogFmt (options) {
  const original = new Console(
    Object.assign({ stdout: process.stderr, stderr: process.stderr }, options)
  )

  return {
    log: (...params) => {
      const string = format(params)

      original.log(string)

      return string
    },
    warn: (...params) => {
      const string = format([...params, { level: 'warn' }])

      original.warn(string)

      return string
    },
    error: (...params) => {
      const string = format([...params, { level: 'error' }])

      original.error(string)

      return string
    }
  }
}

module.exports = ConsoleLogFmt
