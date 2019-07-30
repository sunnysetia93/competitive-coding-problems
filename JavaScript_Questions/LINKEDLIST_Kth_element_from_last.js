const {LinkedList} = require('../JavaScript_DataStructures/LinkedList')();

function KthFromLast_Recursive(head,k){
    if(head==null)
        return 0;
    
    let updatedCounter = KthFromLast_Recursive(head.next,k) + 1;
    if(updatedCounter===k){
        console.log(k + "th/nd/rd last element is ",head.data);
    }
    return updatedCounter;
}

function KthFromLast(list,k){
    if(list==null || list.head==null){
        return {
            error:true,
            message:"List is empty"
        }
    }
    let curr = list.head; 
    let ahead = list.head;
    let count = 0;
    while(count<k && ahead!=null){
        ahead=ahead.next;
        count++;
    }

    while(ahead!=null){
        curr=curr.next;
        ahead=ahead.next;
    }

    return curr;
}
(()=>{
    let list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.print();
    KthFromLast_Recursive(list.head,2);
    console.log(KthFromLast(list,2));
})();