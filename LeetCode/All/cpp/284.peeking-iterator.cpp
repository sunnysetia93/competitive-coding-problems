class PeekingIterator : public Iterator {
public:
    int nextVal;
    bool peeked;
    
	PeekingIterator(const vector<int>& nums) : Iterator(nums) {
        peeked = false;
	}

    // Returns the next element in the iteration without advancing the iterator.
	int peek() {
        if (!peeked && Iterator::hasNext())
            nextVal = Iterator::next();
        peeked = true;
        return nextVal;
	}

	// hasNext() and next() should behave the same as in the Iterator interface.
	int next() {
        if (!peeked && Iterator::hasNext()) 
            nextVal = Iterator::next();
        peeked = false;
        return nextVal;
	}

	bool hasNext() const {
        return peeked || Iterator::hasNext();
	}
};