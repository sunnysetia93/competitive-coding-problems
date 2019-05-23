// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

// Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

class Group{
    constructor(){
        this.set = [];
    }
    add(val){
        if(!this.has(val))
            this.set.push(val);
    }

    delete(val){
        if(this.has(val)){
            let index = this.set.indexOf(val);
            this.set.splice(index,1);
        }
    }
    has(val){
        return this.set.includes(val);
    }
    
    static from(obj){
        let group = new Group();
        for(let val of obj){
            group.add(val);
        }

        return group
    }
}

let group = new Group();
console.log(group)
group.add(3);
group.add(5);
group.add(9);
console.log(group)
console.log("Has 5 :",group.has(5))
group.delete(5)
console.log(group)
console.log("Has 5 :",group.has(5))

let fromGroup = Group.from([10,20]);
console.log(fromGroup);
