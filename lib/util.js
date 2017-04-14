"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// e.g. 2017-01-01 01:12:52.332
function simpleTimestamp(date) {
    const h = zeroPad(date.getHours());
    const m = zeroPad(date.getMinutes());
    const s = zeroPad(date.getSeconds());
    const ms = date.getMilliseconds();
    return `${simpleDateFormat(date)} ${h}:${m}:${s}.${ms}`;
}
exports.default = { simpleTimestamp };
function zeroPad(val) {
    const s = val.toString();
    return s.length == 1 ? '0' + s : s;
}
// e.g. 2017-01-21
function simpleDateFormat(date) {
    const y = date.getFullYear();
    // js months are 0-based
    const m = zeroPad((date.getMonth() + 1));
    const d = zeroPad(date.getDate());
    return `${y}-${m}-${d}`;
}
