var FreqStack = function() {
    this.count = {};
    this.maxCount = 0;
    this.groups = {}
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    let cnt;
    if(val in this.count){
        cnt = this.count[val];
        this.count[val] = cnt + 1;
    }
    else{
        this.count[val] = 1;
        cnt = 0;
    }

    let key = String(cnt+1);
    this.maxCount = Math.max(this.maxCount,cnt+1);
    if(key in this.groups){
        this.groups[key].push(val);
    }
    else{
        this.groups[key] = [val];
    }

};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let element = this.groups[this.maxCount].pop();
    this.count[element]--;
    if(this.groups[this.maxCount].length === 0){
        this.maxCount--;
    }
    return element;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
