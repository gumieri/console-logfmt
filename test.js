import test from 'ava'
import { log, warn, error } from './index'

test('simple info message', t => {
  t.is(log('message'), 'level=info msg=message')
})

test('simple warn message', t => {
  t.is(warn('message'), 'level=warn msg=message')
})

test('simple error message', t => {
  t.is(error('message'), 'level=error msg=message')
})

test('log of multiple string params', t => {
  t.is(
    log('message', 'of', 'a lot of', 'words'),
    'level=info msg="message of a lot of words"'
  )
})
