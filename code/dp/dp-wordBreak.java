/**
 * Given a string s and an array wordDict
 * return true if s can be COMPLETELY 
 * segmented into space-seperated sequence of one or more 
 * words in wordDict
 */

package code.dp;

import java.util.*;

class WordBreak {
    public boolean wordBreak(String s, List<String> wordDict) {
        boolean[] dp = new boolean[s.length() + 1];
        // base case
        dp[s.length()] = true;

        for (int i = s.length() - 1; i >= 0; i--) {
            // index i: start of word
            for (String word : wordDict) {
                // matching the word started at index i in wordDict ...
                if ((i + word.length()) <= s.length() && s.substring(i, i + word.length()).equals(word))
                    dp[i] = dp[i + word.length()];
                if (dp[i])
                    break;
            }
        }
        return dp[0];
    }
}