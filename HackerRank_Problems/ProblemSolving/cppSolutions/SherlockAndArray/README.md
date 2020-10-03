<h1>Sherlock and Array</h1>
Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left
is equal to the sum of all elements to the right. For instance, given the array <b>arr=[5,6,8,11], 8</b> 
is between two subarrays that sum to <b>11</b>. If your starting array is <b>[1]</b>, that element satisfies the rule as left and right sum to 0.<br>
You will be given arrays of integers and must determine whether there is an element that meets the criterion.

<b>Function Description</b>

Complete the balancedSums function in the editor below. It should return a string, either YES if there is an element meeting the criterion or NO otherwise.

balancedSums has the following parameter(s):

    arr: an array of integers

<b>Input Format</b>

The first line contains <b>T</b>, the number of test cases.

The next <b>T</b> pairs of lines each represent a test case.
- The first line contains , the number of elements in the array .
- The second line contains space-separated integers where

<b>Output Format</b>

For each test case print <b>YES</b> if there exists an element in the array, such that the sum of the 
elements on its left is equal to the sum of the elements on its right; otherwise print <b>NO</b>.

<b>Sample Input 0</b>

2<br>
3<br>
1 2 3<br>
4<br>
1 2 3 3

<b>Sample Output 0</b>

NO<br>
YES<br>

