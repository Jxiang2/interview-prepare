/**
 * Given n pairs of parentheses, write a function to 
 * generate all combinations of well-formed parentheses.
 */

package CodeChallenges;

import java.util.*;

class parentheses {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();
        generateHelper(res, n, n, "");
        return res;
    }

    private void generateHelper(List<String> res, int open, int close, String str) {

    }
}