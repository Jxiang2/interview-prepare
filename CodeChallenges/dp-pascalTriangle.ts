function generate (numRows: number): number[][] {
    let pascal: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (let j = 0; j < i - 1; j++) {
            pascal[i].push(pascal[i - 1][j] + pascal[i - 1][j + 1]);
        }
        pascal[i][i] = 1;
    }
    return pascal;
};

function getRow (r: number) {
    let ans: number[] = new Array(r + 1);
    ans[0] = ans[r] = 1;
    for (let i = 1, up = r; i <= r; i++, up--) {
        ans[i] = ans[i - 1] * up / i;
    }
    return ans;
};
console.log(getRow(3));


