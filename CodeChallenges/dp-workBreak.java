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
        Set<String> wordDictSet = new HashSet<>(wordDict);

        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;

        return true;
    }

}