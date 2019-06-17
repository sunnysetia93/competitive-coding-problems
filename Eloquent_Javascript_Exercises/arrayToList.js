// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

// function append(list)

function arrayToList(arr){
    let list = null;
    for(let i=arr.length-1;i>=0;i--){
        list = {val: arr[i], rest:list };
    }
    return list;
}

function printList(head,action){
    let list = head;
    while(list!=null){
        action(list);
        list=list.rest;
    }
}

let head = arrayToList([1,2,3,4]);
console.log(head);

printList(head,(node)=>{
    console.log(node.val)
});
