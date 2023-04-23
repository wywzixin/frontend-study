class Scheduler {
    queue = []; // 用队列保存正在执行的任务
    runCount = 0; // 计数正在执行的任务个数
    constructor(limit) {
        this.maxCount = limit; // 允许并发的最大个数
    }
    add(time, data) {
        const promiseCreator = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(data);
                    resolve();
                }, time);
            });
        };
        this.queue.push(promiseCreator);
        // 每次添加的时候都会尝试去执行任务
        this.request();
    }
    request() {
        // 队列中还有任务才会被执行
        if (this.queue.length && this.runCount < this.maxCount) {
            this.runCount++;
            // 执行先加入队列的函数
            this.queue
                .shift()()
                .then(() => {
                    this.runCount--;
                    // 尝试进行下一次任务
                    this.request();
                });
        }
    }
}

// 测试
const scheduler = new Scheduler(2);
const addTask = (time, data) => {
    scheduler.add(time, data);
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// 输出结果 2 3 1 4
