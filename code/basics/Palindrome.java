package code.basics;

public class Palindrome {
  public boolean isPalindrome(final String str) {
    final int halfLength = str.length() / 2;

    for (int i = 0; i < halfLength; i++) {
      if (str.charAt(i) != str.charAt(str.length() - i - 1))
        return false;
    }
    return true;
  }
}
