var X = {
  throttle(fn, delay) {
    let lastTime = 0
    let timer
    return function () {
      let arg = arguments
      let that = this
      if (timer) {
        return
      }
      let callback = function () {
        timer = false
        lastTime = Date.now()
        fn.apply(that, arg)
      }
      if (Date.now() - lastTime > delay) {
        callback()
      } else {
        timer = setTimeout(callback, delay);
      }
    }
  }
}