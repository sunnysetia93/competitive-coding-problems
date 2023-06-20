class FrontMiddleBackQueue {
    list<int> l;
public:
    FrontMiddleBackQueue() {}
    
    void pushFront(int val) {
        l.push_front(val);
    }
    
    void pushMiddle(int val) {
        auto itr = l.begin();
        advance(itr, l.size() / 2);
        l.insert(itr, val);
    }
    
    void pushBack(int val) {
        l.push_back(val);
    }
    
    int popFront() {
        if (!l.size()) return -1;
        int val = l.front();
        l.pop_front();
        return val;
    }
    
    int popMiddle() {
        if (!l.size()) return -1;
        auto itr = l.begin();
        advance(itr, (l.size() - 1) / 2);
        int val = *itr;
        l.erase(itr);
        return val;
    }
    
    int popBack() {
        if (!l.size()) return -1;
        int val = l.back();
        l.pop_back();
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