const logfmt = require('logfmt')

function log (msg, data) {
  if (!data) data = msg
  data = Object.assign({ level: 'info', msg }, data)

  const string = logfmt.stringify(data)

  console.log(string)

  return string
}

function warn (msg, data) {
  return log(Object.assign({ level: 'warn', msg }, data))
}

function error (msg, data) {
  return log(Object.assign({ level: 'error', msg }, data))
}

module.exports = { log, warn, error }
