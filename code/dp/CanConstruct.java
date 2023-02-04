/**
 * Given a string s and an array wordDict
 * return true if s can be COMPLETELY 
 * segmented into space-seperated sequence of one or more 
 * words in wordDict
 * runtime: O(len(wordDict)*len(s)^2)
 * 
 * NOTE: don't take out elements in the middle of the string
 */

package code.dp;

import java.util.HashMap;

class CanConstruct {
    public boolean canConstructMemo(
            final String s,
            final String[] wordDict,
            final HashMap<String, Boolean> memo) {
        if (memo.containsKey(s))
            return memo.get(s);

        if (s.isEmpty())
            return true;

        for (final String word : wordDict) {
            if (s.indexOf(word) == 0) {
                final String suffix = s.substring(word.length()); // js slice()
                if (canConstructMemo(suffix, wordDict, memo)) {
                    memo.put(s, true);
                    return memo.get(s);
                }
            }
        }

        memo.put(s, false);
        return memo.get(s);
    }

    public static void main(final String[] args) {
        final CanConstruct solution = new CanConstruct();
        System.out.println(
                solution.canConstructMemo(
                        "abcdef",
                        new String[] { "ab", "abc", "cd", "def", "abcd" },
                        new HashMap<>()));
        System.out.println(
                solution.canConstructMemo(
                        "skateboard",
                        new String[] { "bo", "rd", "ate", "t", "ska", "sk", "boar" },
                        new HashMap<>()));
        System.out.println(
                solution.canConstructMemo(
                        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
                        new String[] { "e", "ee", "eee", "eeee", "eeeee", "eeeeee" },
                        new HashMap<>()));
    }

}