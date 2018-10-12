import forEach from 'callbag-for-each'
import interval from 'callbag-interval'
import pipe from 'callbag-pipe'
import takeUntil from 'callbag-take-until'

import timer from '../src'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

test('works with number', () => {
  const actual = []

  pipe(
    timer(10),
    forEach(data => actual.push(data)),
  )

  return delay(20).then(() => {
    expect(actual).toEqual([0])
  })
})

test('works with Date', () => {
  const actual = []
  const now = Date.now()

  pipe(
    timer(new Date(now + 10)),
    forEach(data => actual.push(data)),
  )

  return delay(20).then(() => {
    expect(actual).toEqual([0])
  })
})

test('works with period argument', () => {
  const actual = []

  pipe(
    timer(20, 10),
    takeUntil(interval(55)),
    forEach(data => actual.push(data)),
  )

  return delay(55).then(() => {
    expect(actual).toEqual([0, 1, 2, 3])
  })
})
