import {
  Interval,
} from '/opt/node/lib/lintcode/index.js';

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  canAttendMeetings(intervals) {
    intervals.sort((a,b) => a.start - b.start);

    for(let i=1;i<intervals.length;i++){
        const prev = intervals[i-1];
        const curr = intervals[i];
        if(prev.end > curr.start){
            return false;
        }
    }

    return true;
  }
}
