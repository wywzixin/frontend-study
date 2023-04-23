class EventEmitter {
    constructor() {
        this.handlers = {};
    }
    on(eventName, cb) {
        // this.emits[type]  = this.emits[type] || []
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(cb);
    }
    emit(eventName, ...args) {
        if (this.handlers[eventName]) {
            const handlers = this.handlers[eventName].slice();
            handlers.forEach(callback => {
                callback(...args);
            });
        }
    }
    off(eventName, cb) {
        if (!this.handlers[eventName]) return;
        const callbacks = this.handlers[eventName];
        const index = callbacks.indexOf(cb);
        if (index > -1) {
            callbacks.splice(index, 1);
        }
    }
    once(eventName, cb) {
        const wrapper = (...args) => {
            cb(...args);
            this.off(eventName, wrapper);
        };
        this.on(eventName, wrapper);
    }
}
