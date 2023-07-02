class MaxHeap {
  constructor() {
    this.heap = [];
  }

  print(){
    // console.log(this.heap);
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
    while (this.hasParent(index) && this.heap[this.getParentIndex(index)].count <= this.heap[index].count) {
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
      if(this.hasRightChildIndex(index) && this.heap[greaterChildIndex].count < this.heap[this.getRightChildIndex(index)].count){
        greaterChildIndex = this.getRightChildIndex(index);
      }
      if(this.heap[index].count > this.heap[greaterChildIndex].count) {
        break;
      }
      else{
        this.swap(index,greaterChildIndex);
      }
      index = greaterChildIndex;
    }
  }
}


/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastIntervalWithHeap = function(tasks, n) {
  const map = {}
  const maxHeap = new MaxHeap();
  let arr = [];
  let len = tasks.length;
  for(const task of tasks){
    if(task in map){
      map[task]++;
    }
    else{
      map[task] = 1;
    }
  }
  // console.log("map", map);
  while(true){
    const entries = Object.entries(map);
    for(const [key,value] of entries){
      if(value > 0){
        maxHeap.insert({key,count: value});
      }
    }
    let visited = new Set();
    maxHeap.print();

    let tempN = n;
    while(tempN >= 0){
      const element = maxHeap.remove();
      // console.log(element);
      if(element == null){
        arr.push('-');
      }
      else if(visited.has(element.key)){
        // console.log("skip");
        arr.push('-');
      }
      else{
        arr.push(element.key);
        visited.add(element.key);
        map[element.key]--;
        len--;
      }
      tempN--;

      if(len <= 0){
        // console.log(arr);
        return arr.length;
      }
    }

    // console.log(tempN, map, arr, visited)
    if(tempN <= 0){
      tempN = n;
      maxHeap.reset();
      visited = new Set();
    }
  }

};



// optimized solution without using heap

var leastInterval = function(tasks, n) {
  // Create a frequency array to keep track of the count of each task
  const freq = Array(26).fill(0);
  for (const task of tasks) {
    freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }
  // Sort the frequency array in non-decreasing order
  freq.sort((a, b) => a - b);
  // Calculate the maximum frequency of any task
  const maxFreq = freq[25] - 1;
  // Calculate the number of idle slots that will be required
  let idleSlots = maxFreq * n;
  // Iterate over the frequency array from the second highest frequency to the lowest frequency
  for (let i = 24; i >= 0 && freq[i] > 0; i--) {
    // Subtract the minimum of the maximum frequency and the current frequency from the idle slots
    idleSlots -= Math.min(maxFreq, freq[i]);
  }
  // If there are any idle slots left, add them to the total number of tasks
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
}
