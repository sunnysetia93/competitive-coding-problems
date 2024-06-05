class Emitter {
    // write your code here
    constructor() {
        this.events = new Map();
    }

    subscribe(event_name, callbackFn) {
        if (!this.events.has(event_name)) {
            this.events.set(event_name, new Map());
        }

        const id = Symbol();
        const subscriptions = this.events.get(event_name);
        subscriptions.set(id, callbackFn);

        return {
            release: () => {
                if (subscriptions.has(id)) {
                    subscriptions.delete(id)
                } else {
                    throw new TypeError("already released");
                }
            },
        };
    }

    emit(event_name, ...args) {
        if (this.events.has(event_name)) {
            const callbacksMap = this.events.get(event_name);
            for (const [id, fn] of callbacksMap) {
                fn(...args)
            }
        }
    }
}

const emitter = new Emitter();

const sub1 = emitter.subscribe("sub-test", () => {
    console.log("running sub-test callback - 1");
});


const sub2 = emitter.subscribe("sub-test", () => {
    console.log("running sub-test callback - 2");
});

emitter.emit('sub-test')
sub1.release();
emitter.emit('sub-test')

/*

OUTPUT:

running sub-test callback - 1
running sub-test callback - 2
running sub-test callback - 2

* */



