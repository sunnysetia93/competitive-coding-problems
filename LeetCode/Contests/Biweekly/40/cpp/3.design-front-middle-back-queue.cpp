class FrontMiddleBackQueue {
    deque<int> A, B;
    
    void rebalance() {
        if (A.size() > B.size()+1) {
            B.push_front(A.back());
            A.pop_back();
        } else if (B.size() > A.size()) {
            A.push_back(B.front());
            B.pop_front();
        }
    }
    
public:
    FrontMiddleBackQueue() {}
    
    void pushFront(int val) {
        A.push_front(val);
        rebalance();
    }
    
    void pushMiddle(int val) {
        if (A.size() > B.size()) {
            B.push_front(A.back());
            A.pop_back();
        }
        A.push_back(val);
    }
    
    void pushBack(int val) {
        B.push_back(val);
        rebalance();
    }
    
    int popFront() {
        if (!A.size()) return -1;
        int val = A.front();
        A.pop_front();
        rebalance();
        return val;
    }
    
    int popMiddle() {
        if (!A.size()) return -1;
        int val = A.back();
        A.pop_back();
        rebalance();
        return val;
    }
    
    int popBack() {
        if (!A.size()) return -1;
        deque<int>& C = B.size() ? B : A;
        int val = C.back();
        C.pop_back();
        rebalance();
        return val;
    }
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * FrontMiddleBackQueue* obj = new FrontMiddleBackQueue();
 * obj->pushFront(val);
 * obj->pushMiddle(val);
 * obj->pushBack(val);
 * int param_4 = obj->popFront();
 * int param_5 = obj->popMiddle();
 * int param_6 = obj->popBack();
 */