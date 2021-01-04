class Solution {
public:
    int nextGreaterElement(int n) {
        string num = to_string(n);
        int i = num.length()-1;
        while (i > 0 && num[i-1] >= num[i]) --i;
        if (i == 0) return -1;

        int j = i-1;
        i = num.length()-1;
        while (num[i] <= num[j]) --i;
        swap(num[j], num[i]);
        reverse(num.begin()+j+1, num.end());

        long long result = stoll(num);
        return result <= INT_MAX ? result : -1;
    }
};