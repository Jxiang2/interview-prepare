package code.bs;

public class FindDuplicate {
  /**
   * Given an array of integers nums containing n + 1 integers where each integer
   * is in the range [1, n] inclusive.
   * 
   * There is only one repeated number in nums, return this repeated number.
   * 
   * Don't modifying the array nums and uses only constant extra space.
   * 
   * HINT: number x in range [1, n] should have x numbers <= it, find the
   * smallest number y that breaks this rule. e.g. [2,4,5,3,2,1] =>
   * count(1,2,3,4,5) = (1,3,3,4,5,6)
   * ______________________^ ^ ^ ^ ^
   */
  public int findDuplicate(final int[] nums) {
    int low = 1, high = nums.length - 1; // [1, n]
    int duplicate = -1;

    while (low <= high) {
      final int cur = low + (high - low) / 2;

      int count = 0;
      for (final int num : nums) {
        if (num <= cur)
          count++;
      }

      if (count > cur) {
        duplicate = cur;
        high = cur - 1;
      } else {
        low = cur + 1;
      }
    }
    return duplicate;
  }
}
