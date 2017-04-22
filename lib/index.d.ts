export declare type LevelName = 'debug' | 'info' | 'error' | 'silent';
export declare type Stringer = () => string;
export declare type Tag = string | Stringer;
declare class TaggedLogger {
    level: number;
    tags: Tag[];
    constructor(levelName: LevelName, tags?: Tag[]);
    debug(...args: any[]): void;
    info(...args: any[]): void;
    error(...args: any[]): void;
    log(level: any, ...args: any[]): void;
    formatTags(level: number): string;
    formatTag(tag: Tag, level: number): string;
    getTagValue(tag: Tag, level: number): any;
}
export default TaggedLogger;
