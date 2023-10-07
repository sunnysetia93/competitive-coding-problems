/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0, right = 0;
    let basket = {};
    let max = 0;
    while(right < fruits.length){
        basket[fruits[right]] = basket[fruits[right]] ? basket[fruits[right]] + 1 : 1;
        while(Object.keys(basket).length > 2){
            basket[fruits[left]]--;
            if(basket[fruits[left]] === 0){
                delete basket[fruits[left]];
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};
