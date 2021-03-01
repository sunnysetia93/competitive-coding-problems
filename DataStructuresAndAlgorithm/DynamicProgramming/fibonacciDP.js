const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    let i = 0;
    for (; i <= n + 1; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}

console.log(fib(3));
console.log(fib(5));
console.log(fib(8));
console.log(fib(10));
console.log(fib(50));
