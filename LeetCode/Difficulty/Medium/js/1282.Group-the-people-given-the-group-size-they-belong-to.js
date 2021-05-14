/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {

    const obj = {}, finalArray = [], len = groupSizes.length;
    let i=0,person, currGroupSize;

    for(i;i<len;i++){
        person = i;
        currGroupSize = groupSizes[i];

        if(currGroupSize in obj){
            let currGroupCapacity = obj[currGroupSize].length;
            if(currGroupCapacity < currGroupSize){
                obj[currGroupSize].push(i);
            }
        }else{
            obj[currGroupSize] = [i];
        }

        if(obj[currGroupSize].length === currGroupSize){
            finalArray.push([...obj[currGroupSize]]);
            obj[currGroupSize] = [];
        }

    }

    return finalArray;

};
