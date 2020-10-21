class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        vector<int> state;
        for (int a : asteroids) {
            if (a > 0 || state.empty() || state.back() < 0) {
                state.push_back(a);
            } else {
                while (!state.empty() && state.back() > 0 && state.back() < -a) {
                    state.pop_back();
                }
                if (state.empty() || state.back() < 0) {
                    state.push_back(a);
                } else if (state.back() == -a){
                    state.pop_back();
                }
            }
        }
        return state;
    }
};