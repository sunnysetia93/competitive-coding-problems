//https://leetcode.ca/2023-07-22-2676-Throttle/

const throttle = (fn, time) => {
    let pending = false;
    let nextArgs;

    const wrapper = (...args) => {
        nextArgs = args;
        if (!pending) {
            fn(...args);
            pending = true;
            nextArgs = undefined;
            setTimeout(() => {
                pending = false;
                if (nextArgs) {
                    fn(...nextArgs);
                }
            }, time);
        }
    }
    return wrapper;
}

const throttled = throttle(console.log, 1000);
throttled(`log0`); //printed
throttled(`log1`); // ignored as less than 1000 ms
throttled(`log2`); // printed as last call before 1000 ms
setTimeout(() => throttled(`log3`), 1500) // printed

