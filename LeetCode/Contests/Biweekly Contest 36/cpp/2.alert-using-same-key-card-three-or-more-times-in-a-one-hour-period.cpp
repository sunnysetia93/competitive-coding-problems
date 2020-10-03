class Solution {
public:
    vector<string> alertNames(vector<string>& keyName, vector<string>& keyTime) {
        unordered_map<string, vector<int>> data;
        unordered_map<string, bool> alerted;
        vector<string> alertedNames;
        
        vector<int> index(keyName.size());
        iota(index.begin(), index.end(), 0);
        sort(index.begin(), index.end(), [&](int i, int j) { return keyTime[i] < keyTime[j]; });

        for (int i : index) {
            if (alerted[keyName[i]]) continue;

            vector<int>& entryTimes = data[keyName[i]];

            int hh = (keyTime[i][0]-'0')*10 + keyTime[i][1]-'0';
            int mm = (keyTime[i][3]-'0')*10 + keyTime[i][4]-'0';
            entryTimes.push_back(hh*60 + mm);
            
            int n = entryTimes.size();
            if (n < 3) continue;

            if (entryTimes[n-1] - entryTimes[n-3] <= 60) {
                alertedNames.push_back(keyName[i]);
                alerted[keyName[i]] = true;
            }
        }
        sort(alertedNames.begin(), alertedNames.end());
        return alertedNames;
    }
};