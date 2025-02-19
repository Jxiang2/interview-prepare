// Given an array a that contains only numbers in the range from 1 to a.length, 
// find the first duplicate number for which the second occurrence has the minimal index. 
// In other words, if there are more than 1 duplicated numbers, return the number 
// for which the second occurrence has a smaller index than the second occurrence of the other number does. 
// If there are no such elements, return -1.
// a = [2, 1, 3, 5, 3, 2], solution(a) = 3

package code.basics;

import java.util.*;

class FirstDuplicate {
  public int solution(final int[] arr) {
    final Set<Integer> set = new HashSet<>();

    for (int i = 0; i < arr.length; i++) {
      final int number = arr[i];
      if (!set.contains(number)) {
        set.add(number);
      } else {
        return number;
      }
    }

    return -1;
  }
}