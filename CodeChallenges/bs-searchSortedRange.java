package CodeChallenges;

class Solution {
    public int[] searchRange(int[] nums, int target) {
        int l = 0;
        int r = nums.length - 1;

        while (l <= r) {
            int mid = (l + r) / 2;
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
}