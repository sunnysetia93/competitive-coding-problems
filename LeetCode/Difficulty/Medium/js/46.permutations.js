/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const final = [];
    function findPermutations(arr,res){
        if(res.length === nums.length) {
            final.push(res);
            return;
        }

        for(let i=0;i<arr.length;i++){
            // const newArr = arr.filter(x=>x!=n);
            const newArr = arr.slice(0, i).concat(arr.slice(i+1))
            findPermutations(newArr,[...res,arr[i]]);
        }
    }

    findPermutations(nums,[]);
    return final;
};
