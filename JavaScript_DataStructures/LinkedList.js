class LinkedListNode{
    
    constructor(val){
        this.data=val;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(value){
        let newNode = new LinkedListNode(value);
        if(this.head==null){
            this.head=newNode;
        }
        else{
            let temp = this.head;
            while(temp.next!=null){
                temp=temp.next;
            }
            temp.next=newNode;
        }
    }

    removeFront(){
        if(this.head==null){
            console.log("Linkedlist is empty!");
            return;
        }

        let temp = this.head.next;
        if(temp==null)
            this.head=null;
        else
            this.head=temp;
        
    }

    removeLast(){
        if(this.head==null){
            console.log("Linkedlist is empty!");
            return;
        }

        let temp = this.head;
        let prev = this.head;
        while(temp.next!=null){
            prev=temp;
            temp=temp.next;
        }

        prev.next=null;
        temp=null;
    }

    print(){
        let result = "";
        if(this.head==null){
            console.log("Linkedlist is empty!");
            return;
        }
        
        let temp = this.head;
        while(temp!=null){
            result += temp.data + " => ";
            temp=temp.next;
        }

        result += "null"
        console.log(result);
    }
}

function main(){
    
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.print();
    linkedList.removeFront();
    linkedList.print();
    linkedList.removeLast();
    linkedList.print();
}

// main();

module.exports = {
    LinkedListNode,
    LinkedList
}
