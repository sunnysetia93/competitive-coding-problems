
var nextGreatestLetter = function(letters, target) {
    
    let len = letters.length;
    let start = 0, end = len, mid;
    
    if(target >= letters[len-1])
        return letters[0];
    
    while(start < end){
        mid = Math.floor((start+end)/2);
        if(letters[mid] <= target)
            start = mid+1;
        else
            end = mid;
    }
    
    return letters[end];
    
};
