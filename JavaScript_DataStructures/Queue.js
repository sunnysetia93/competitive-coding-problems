const Queue = function(){
    storage = [];

    this.enqueue = function(value){
        storage.push(value);
    }
    this.dequeue = function(){
        storage.shift();
    }
    this.front = function(){
        return storage[0];
    }
    this.rear = function(){
        return storage[this.size()-1];
    }
    this.size = function(){
        return storage.length;
    }
    this.isEmpty = function(){
        return (storage.length===0);
    }
}

const q = new Queue();
console.log(q);
q.enqueue(10);
q.enqueue(20);
console.log(q.front());
console.log(q.rear());
q.dequeue();
console.log('after dequeuing once');
console.log(q.front());
console.log(q.rear());
console.log("size:",q.size());

