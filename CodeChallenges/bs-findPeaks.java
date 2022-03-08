package CodeChallenges;

class FindPeaks {
    public int findPeakElement(int[] nums) {
        int l = 0, r = nums.length - 1;
        int mid;

        while (l < r) {
            mid = (l + r) / 2;
            if (nums[mid] < nums[mid + 1]) {
                l = mid + 1;
            } else if (nums[mid] > nums[mid + 1]) {
                r = mid;
            }
        }

        return l;
    }
}

class RunFindPeaks {
    public static void main(String[] args) {
        FindPeaks sol = new FindPeaks();
        int res = sol.findPeakElement(new int[] { 5, 7, 7, 8, 8, 10 });
        System.out.println(res);
    }
}