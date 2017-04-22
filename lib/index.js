"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const LEVEL_VALUES = {
    debug: 1,
    info: 2,
    error: 3,
    silent: 4
};
const LEVEL_NAMES = {
    1: 'debug',
    2: 'info',
    3: 'error',
    4: 'silent'
};
class TaggedLogger {
    constructor(levelName, tags = []) {
        this.level = LEVEL_VALUES[levelName];
        this.tags = tags || [];
        this.formatTag = this.formatTag.bind(this);
    }
    debug(...args) {
        this.log(LEVEL_VALUES.debug, ...args);
    }
    info(...args) {
        this.log(LEVEL_VALUES.info, ...args);
    }
    error(...args) {
        this.log(LEVEL_VALUES.error, ...args);
    }
    log(level, ...args) {
        if (level >= this.level) {
            console.log(this.formatTags(), ...args);
        }
    }
    formatTags() {
        return this.tags.map(this.formatTag).join(' ');
    }
    formatTag(tag) {
        return '[' + this.getTagValue(tag) + ']';
    }
    getTagValue(tag) {
        const type = typeof tag;
        switch (type) {
            case 'function':
                return tag();
            case 'string':
                switch (tag) {
                    case '%t':
                        return util_1.default.simpleTimestamp(new Date());
                    case '%l':
                        return LEVEL_NAMES[this.level].toString();
                    default:
                        return tag;
                }
            default:
                throw new Error(`Invalid tag type "${type}"`);
        }
    }
}
exports.default = TaggedLogger;
