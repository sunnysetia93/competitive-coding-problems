class Solution {
public:
    string intToRoman(int num) {
        string r;
        while (num) {
            if (num >= 1000) {
                num -= 1000;
                r += "M";
            } else if (num >= 900) {
                num -= 900;
                r += "CM";
            } else if (num >= 500) {
                num -= 500;
                r += "D";
            } else if (num >= 400) {
                num -= 400;
                r += "CD";
            } else if (num >= 100) {
                num -= 100;
                r +="C";
            } else if (num >= 90) {
                num -= 90;
                r += "XC";
            } else if (num >= 50) {
                num -= 50;
                r +="L";
            } else if (num >= 40) {
                num -= 40;
                r += "XL";
            } else if (num >= 10) {
                num -= 10;
                r += "X";
            } else if (num >= 9) {
                num -= 9;
                r += "IX";
            } else if (num >= 5) {
                num -= 5;
                r += "V";
            } else if (num >= 4) {
                num -= 4;
                r += "IV";
            } else if (num >= 1) {
                num -= 1;
                r += "I";
            }
        }
        return r;
    }
};