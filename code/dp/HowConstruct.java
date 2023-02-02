/**
 * Given a string s and an array wordDict
 * return the number of ways to segment if s can be COMPLETELY 
 * segmented into space-seperated sequence of one or more 
 * words in wordDict
 * runtime: O(len(wordDict)*len(s)^2)
 * 
 * NOTE: don't take out elements in the middle of the string
 */

package code.dp;

import java.util.HashMap;
import java.util.Map;

class HowConstruct {

  public int howConstructMemo(
      String s,
      String[] wordDict,
      Map<String, Integer> memo) {
    if (memo.containsKey(s))
      return memo.get(s);

    if (s.isEmpty())
      return 1;

    int totalWays = 0;

    for (String word : wordDict) {
      if (s.indexOf(word) == 0) {
        String suffix = s.substring(word.length()); // js slice()
        int numWays = howConstructMemo(suffix, wordDict, memo);
        totalWays += numWays;
      }
    }

    memo.put(s, totalWays);
    return memo.get(s);
  }

  public static void main(String[] args) {
    HowConstruct solution = new HowConstruct();
    System.out.println(
        solution.howConstructMemo(
            "abcdef",
            new String[] { "ab", "abc", "cd", "def", "abcd", "ef" },
            new HashMap<>()));
    System.out.println(
        solution.howConstructMemo(
            "skateboard",
            new String[] { "bo", "rd", "ate", "t", "ska", "sk", "boar" },
            new HashMap<>()));
    System.out.println(
        solution.howConstructMemo(
            "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
            new String[] { "e", "ee", "eee", "eeee", "eeeee", "eeeeee" },
            new HashMap<>()));
  }

}
