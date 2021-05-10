/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const onesPosArr = [];
    for(let i=0;i<boxes.length;i++){
        const ch = boxes.charAt(i);
        if(ch === '1')
            onesPosArr.push(i);
    }

    const result = [];
    let sum = 0;
    for(let i=0;i<boxes.length;i++){
        sum = 0;
        for(let pos of onesPosArr){
            sum += Math.abs(i-pos);
        }
        result.push(sum);
    }

    return result;

};

/**
 * Approach 2
 * From Discuss Tab - O(n)
 */
var minOperations = function(boxes) {
    const result = Array(boxes.length).fill(0);

    // First we make one pass through the array (left to right).
    // For each index, we calculate the moves needed to get every
    // non-empty box on the left of the current index to the current index.

    // At each i in boxes:
    //   - add the running sum to result[i]
    //   - increment the notEmpty box count if the current box is '1'
    //   - add the previously seen notEmpty boxes (including current index) to the runningSum

    let notEmpty = 0;
    let runningSum = 0;

    for (let i = 0; i < boxes.length; ++i) {
        result[i] += runningSum;
        if (boxes[i] === '1') ++notEmpty;
        runningSum += notEmpty;
    }


    // Make one more pass through the array (right to left).
    // The operations are identical to the first loop, except that
    // this pass calculates the moves needed to get every non-empty box
    // on the right of each index to the current index.

    notEmpty = 0;
    runningSum = 0;

    for (let i = boxes.length - 1; i >= 0; --i) {
        result[i] += runningSum;
        if (boxes[i] === '1') ++notEmpty;
        runningSum += notEmpty;
    }

    return result;

};

