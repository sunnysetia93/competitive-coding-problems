const debounce = (fn, delay) => {
    let timer;
    const wrapper = (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
    return wrapper;
}

const debounced = debounce(console.log, 1000);
debounced(1);
debounced(2);
debounced(3);
