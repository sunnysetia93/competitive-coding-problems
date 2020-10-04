/*
    We have a collection of stones, each stone has a positive integer weight.
    Each turn, we choose the two heaviest stones and smash them together.
    Suppose the stones have weights x and y with x <= y.  The result of this smash is:

    If x == y, both stones are totally destroyed;
    If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
    At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

    Example 1:
        Input: [2,7,4,1,8,1]
        Output: 1

    Explanation:
        We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
        we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
        we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
        we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.


    Note:
        1 <= stones.length <= 30
        1 <= stones[i] <= 1000
*/
const findTopTwoStones = (stones) =>{
    let x = 0,
        y = 0,
        i = 0;
    for(; i<stones.length; i++){
        const stone = stones[i];
        if(stone > stones[x]){
            y = x;
            x = i;
        }
        else if(stone > stones[y] || x == y){
            y = i;
        }
    }

    console.log(stones[x],stones[y]);
    return [x,y];
}
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length>1){
        const [posX,posY] = findTopTwoStones(stones);

        if(stones[posX] === stones[posY]){
            stones[posX] = undefined;
            stones[posY] = undefined;
        }
        else if(stones[posX] > stones[posY]){
            stones[posX] = stones[posX] - stones[posY];
            stones[posY] = undefined;
        }
        else{
            stones[posY] = stones[posY] - stones[posX];
            stones[posX] = undefined;
        }
        stones = stones.filter(s=>s!=undefined);
    }

    return (stones.length === 1) ? stones[0] : 0;
};

// using a HEAP can give better results
// or simply SORT and POP