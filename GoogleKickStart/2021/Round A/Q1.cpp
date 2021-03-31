/**
 * K-Goodness String
 * Problem Statement:- https://codingcompetitions.withgoogle.com/kickstart/round/0000000000436140/000000000068cca3
 */

#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
    int T;
    cin >> T;

    for (int tc = 1; tc <= T; ++tc) {
        int N, K;
        cin >> N >> K;

        string s;
        cin >> s;

        int score = 0;
        for (int i = 0; i < N/2; ++i) {
            if (s[i] != s[N-i-1]) ++score;
        }
        cout << "Case #" << tc << ": " << abs(K - score) << endl;
    }
    return 0;
}