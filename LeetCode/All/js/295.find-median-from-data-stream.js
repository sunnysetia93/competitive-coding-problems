
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  // we store all the smaller values in the Max Heap
  this.maxHeap = new Heap(Heap.maxComparator);
  // we store all the larger values in the Min Heap
  this.minHeap = new Heap(Heap.minComparator);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // if the num is less than our max heap (small list), we insert it in our small list, otherwise it will go into the min heap (large list)
  // larger values? -> min heap
  // smaller values? -> max heap
  if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
    this.maxHeap.add(num);
  } else {
    this.minHeap.add(num);
  }

  // if we have a mismatch in size, of more than one
  // we rebalance the two heaps by removing the root element (max/min value)
  // our goal is to keep the heaps always equals in size for even list of numbers, or with a difference of 1 for odd list of numbers
  if (this.maxHeap.size - this.minHeap.size > 1) {
    // max heap is greater than min heap
    // remove value from max heap and insert into min heap
    this.minHeap.add(this.maxHeap.poll());
  } else if (this.minHeap.size - this.maxHeap.size > 1) {
    // min heap is greater than max heap
    // remove value from min heap and insert into max heap
    this.maxHeap.add(this.minHeap.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  // to find a median, we have the following two scenarios:

  if (this.maxHeap.size > this.minHeap.size) {
    // 1. our max heap is greater than minheap
    // this means that we have an odd numbered list, so we get the "excess" number from our max heap, which corresponds to the median
    return this.maxHeap.peek();
  } else if (this.maxHeap.size < this.minHeap.size) {
    // 2 our min heap is greater than max heap
    // this means that we have an odd numbered list, so we get the "excess" number from our min heap, which corresponds to the median
    return this.minHeap.peek();
  } else {
    // 3. our list is of even numbers, therefore the size of our
    // heaps will be the same, and we can get their root values
    // and divide it by 2
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
};

/**
 *  custom Heap class
 */
class Heap {
  constructor(comparator) {
    this.size = 0;
    this.values = [];
    this.comparator = comparator || Heap.minComparator;
  }

  add(val) {
    this.values.push(val);
    this.size++;
    this.bubbleUp();
  }

  peek() {
    return this.values[0] || null;
  }

  poll() {
    const max = this.values[0];
    const end = this.values.pop();
    this.size--;
    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (this.comparator(this.values[index], this.values[parent]) < 0) {
      [this.values[parent], this.values[index]] = [
        this.values[index],
        this.values[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0,
      length = this.values.length;

    while (true) {
      let left = null,
        right = null,
        swap = null,
        leftIndex = index * 2 + 1,
        rightIndex = index * 2 + 2;

      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
      }

      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (swap !== null && this.comparator(right, left) < 0) ||
          (swap === null && this.comparator(right, this.values[index]))
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;

      [this.values[index], this.values[swap]] = [
        this.values[swap],
        this.values[index],
      ];
      index = swap;
    }
  }
}

/**
 *  Min Comparator
 */
Heap.minComparator = (a, b) => {
  return a - b;
};

/**
 *  Max Comparator
 */
Heap.maxComparator = (a, b) => {
  return b - a;
};
