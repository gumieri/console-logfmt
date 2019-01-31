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

The first parameter will be the string for the `msg=`:
```javascript
const { log, warn, error } = require('console-logfmt')

log('message')
// output:
// level=info msg=message
```
The last parameter so breaks the interface to be an object giving the usage as logfmt needs:
```javascript
warn('message of warning', { extra: 'data' })
// output
// level=warn msg="message of warning" extra=data
```

If no first parameter is informed, its ok:
```javascript
error({ other: 'message of error', extra: 'data' })
// output
// level=error other="message of error" extra=data
```


## License

console-logfmt is released under the [MIT License](http://www.opensource.org/licenses/MIT).
