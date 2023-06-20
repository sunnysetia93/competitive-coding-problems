class MyHashSet {

    vector<vector<bool>> bucket;

public:
    /** Initialize your data structure here. */
    MyHashSet() {
        bucket.resize(1001, vector<bool>());
    }

    void add(int key) {
        int keyHash = key / 1000;
        if (bucket[keyHash].empty()) bucket[keyHash].resize(1000, false);
        bucket[keyHash][key % 1000] = true;
    }

    void remove(int key) {
        int keyHash = key / 1000;
        if (bucket[keyHash].empty()) return;
        bucket[keyHash][key % 1000] = false;
    }

    /** Returns true if this set contains the specified element */
    bool contains(int key) {
        int keyHash = key / 1000;
        if (bucket[keyHash].empty()) return false;
        return bucket[keyHash][key % 1000];
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */