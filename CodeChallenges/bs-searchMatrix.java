package CodeChallenges;

class SearchMatrix {
    public boolean hasValue(int[] row, int target) {
        int l = 0;
        int r = row.length - 1;

        while (l <= r) {
            int mid = (l + r) / 2;
            if (row[mid] > target) {
                r = mid - 1;
            } else if (row[mid] < target) {
                l = mid + 1;
            } else {
                return true;
            }
        }

        return false;
    }

    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length == 0) {
            return false;
        }

        for (int i = 0; i < matrix.length; i++) {
            int[] row = matrix[i];
            if (hasValue(row, target)) {
                return true;
            }

        }

        return false;
    }
}