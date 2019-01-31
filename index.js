const logfmt = require('logfmt')

function log (...params) {
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

  const string = logfmt.stringify(data)

  return string
}

function warn (params) {
  return log(params, { level: 'warn' })
}

function error (params) {
  return log(params, { level: 'error' })
}

module.exports = { log, warn, error }
