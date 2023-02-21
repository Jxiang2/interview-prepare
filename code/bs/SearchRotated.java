/**
 * Given the array nums after the 
 * possible rotation and an integer target, 
 * return the index of target if it is in nums, 
 * or -1 if it is not in nums.
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 */

package code.bs;

class SearchRotated {
    public int search(final int[] nums, final int target) {
        int start = 0, end = nums.length - 1;
        int mid;

        while (start <= end) {
            mid = start + (end - start) / 2;
            if (target == nums[mid])
                return mid;

            if (nums[start] <= nums[mid]) { // Mid is in the first part of pivot
                if (target >= nums[start] && target < nums[mid])
                    end = mid - 1;
                else
                    start = mid + 1;
            }

            else { // Mid is in the second part of pivot.
                if (target > nums[mid] && target <= nums[end])
                    start = mid + 1;
                else
                    end = mid - 1;
            }
        }

        return -1;
    }
}