import assert = require('assert')
import Util from '../src/util'


suite('util', () => {})


test('simpleTimestamp', () => {
  assert.equal('2010-01-01 00:00:00.0', Util.simpleTimestamp(new Date(2010, 0, 1)))
})