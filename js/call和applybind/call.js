Function.prototype.myCall = function (contex, ...args) {
    if (typeof contex === undefined || typeof contex === null) {
        contex = window;
    }
    const fnKey = Symbol();
    contex[fnKey] = this;
    const res = contex[fnKey](...args);
    delete contex[fnKey];
    return res;
};

Function.prototype.myApply = function (contex, args) {
    if (typeof contex === undefined || typeof contex === null) {
        contex = window;
    }
    const fnKey = Symbol();
    contex[fnKey] = this;
    const res = contex[fnKey](...args);
    delete contex[fnKey];
    return res;
};

Function.prototype.myBind = function (contex, ...bindArgs) {
    const self = this;
    return function (...args) {
        console.log('11', bindArgs);
        console.log('22', args);
        const newArgs = bindArgs.concat(args);
        return self.apply(contex, newArgs);
    };
};
