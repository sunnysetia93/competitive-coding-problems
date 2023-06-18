/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const powerSet = [];
    const map = {};
    function addToPowerSet(arr, index){
        const str = arr.length ? arr.sort().join() :'';
        if(map[str] == null){
            powerSet.push(arr);
            map[str] = true;
        }
        for(let i=index; i < nums.length; i++){
            addToPowerSet([...arr,nums[i]], i+1);
        }
    }

    addToPowerSet([],0);
    return powerSet;
};
