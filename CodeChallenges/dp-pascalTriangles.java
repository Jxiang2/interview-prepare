package CodeChallenges;

import java.util.*;

class PascalTriangles {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ans = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            List<Integer> list1 = new ArrayList<>();

            list1.add(0, 1);

            for (int j = 0; j < i - 1; j++) {
                list1.add(ans.get(i - 1).get(j) + ans.get(i - 1).get(j + 1));
            }

            if (i > 0) {
                list1.add(i, 1);
            }

            ans.add(list1);
        }
        return ans;
    }

    public int[] getRow(int numRows) {
        int[] ans = new int[numRows + 1];
        ans[0] = ans[numRows] = 1;
        for (int i = 1, up = numRows; i <= numRows; i++, up--) {
            ans[i] = ans[i - 1] * up / i;
        }
        return ans;
    }

}

// ts version
// function generate (numRows: number): number[][] {
// let pascal: number[][] = [];
// for (let i = 0; i < numRows; i++) {
// pascal[i] = [];
// pascal[i][0] = 1;
// for (let j = 0; j < i - 1; j++) {
// pascal[i].push(pascal[i - 1][j] + pascal[i - 1][j + 1]);
// }
// pascal[i][i] = 1;
// }
// return pascal;
// };

// function getRow (r: number) {
// let ans: number[] = new Array(r + 1);
// ans[0] = ans[r] = 1;
// for (let i = 1, up = r; i <= r; i++, up--) {
// ans[i] = ans[i - 1] * up / i;
// }
// return ans;
// };
// console.log(getRow(3));
