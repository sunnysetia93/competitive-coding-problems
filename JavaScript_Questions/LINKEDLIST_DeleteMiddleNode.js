// Delete middle node of a linked list.
// eg: 
//      1 => 2 => 3 => 4 => 5 => null
//      after removing middle node =>
//      1 => 2 => 4 => 5 => null 
// 3 got deleted

const {LinkedList} = require("../JavaScript_DataStructures/LinkedList")();

function deleteMiddleNode(list){
    if(list==null || list.head==null){
        console.log("List is empty!");
        return;
    }
    
    let curr = list.head;
    let faster = list.head;
    let prev = curr;

    while(faster!=null && faster.next!=null){
        prev=curr;
        faster=faster.next.next;
        curr=curr.next;
    }
    prev.next=curr.next;
    return;
}

(()=>{
    let list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.print();
    deleteMiddleNode(list);
    console.log("after removing middle node => ");
    list.print();
    

})();