package code.basics;

import java.util.HashMap;
import java.util.Set;

/**
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * anagrams('rail safety', 'fairy tales') --> True
 * anagrams('RAIL! SAFETY!', 'fairy tales') --> True
 * anagrams('Hi there', 'Bye there') --> False
 */
public class Anagrams {
  public boolean check(final String a, final String b) {
    if (a.length() != b.length()) {
      return false;
    }

    final HashMap<Character, Integer> map = new HashMap<>();
    for (int i = 0; i < a.length(); i++) {
      if (map.containsKey(a.charAt(i))) {
        map.put(a.charAt(i), map.get(a.charAt(i)) + 1);
      } else {
        map.put(a.charAt(i), 1);
      }
    }

    for (int i = 0; i < b.length(); i++) {
      if (map.containsKey(b.charAt(i))) {
        map.put(b.charAt(i), map.get(b.charAt(i)) - 1);
      } else {
        return false;
      }
    }

    final Set<Character> keys = map.keySet();
    for (final Character key : keys) {
      if (map.get(key) != 0) {
        return false;
      }
    }

    return true;
  }
}
