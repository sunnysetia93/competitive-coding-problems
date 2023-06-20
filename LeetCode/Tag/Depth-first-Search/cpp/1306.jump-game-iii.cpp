class Solution {
public:
    bool canReach(vector<int>& arr, int start) {
        if (start < 0 || start >= arr.size() || arr[start] < 0)
            return false;
        int jump = arr[start];
        arr[start] = -arr[start];   // a way of marking the index as visited
        return jump == 0 || canReach(arr, start-jump) || canReach(arr, start+jump);
    }
};