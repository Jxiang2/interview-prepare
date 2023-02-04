package code.basics;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class IntersectionArrays {
  public List<Integer> intersect(final int[] numbers1, final int[] numbers2) {
    Arrays.sort(numbers1);
    Arrays.sort(numbers2);

    int p1 = 0;
    int p2 = 0;
    final List<Integer> res = new ArrayList<>();

    while (p1 < numbers1.length && p2 < numbers2.length) {
      if (numbers1[p1] == numbers2[p2]) {
        res.add(numbers1[p1]);
        p1++;
        p2++;
      } else if (numbers2[p2] > numbers1[p1]) {
        p1++;
      } else {
        p2++;
      }
    }

    return res;
  }
}