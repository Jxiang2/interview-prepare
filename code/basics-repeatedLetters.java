/**
 * find a word from a string of phrase
 * whrere the word has the most repeats
 * of letters
 */

package code;

import java.util.HashMap;

class RepeatedLetters {
  public String solution(String phrase) {
    String[] clearedPhrase = phrase.replaceAll("[^a-zA-Z0-9\\s.-]", "").split(" ");
    String wordWithMostRepeatedLetter = clearedPhrase[0];

    for (int i = 1; i < clearedPhrase.length; i++) {
      if (getRepeatNumber(clearedPhrase[i]) > getRepeatNumber(wordWithMostRepeatedLetter)) {
        wordWithMostRepeatedLetter = clearedPhrase[i];
      }
    }

    return wordWithMostRepeatedLetter;
  }

  public int getRepeatNumber(String word) {
    HashMap<Character, Integer> map = new HashMap<>();
    int maxRepeat = 1;

    for (int i = 0; i < word.length(); i++) {
      char currentChar = word.charAt(i);
      if (map.containsKey(currentChar)) {
        map.put(currentChar, map.get(currentChar) + 1);
        if ((map.get(currentChar)) > maxRepeat)
          maxRepeat = map.get(currentChar);
      } else {
        map.put(currentChar, 1);
      }
    }

    return maxRepeat;
  }
}