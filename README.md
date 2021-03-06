# console-logfmt

Wrap around [logfmt](https://github.com/csquared/node-logfmt) exposing a interface compatible with `console.log()`, `console.warn()` and `console.error()`.

## Instalation

```bash
npm install console-logfmt
```

## Usage

The level is defined as:
- `log()` ⇒ `'info'`
- `warn()` ⇒ `'warn'`
- `error()` ⇒ `'error'`

Any string parameter will be concatenated to the `msg=` key:
```javascript
const ConsoleLogFmt = require('console-logfmt')
const { log, warn, error } = new ConsoleLogFmt()

log('message')
// output:
// level=info msg=message

log('message', 'of something')
// output:
// level=info msg="message of something"
```
Any object parameter wil be passed to the logfmt as it is:
```javascript
warn('message of warning', { extra: 'data' })
// output
// level=warn msg="message of warning" extra=data
```

```javascript
error({ other: 'message of error', extra: 'data' })
// output
// level=error other="message of error" extra=data
```

## Important to notice

The default output for any log level is the `process.stderr`, if you need something different, the [console parameters](https://nodejs.org/api/console.html#console_new_console_stdout_stderr_ignoreerrors) still valid to be informed/replaced.

## License

console-logfmt is released under the [MIT License](http://www.opensource.org/licenses/MIT).
