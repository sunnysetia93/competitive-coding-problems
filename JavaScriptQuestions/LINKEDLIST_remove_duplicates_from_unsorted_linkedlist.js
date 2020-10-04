const {LinkedList} = require("../JavaScriptDataStructureImplementation/LinkedList")();

function removeDuplicates(list){
    if(list==null || list.head==null){
        console.log("Error: LinkedList is empty");
        return;
    }
    
    const hashTable = {};
    let temp = list.head;
    let prev = temp.head;
    while(temp!=null){
        if(hashTable[temp.data]){
            prev.next=temp.next;
        }
        else{
            hashTable[temp.data]=1;
            prev=temp;
        }
        temp=temp.next;
    }
}

function removeDuplicates_Without_Using_Buffer(list){
    if(list==null || list.head==null){
        console.log("Error: LinkedList is empty");
        return;
    }

    let curr = list.head;
    while(curr!=null){
        let runner = curr;
        while(runner.next!=null){
            if(runner.next.data===curr.data){
                runner.next=runner.next.next;
            }
            else{
                runner=runner.next;
            }
        }
        curr=curr.next;
    }
}
// main
(()=>{
    let list = new LinkedList();
    list.add(1);
    list.add(5);
    list.add(1);
    list.add(2);
    list.add(5);
    list.add(3);
    list.print();
    // removeDuplicates(list);
    // list.print();
    removeDuplicates_Without_Using_Buffer(list);
    list.print();

})();