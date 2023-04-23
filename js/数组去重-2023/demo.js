// function uniqueArray(arrList) {
//     const res = arrList.filter((item, index) => {
//         return arrList.indexOf(item) === index;
//     });
//     return res;
// }

function uniqueArray(arrList) {
    const res = [...new Set(arrList)];
    return res;
}
