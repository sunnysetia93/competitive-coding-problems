/**
 * Two people climb from left and from right separately.
 * If they are climbing the same mountain,
 * they will meet at the same point.
 */
class Solution {
    public boolean validMountainArray(int[] arr) {
        int n = arr.length, i = 0, j = n-1;
        while (i < n-1 && arr[i] < arr[i+1]) ++i;
        while (j > 0 && arr[j-1] > arr[j]) --j;
        return i > 0 && i == j && j < n-1;
    }
}