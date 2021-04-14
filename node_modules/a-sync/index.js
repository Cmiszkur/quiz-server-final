function _last(arr) {
  return Array.prototype.slice.call(arr, -1)[0]
}

function wrap(fn) {
  return function() {
    var cb = _last(arguments)
    var hasCb = typeof cb === 'function'
    var err = null
    var res
    try {
      res = fn.apply(null, arguments)
    } catch (e) {
      err = e
    }
    if (hasCb) {
      cb(err, res)
    } else {
      if (err) throw err
    }
    return res
  }
}

module.exports = wrap