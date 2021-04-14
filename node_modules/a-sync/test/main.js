var as = require('../')
var assert = require('assert')

describe('a-sync', function(){
  function plus1(num){
    if (typeof num !== 'number') {
      throw new Error('not a number')
    }
    return num + 1
  }
  var fn = as(plus1)

  describe('wrapped function', function(){

    it('should return result (sync)', function(){
      assert.equal(fn(1), 2)
    })

    it('should throw error (sync)', function(){
      assert.throws(function(){
        fn('a')
      })
    })

    it('should callback result (async)', function(done){
      fn(1, function(err, res){
        assert.equal(res, 2)
        done()
      })
    })

    it('should callback error (async)', function(done){
      fn('a', function(err, res){
        assert.notEqual(err, null)
        done()
      })
    })
  })
})