function getQuery(url) {
    const str = url.split('?')[1];
    const arr = str.split('&');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i].split('=');
        result[item[0]] = item[1];
    }
    return result;
}
