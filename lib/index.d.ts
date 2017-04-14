export declare type LevelName = 'debug' | 'info' | 'error' | 'silent';
export declare type Stringer = () => string;
export declare type Tag = string | Stringer;
declare class TaggedLogger {
    level: number;
    tags: Tag[];
    constructor(level: LevelName, tags?: Tag[]);
    debug(...args: any[]): void;
    info(...args: any[]): void;
    error(...args: any[]): void;
    log(level: any, ...args: any[]): void;
    formatTags(): string;
    formatTag(tag: any): string;
    getTagValue(tag: any): any;
}
export default TaggedLogger;
