class FreqStack {
    
    unordered_map<int, stack<int>> stackOfFreq;
    unordered_map<int, int> freqOf;
    int maxFreq;
    
public:
    FreqStack() : maxFreq(0) {}
    
    void push(int x) {
        int freq = ++freqOf[x];
        stackOfFreq[freq].push(x);
        maxFreq = max(maxFreq, freq);
    }
    
    int pop() {
        stack<int>& st = stackOfFreq[maxFreq];
        int result = st.top(); st.pop();
        --freqOf[result];
        if (st.empty()) --maxFreq;
        return result;
    }
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack* obj = new FreqStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 */