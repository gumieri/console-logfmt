const logfmt = require('logfmt')
const { Console } = require('console')

function plainfy ({ object = {}, parentKeys = [] }) {
  let plainObject = {}

  Object.keys(object).forEach(key => {
    if (typeof object[key] !== 'object') {
      if (parentKeys.length > 0) {
        plainObject[`${parentKeys.join('_')}_${key}`] = object[key]
        return
      }

      plainObject[key] = object[key]
      return
    }

    parentKeys.push(key)
    plainObject = plainfy({ parentKeys, object: object[key] })
  })

  return plainObject
}

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
        data = Object.assign(data, plainfy({ object: param }))
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
