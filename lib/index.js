"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const LEVELS = {
    debug: 1,
    info: 2,
    error: 3,
    silent: 4
};
class TaggedLogger {
    constructor(level, tags = []) {
        this.level = LEVELS[level];
        this.tags = tags || [];
        this.formatTag = this.formatTag.bind(this);
    }
    debug(...args) {
        this.log(LEVELS.debug, ...args);
    }
    info(...args) {
        this.log(LEVELS.info, ...args);
    }
    error(...args) {
        this.log(LEVELS.error, ...args);
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
                if (tag == '%t') {
                    return util_1.default.simpleTimestamp(new Date());
                }
                else {
                    return tag;
                }
            default:
                throw new Error(`Invalid tag type "${type}"`);
        }
    }
}
exports.default = TaggedLogger;
