class Solution {
    public boolean isValid(String s) {
        Stack<Character> st = new Stack<>();
        HashMap<Character, Character> openingBracket = new HashMap<>();
        openingBracket.put(')', '(');
        openingBracket.put('}', '{');
        openingBracket.put(']', '[');
        
        for (int i = 0; i < s.length(); ++i) {
            switch(s.charAt(i)) {
                case '(':
                case '{':
                case '[':
                    st.push(s.charAt(i));
                    break;

                default:
                    if (st.empty()) return false;
                    if (st.peek() != openingBracket.get(s.charAt(i))) return false;
                    st.pop();
                    break;
            }
        }
        return st.empty();
    }
}