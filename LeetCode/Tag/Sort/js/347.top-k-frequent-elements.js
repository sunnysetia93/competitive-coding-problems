/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = {};
    const buckets = new Array(nums.length + 1);

    for(let i=0;i<nums.length; i++){
      freqMap[nums[i]] = freqMap[nums[i]] == null ? 1 : freqMap[nums[i]] + 1;
    }

    const entries = Object.entries(freqMap);
    for(let [num,freq] of entries){
      if(buckets[freq] == null)
        buckets[freq] = [num]
      else 
        buckets[freq].push(num);
    }
    const result = []
    for(let i=buckets.length - 1;i>=0;i--){
      if(buckets[i] && buckets[i].length){
        for(let value of buckets[i]){
          result.push(value);
          k--;

          if(k <= 0){
            return result;
          }
        }
      }
    }

    return result;
};
