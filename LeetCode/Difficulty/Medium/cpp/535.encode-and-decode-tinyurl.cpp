class Solution {
    
    unordered_map<string, string> urlMap;
    
public:

    // Encodes a URL to a shortened URL.
    string encode(string longUrl) {
        unsigned long long hashVal = hash<string>{}(longUrl);
        string hashKey = to_string(hashVal);
        urlMap[hashKey] = longUrl;
        return hashKey;
    }

    // Decodes a shortened URL to its original URL.
    string decode(string shortUrl) {
        return urlMap[shortUrl];
    }
};

// Your Solution object will be instantiated and called as such:
// Solution solution;
// solution.decode(solution.encode(url));