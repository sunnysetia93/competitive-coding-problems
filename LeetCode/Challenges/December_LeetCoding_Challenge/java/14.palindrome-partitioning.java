class Solution {
    private HashMap<Integer, List<List<String>>> partitionMap = new HashMap<Integer, List<List<String>>>();
    
    private boolean isPalindrome(String s, int i, int j) {
        while (i <= j && s.charAt(i) == s.charAt(j)) {
            ++i;
            --j;
        }
        return j < i;
    }
    
    private List<List<String>> getClone(List<List<String>> ll) {
        List<List<String>> res = new ArrayList();
        for (List<String> l : ll) {
            res.add(new ArrayList<>(l));
        }
        return res;
    }
    
    private List<List<String>> partition(String s, int i) {
        if (partitionMap.containsKey(i)) {
            return getClone(partitionMap.get(i));
        }
        List<List<String>> res = new ArrayList();
        for (int j = i; j < s.length(); ++j) {
            if (isPalindrome(s, i, j)) {
                String substr = s.substring(i, j+1);
                List<List<String>> subres = partition(s, j+1);
                if (subres.isEmpty()) {
                    subres.add(new ArrayList<String>());
                }
                for (List<String> l : subres) {
                    l.add(0, substr);
                }
                res.addAll(subres);
            }
        }
        partitionMap.put(i, res);
        return getClone(res);
    }
    
    public List<List<String>> partition(String s) {
        return partition(s, 0);
    }
}