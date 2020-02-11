export function* createIdGenerator(): Generator<number> {
    let number = 1;

    while (true) {
        yield number++;
    }
}
