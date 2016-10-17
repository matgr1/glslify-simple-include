export declare type completionCallback = (err: any, data: string) => void;
export declare function transform(filename: string, src: string, opts: any, done: completionCallback): void;
