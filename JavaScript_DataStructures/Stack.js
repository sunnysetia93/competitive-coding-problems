const Stack = function(){
    this.top = 0;
    storage = {};

    this.push = function(value){
        storage[this.top]=value;
        this.top++;
    }
    this.pop = function(){
        if(this.top==0)
            return undefined;

        this.top--;
        let popped = storage[this.top];
        delete storage[this.top];
        return popped;
    }

    this.peek = function(){
        if(this.top==0)
            return undefined;
        
        return storage[this.top-1];
    }

    this.size = function(){
        return this.top;
    }
}

const s = new Stack();
// console.log(s);
s.push(10);
s.push(20);
console.log(s.peek());
s.pop();
console.log(s.peek());