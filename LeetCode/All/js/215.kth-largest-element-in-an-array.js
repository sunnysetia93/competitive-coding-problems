class MaxHeap {
  constructor(nums) {
    this.heap = nums.length ? nums : [];
  }

  print(){
    console.log(this.heap);
  }

  size() {
    return this.heap.length;
  }

  reset() {
    this.heap = [];
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
    while (this.hasParent(index) && this.heap[this.getParentIndex(index)] <= this.heap[index]) {
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

  peek() {
    if(this.size() === 0)
      return;
    let item = this.heap[0];
    return item;
  }

  heapifyDown(){
    let index = 0;
    while(this.hasLeftChildIndex(index)){
      let greaterChildIndex = this.getLeftChildIndex(index);
      if(this.hasRightChildIndex(index) && this.heap[greaterChildIndex] < this.heap[this.getRightChildIndex(index)]){
        greaterChildIndex = this.getRightChildIndex(index);
      }
      if(this.heap[index] > this.heap[greaterChildIndex]) {
        break;
      }
      else{
        this.swap(index,greaterChildIndex);
      }
      index = greaterChildIndex;
    }
  }

  buildHeap() {
    if(this.heap.length === 0)
        return [];

    for(let index=this.heap.length-1; index >= 0; index--){
        this.heapify(index);
    }
  }

  heapify(index){
    if(this.hasLeftChildIndex(index)){
        let greaterChildIndex = this.getLeftChildIndex(index);
        if(this.hasRightChildIndex(index) && this.heap[greaterChildIndex] < this.heap[this.getRightChildIndex(index)]){
            greaterChildIndex = this.getRightChildIndex(index);
        }

        if(this.heap[index] < this.heap[greaterChildIndex]) {
          this.swap(index,greaterChildIndex);
          this.heapify(greaterChildIndex);
        }
        
    }
  }

}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new MaxHeap(nums);
    heap.buildHeap();
    for(let i=0;i<k-1;i++){
      heap.remove();
    }

    return heap.remove();
};


// another approach
// https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/584913/intuitive-javascript-solution-with-quick-sort/
