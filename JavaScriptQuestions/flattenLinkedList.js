// https://www.geeksforgeeks.org/flattening-a-linked-list/amp/
let head = null;

class Node {
    constructor(val) {
        this.data = val;
        this.bottom = null;
        this.next = null;
    }
}


function push(head_ref, data) {
    /*
     * 1 & 2: Allocate the Node & Put in the data
     */
    let new_node = new Node(data);
    /* 3. Make next of new Node as head */
    new_node.bottom = head_ref;
    /* 4. Move the head to point to new Node */
    head_ref = new_node;
    /* 5. return to link it back */
    return head_ref;
}

function printList() {
    let temp = head;
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.bottom;
    }
    console.log();
}

// An utility function to merge two sorted linked lists

function merge(a, b) {
    if(!a)
        return b;
    if(!b)
        return a;

    let result;

    if(a.data < b.data){
        result = a;
        result.bottom = merge(a.bottom,b);
    }
    else {
        result = b;
        result.bottom = merge(a,b.bottom);
    }

    result.next = null;
    return result;
}

function flatten(root) {
    if (!root || !root.next) {
        return root;
    }

    root.next = flatten(root.next);
    root = merge(root, root.next);
    return root;
}


head = push(head, 30);
head = push(head, 8);
head = push(head, 7);
head = push(head, 5);
head.next = push(head.next, 20);
head.next = push(head.next, 10);
head.next.next = push(head.next.next, 50);
head.next.next = push(head.next.next, 22);
head.next.next = push(head.next.next, 19);
head.next.next.next = push(head.next.next.next, 45);
head.next.next.next = push(head.next.next.next, 40);
head.next.next.next = push(head.next.next.next, 35);
head.next.next.next = push(head.next.next.next, 28);


// flatten the list
head = flatten(head);
printList();
