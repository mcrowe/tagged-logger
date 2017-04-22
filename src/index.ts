import Util from './util'


export type LevelName = 'debug' | 'info' | 'error' | 'silent'

export type Stringer = () => string

export type Tag = string | Stringer


const LEVEL_VALUES = {
  debug: 1,
  info: 2,
  error: 3,
  silent: 4
}


const LEVEL_NAMES = {
  1: 'debug',
  2: 'info',
  3: 'error',
  4: 'silent'
}


class TaggedLogger {

  level: number
  tags: Tag[]

  constructor(levelName: LevelName, tags: Tag[] = []) {
    this.level = LEVEL_VALUES[levelName]
    this.tags = tags || []

    this.formatTag = this.formatTag.bind(this)
  }

  debug(...args) {
    this.log(LEVEL_VALUES.debug, ...args)
  }

  info(...args) {
    this.log(LEVEL_VALUES.info, ...args)
  }

  error(...args) {
    this.log(LEVEL_VALUES.error, ...args)
  }

  log(level, ...args) {
    if (level >= this.level) {
      console.log(this.formatTags(level), ...args)
    }
  }

  formatTags(level: number): string {
    return this.tags.map(t => this.formatTag(t, level)).join(' ')
  }

  formatTag(tag: Tag, level: number): string {
    return '[' + this.getTagValue(tag, level) + ']'
  }

  getTagValue(tag: Tag, level: number) {
    const type = typeof tag

    switch (type) {
      case 'function':
        const fn = tag as Stringer
        return fn()
      case 'string':
        switch (tag) {
          case '%t':
            return Util.simpleTimestamp(new Date())
          case '%l':
            return LEVEL_NAMES[level].toString()
          default:
            return tag
        }
      default:
        throw new Error(`Invalid tag type "${type}"`)
    }
  }

}


export default TaggedLogger