/**
Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
 */

package code.bs;

import java.util.Arrays;

class SearchSortedRanges {
    public int[] searchRange(final int[] nums, final int target) {
        int l = 0;
        int r = nums.length - 1;

        while (l <= r) {
            final int mid = (l + r) / 2;
            if (nums[mid] < target) {
                l = mid + 1;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                int first = mid;
                int last = mid;
                while (first - 1 >= 0 && nums[first - 1] == target) {
                    first--;
                }
                while (last + 1 <= nums.length - 1 && nums[last + 1] == target) {
                    last++;
                }
                return new int[] { first, last };
            }
        }
        return new int[] { -1, -1 };
    }

    public static void main(final String[] args) {
        final SearchSortedRanges sol = new SearchSortedRanges();
        final int[] res = sol.searchRange(new int[] { 5, 7, 7, 8, 8, 10 }, 8);
        System.out.println(Arrays.toString(res));
    }
}
