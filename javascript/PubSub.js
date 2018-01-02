var publisher = {
    subscribers: {
        any: []
    },
    subscribe: (type, fn) => {
        if (this.subscribers[type]) {
            return this.subscribers[type].push(fn);
        }

        this.subscribers[type] = [].push(fn);
    },
    unsubscribe: (type, fn) => {
        if (this.subscribers[type]) {
            if (fn) {
                const len = this.subscribers[typs].length;

            }
            return this.subscribers[type] = [];
        }
        return null;
    },
    publish: (type) => {

    },
};


var event = {
    events: {

    },
    on(type, fn) {
        if (this.events[type]) {
            return this.events[type].push(fn);
        }
        this.events[type] = [];
        return this.events[type].push(fn);
    },
    one(type, fn) {
        this.on(type, function on(...args) {
            this.off(type, on);
            fn.apply(this, args);
        });
    },
    off(type, fn) {
        const events = this.events[type];
        if (events) {
            if (fn) {
                const len = events.length;
                for (let i = 0; i < len; i++) {
                    if (events[i] === fn) {
                        events.splice(i, 1);
                    }
                }
            } else {
                this.events[type] = [];
            }
        }
    },
    emit(type, ...args) {
        const events = this.events[type];
        const len = events.length;
        for (let i = 0; i < len; i++) {
            events[i].apply(this, args);
        }
    },
}