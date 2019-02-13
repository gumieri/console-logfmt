import test from 'ava'
import devnull from 'dev-null'
import ConsoleLogFmt from './index'

const stdout = devnull()
const stderr = devnull()

test('simple info message', t => {
  const { log } = new ConsoleLogFmt({ stdout, stderr })
  t.is(log('message'), 'level=info msg=message')
})

test('simple warn message', t => {
  const { warn } = new ConsoleLogFmt({ stdout, stderr })
  t.is(warn('message'), 'level=warn msg=message')
})

test('simple error message', t => {
  const { error } = new ConsoleLogFmt({ stdout, stderr })
  t.is(error('message'), 'level=error msg=message')
})

test('log of multiple string params', t => {
  const { log } = new ConsoleLogFmt({ stdout, stderr })
  t.is(
    log('message', 'of', 'a lot of', 'words'),
    'level=info msg="message of a lot of words"'
  )
})
