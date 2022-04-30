package CodeChallenges;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class TwoSum {
  public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int compliment = target - nums[i];
      if (map.containsKey(compliment))
        return new int[] { i, map.get(compliment) };
      map.put(nums[i], i);
    }
    return null;

  }

  public static void main(String[] args) {
    TwoSum ts = new TwoSum();
    int[] res = ts.twoSum(new int[] { 3, 2, 4 }, 6);
    System.out.println(Arrays.toString(res));
  }

}
