/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const powerSet = [];

    addToPowerSet = (arr,index) => {
        console.log(arr,index);
        powerSet.push(arr);
        for(let i=index;i < nums.length; i++){
            addToPowerSet([...arr,nums[i]], i+1);
        }
    }

    addToPowerSet([],0);
    return powerSet;
    
};


/*

The provided code generates all the subsets of a given array nums. Let's analyze the space and time complexity of this code.

The space complexity of the code is determined by the amount of additional space used during the execution. In this case, the primary contributor to space complexity is the powerSet array, which stores all the generated subsets. The size of the powerSet array will be 2^n, where n is the length of the nums array. This is because for each element in the nums array, there are two possibilities: either the element is included in a subset or it is not. Therefore, the space complexity of the code is O(2^n).

The time complexity of the code can be analyzed by considering the number of operations performed. The code uses a recursive approach to generate subsets. For each element in the nums array, it explores two possibilities: including the element in the current subset or excluding it. This results in a total of 2^n subsets being generated. For each subset, the code performs a constant amount of operations to append it to the powerSet array. Therefore, the time complexity of the code is O(2^n).

In summary:

Space complexity: O(2^n)
Time complexity: O(2^n)

*/
