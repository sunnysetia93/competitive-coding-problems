class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>(); 
        for (int x : nums) {
            minHeap.add(x);
            if (minHeap.size() > k)
                minHeap.poll();
        }
        return minHeap.peek();
    }
}