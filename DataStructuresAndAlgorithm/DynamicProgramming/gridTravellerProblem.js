const gridTraveller = (n, m, memo = {}) => {
    if (n === 1 && m === 1) return 1;
    if (n <= 0 || m <= 0) return 0;
    let key = n + ';' + m;
    if (key in memo) return memo[key];

    memo[key] = gridTraveller(n - 1, m, memo) + gridTraveller(n, m - 1, memo);
    return memo[key];
}

console.log(gridTraveller(1, 1));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(100, 100));