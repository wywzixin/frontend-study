function customNew(fn, ...args) {
    const obj = Object.create(fn.prototype);
    fn.apply(obj, args);
    return obj;
}
