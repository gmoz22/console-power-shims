# console-powerlogs
Console shims for common browsers and NodeJS.



## Features

* Log level control via `console.setLevel()`
* Basic logging for browsers and NodeJS
  * `console.log()`
  * `console.info()`
  * `console.warn()`
  * `console.error()`



## Usage
```js
require('console-powerlogs');

// Sets the logging level
// Default is to show all logs, or console.setLevel(0);
console.setLevel(1); // 1 = info, warn and error.

console.log('TMI'); // Will NOT display at this log level
console.info('Info'); // Will display
console.warn('Warning'); // Will display
console.error('Error'); // Will display
```

* If `console.error` is not available, `console.warn` is used.
* If `console.warn` is not available, `console.info` is used.
* If `console.info` is not available, `console.log` is used.
* If `console.log` is not available, well... then this package is useless.   



## Functions

### Logging

##### log(object [, object, ...])
Outputs a `log` message. Pass one or more objects to this method. Each object is evaluated and concatenated into a space-delimited string.

##### info(object [, object, ...])
Outputs an `info` log message. Pass one or more objects to this method. Each object is evaluated and concatenated into a space-delimited string.

##### warn(object [, object, ...])
Outputs an `warning` log message. Pass one or more objects to this method. Each object is evaluated and concatenated into a space-delimited string.

##### error(object [, object, ...])
Outputs an `error` log message. Pass one or more objects to this method. Each object is evaluated and concatenated into a space-delimited string.

### Configuration

##### setLevel(integer)
Sets the logs level.
* `level` Log level
  * `0`: `[default]` All logs - `log` and above
  * `1`: `info` and above
  * `2`: `warn` and above
  * `3`: `error`
  * `4`: No logs



## Future Features
* Standardized logging styles
* More shims
* Additional log levels
* Color support
* Style support
* Prefixing
