function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

async function fn() {
    const t1 = new Date();
    await sleep(1000);
    const t2 = new Date();
    console.log(t2 - t1);
}
