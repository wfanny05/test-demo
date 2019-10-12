// var expect = require('chai').expect;
import { expect } from "chai"
import { add, subtract } from "../src/index"

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
        expect([1, 2, 3].indexOf(-1)).to.equal(-1)
    })
  })
})

describe('index', function() {
  it('add', function() {
    const res = add(3, 5)
    expect(res).to.equal(8)
  })
  it('subtract', function() {
    const res = subtract(10, 2)
    expect(res).to.equal(8)
  })
})
