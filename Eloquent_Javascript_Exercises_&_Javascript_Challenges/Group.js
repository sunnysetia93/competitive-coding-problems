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
