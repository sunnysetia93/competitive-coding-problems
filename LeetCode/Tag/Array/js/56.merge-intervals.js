/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b)=> a[0] - b[0]);
    for(let i=1;i<intervals.length;i++){
        const [prevStart, prevEnd] = intervals[i-1];
        const [currStart, currEnd] = intervals[i];

        if(prevEnd >= currStart){
            // remove prev value
            // update current value with new intervals

            intervals[i-1] = null;
            intervals[i][0] = Math.min(prevStart,currStart);
            intervals[i][1] = Math.max(prevEnd,currEnd);
        }
    }
    return intervals.filter(i=>!!i);
};
