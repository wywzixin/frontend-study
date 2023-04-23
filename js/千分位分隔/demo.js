function format(n) {
    n = Math.floor(n); // 只考虑整数
    const s = n.toString();
    const arr = s.split('').reverse();
    return arr.reduce((prev, val, index) => {
        if (index % 3 === 0) {
            if (prev) {
                return val + ',' + prev;
            } else {
                return val;
            }
        } else {
            return val + prev;
        }
    }, '');
}
// 这个方法好
