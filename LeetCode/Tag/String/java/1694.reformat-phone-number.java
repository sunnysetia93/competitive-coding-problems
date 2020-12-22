class Solution {
    public String reformatNumber(String number) {
        String num = "";
        for (int i = 0; i < number.length(); ++i) {
            char ch = number.charAt(i);
            if (Character.isDigit(ch)) {
                num += ch;
            }
        }
        int i = 0;
        String res = "";
        while(i < num.length()-4) {
            res += num.substring(i, i+3) + "-";
            i += 3;
        }
        if (i == num.length()-4) {
            res += num.substring(i, i+2) + "-";
            i += 2;
        }
        res += num.substring(i);
        return res;
    }
}