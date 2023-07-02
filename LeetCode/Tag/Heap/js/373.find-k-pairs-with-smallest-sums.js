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
    while (this.hasParent(index) && this.heap[this.getParentIndex(index)].sum >= this.heap[index].sum) {
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
      if(this.hasRightChildIndex(index) && this.heap[smallerChildIndex].sum > this.heap[this.getRightChildIndex(index)].sum){
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if(this.heap[index].sum < this.heap[smallerChildIndex].sum) {
        break;
      }
      else{
        this.swap(index,smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const pairs = []; 
    const minHeap = new MinHeap();
    const visited = new Set();
    let currCount = 0;

    const addToHeap = (x,y) => {
        minHeap.insert({
            indexes:[x,y],
            sum: nums1[x] + nums2[y]
        });
        visited.add(`${x},${y}`);
    }

    minHeap.insert({
        indexes:[0,0],
        sum: nums1[0] + nums2[0]
    }); // or addToHeap(0,0);
    visited.add(`0,0`);

    while(currCount < k && minHeap.size() > 0){
        const pair = minHeap.remove();
        currCount += 1;
        const [i,j] = pair.indexes;
        pairs.push([nums1[i],nums2[j]]);

        // add index [i,j+1] and [i+1,j] if not already added

        if(i+1 < nums1.length && !visited.has(`${i+1},${j}`)){
            addToHeap(i+1,j);
        }

        if(j+1 < nums2.length && !visited.has(`${i},${j+1}`)){
            addToHeap(i,j+1);
        }

    }

    return pairs;
};
