/**
 * The difference between search-in-rotated-sorted-array and this problem is that due to the existence
 * of duplicates, we can have nums[left] == nums[mid] and in that case,
 * the first half could be out of order (e.g. [3 1 2 3 3 3 3]) or
 * the second half could be out of order (e.g. [1, 1, 3, 1]) and we have to deal this case separately.
 * In that case, it is guaranteed that nums[right] also equals to nums[mid].
 * So if nums[mid]== nums[left] == nums[right] before the original logic, we can move left and right
 * both towards the middle by 1. and repeat.
 */

class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int l = 0, r = nums.size()-1, mid;
        
        while(l <= r)
        {
            mid = l + (r-l)/2;
            if(nums[mid] == target) {
                return true;
            }

            // the only difference from the first one, trickly case, just updat left and right
            if((nums[l] == nums[mid]) && (nums[mid] == nums[r]) ) {
                ++l;
                --r;
            } else if(nums[l] <= nums[mid]) {
                if((nums[l] <= target) && (target < nums[mid])) {
                    r = mid-1;
                } else {
                    l = mid+1;
                }
            } else if((nums[mid] < target) && (target <= nums[r])) {
                l = mid+1;
            } else {
                r = mid-1;
            }
        }
        return false;
    }
};