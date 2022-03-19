/**
 * Given a string s and an array wordDict
 * return true if s can be segmented into
 * space-seperated sequence of one or more 
 * words in wordDict
 */

package CodeChallenges;

import java.util.*;

class WordBreak {
    public boolean wordBreak(String s, List<String> wordDict) {
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordDict.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }

}