package code.basics;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class TwoSum {
  public int[] twoSum(final int[] nums, final int target) {
    final Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      final int compliment = target - nums[i];
      if (map.containsKey(compliment))
        return new int[] { i, map.get(compliment) };
      map.put(nums[i], i);
    }
    return null;

  }

  public static void main(final String[] args) {
    final TwoSum ts = new TwoSum();
    final int[] res = ts.twoSum(new int[] { 3, 2, 4 }, 6);
    System.out.println(Arrays.toString(res));
  }

}
