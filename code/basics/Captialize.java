package code.basics;

/**
 * capitalize('a short sentence') --> 'A Short Sentence'
 */
public class Captialize {
  public String captialize(final String str) {
    final String[] words = str.split(" ");
    for (int i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0) + words[i].substring(1);
    }

    final String res = String.join(" ", words);
    return res;
  }
}
