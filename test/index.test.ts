import assert = require('assert')
import Logger from '../src'


suite('index', () => {})


test('basic usage', () => {
  const tags = ['simple', '%t', () => 'thunk']
  const logger = new Logger('info', tags)
  logger.info('info')
  logger.debug('debug')
  logger.error('error')
})