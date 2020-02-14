// Type definitions for gifencoder ^2.0.1

declare module 'gifencoder' {

    interface ByteArray {
        getData: () => Uint8Array
    }

    export default class GIFEncoder {
        constructor(width: number, height: number): GIFEncoder;
        setDelay(ms: number): void;
        setDispose(code: any): void;
        setRepeat(iter: number): void;
        setTransparent(color: string): void;
        addFrame(im: Uint8ClampedArray): void;
        finish(): void;
        out: ByteArray;
        setQuality(quality: number): void;
        start(): void;
    }
}
