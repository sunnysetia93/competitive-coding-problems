/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    if(intervals.length <= 1)
        return 0;

    let initialIntervals = intervals.length;
    for(let i = 1;i<intervals.length;i++){
        let prev = intervals[i-1];
        let cur = intervals[i];
        if(cur[0] < prev[1]) {
            intervals[i] = intervals[i-1];
            intervals[i-1] = null;
        }
    }
    return initialIntervals - intervals.filter(i=>!!i).length;
};
