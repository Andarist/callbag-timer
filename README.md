# callbag-timer

Observable source that after given duration, emit numbers in sequence every specified duration.

## Examples

### With single argument

```js
import forEach from 'callbag-for-each'
import pipe from 'callbag-pipe'
import timer from 'callbag-timer'

pipe(
  timer(1000),
  forEach(value => {
    // will log 0
    console.log(value)
  }),
)
```

### With both parameters used

```js
import forEach from 'callbag-for-each'
import pipe from 'callbag-pipe'
import timer from 'callbag-timer'

pipe(
  timer(1000, 2000),
  forEach(value => {
    // will log 0 1 2 3 4 ...
    console.log(value)
  }),
)
```

### With Date

```js
import forEach from 'callbag-for-each'
import pipe from 'callbag-pipe'
import timer from 'callbag-timer'

const date = new Date(Date.now() + 10000)

pipe(
  timer(date, 2000),
  forEach(value => {
    // will log 0 1 2 3 4 ...
    console.log(value)
  }),
)
```

### Used as notifier source

```js
import dropUntil from 'callbag-drop-until'
import forEach from 'callbag-for-each'
import pipe from 'callbag-pipe'
import interval from 'callbag-interval'
import timer from 'callbag-timer'

pipe(
  interval(1000),
  dropUntil(timer(6000)),
  forEach(value => {
    // will log 5 6 7 8 ...
    console.log(value)
  }),
)
```
