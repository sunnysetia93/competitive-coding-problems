class MyHashMap {
    
    const int NOT_FOUND = -1;
    vector<vector<int>> bucket;
    
public:
    /** Initialize your data structure here. */
    MyHashMap() {
        bucket.resize(1001, vector<int>());
    }

    /** value will always be non-negative. */
    void put(int key, int value) {
        int keyHash = key / 1000;
        if (bucket[keyHash].empty()) bucket[keyHash].resize(1000, NOT_FOUND);
        bucket[keyHash][key % 1000] = value;
    }
    
    /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
    int get(int key) {
        int keyHash = key / 1000;
        if (bucket[keyHash].empty()) return NOT_FOUND;
        return bucket[keyHash][key % 1000];
    }
    
    /** Removes the mapping of the specified value key if this map contains a mapping for the key */
    void remove(int key) {
        int keyHash = key / 1000;
        if (bucket[keyHash].empty()) return;
        bucket[keyHash][key % 1000] = NOT_FOUND;
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */