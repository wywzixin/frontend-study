function fn(a, b, c) {
    return a + b + c;
}
// function curry(fn) {
//     const fnLength = fn.fnLength;
//     let args = [];
//     function calc(...newArgs) {
//         args = [...args, ...newArgs];
//         if (args.length < fnLength) {
//             return calc;
//         } else {
//             return fn.apply(this, args.slice(0, fnLength));
//         }
//     }
//     return calc;
// }
function curry(fn) {
    let length = fn.length;
    let args = [].slice.call(arguments, 1);
    return function () {
        let _args = args.concat([...arguments]); // 合并参数
        if (_args.length < length) {
            // 未接收完参数
            return curry.call(this, fn, ..._args);
        } else {
            console.log('this === window', this);
            // 接受完所有参数，直接执行
            return fn.apply(this, _args);
        }
    };
}
