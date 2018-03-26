export default function timer(delay, period) {
  return (start, sink) => {
    if (start !== 0) return
    let i = 0

    let timerId = setTimeout(() => {
      sink(1, i++)

      if (period === undefined) {
        sink(2)
        return
      }

      timerId = setInterval(() => {
        sink(1, i++)
      }, period)
    }, delay instanceof Date ? delay - Date.now() : delay)

    sink(0, t => {
      if (t === 2) {
        // timeouts & intervals share the same pool of IDs
        clearTimeout(timerId)
      }
    })
  }
}
