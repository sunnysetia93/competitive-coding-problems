class Solution {
public:
    string simplifyPath(string path) {
        deque<string> dq;
        for (int i = 0, j; i < path.length(); i = ++j) {
            while (j < path.length() && path[j] != '/') ++j;
            string s = path.substr(i, j-i);

            if (s == ".." && !dq.empty())
                dq.pop_back();
            else if (s != "" && s != "." && s != "..")
                dq.push_back(s);
        }
        string result = "/";
        while (!dq.empty()) {
            result +=  dq.front() + "/";
            dq.pop_front();
        }
        if (result.size() > 1) result.pop_back();
        return result;
    }
};