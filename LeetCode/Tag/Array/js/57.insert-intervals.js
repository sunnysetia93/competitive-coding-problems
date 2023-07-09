/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let left = []
    let right = [];
    for(let currInterval of intervals){
        const [currStart, currEnd] = currInterval;
        const [newStart,newEnd] = newInterval;
        if(currEnd < newStart){ // left side
            left.push(currInterval)
        }
        else if(newEnd < currStart){ //right side
            right.push(currInterval);
        }
        else {
            newInterval = [Math.min(currStart,newStart),Math.max(currEnd,newEnd)];
        }
    }
    return [...left,newInterval,...right];
};
