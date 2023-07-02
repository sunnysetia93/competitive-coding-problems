class MinHeap {
  constructor() {
    this.heap = [];
  }

  print(){
    console.log(this.heap);
  }

  size() {
    return this.heap.length;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.heap[this.getParentIndex(childIndex)] != null;
  }

  hasLeftChildIndex(index){
    return this.heap[this.getLeftChildIndex(index)] != null;
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  hasRightChildIndex(index){
    return this.heap[this.getRightChildIndex(index)] != null;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    if (this.heap.length <= 1)
      return;
    let index = this.size() - 1;
    while (this.hasParent(index) && this.heap[this.getParentIndex(index)] >= this.heap[index]) {
      // swap values;
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
    return;
  }

  remove(){
    if(this.size() === 0)
      return;
    let item = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  heapifyDown(){
    let index = 0;
    while(this.hasLeftChildIndex(index)){
      let smallerChildIndex = this.getLeftChildIndex(index);
      if(this.hasRightChildIndex(index) && this.heap[smallerChildIndex] > this.heap[this.getRightChildIndex(index)]){
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if(this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      }
      else{
        this.swap(index,smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

const minHeap = new MinHeap();
console.log(minHeap.getParentIndex(2));
console.log(minHeap.getLeftChildIndex(0));
minHeap.insert(50);
minHeap.insert(30);
minHeap.insert(20);
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(8);
minHeap.insert(16);
minHeap.insert(60);
minHeap.print();
minHeap.remove();
minHeap.print();
