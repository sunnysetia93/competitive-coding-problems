/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let max = 0;
    while(left < right){
        let w = right - left;
        let h = Math.min(height[left],height[right]);
        max = Math.max(max, w * h);

        if(height[left] >= height[right]){
            right--;
        }
        else{
            left++;
        }
    }
    return max;
};
