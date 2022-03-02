/**
 * Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
 * Output: 13
 * Explanation: The elements in the matrix are 
 * [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
 */

function kthSmallest (matrix: number[][], k: number): number {
    let arr: number[] = [];
    for (let row of matrix) {
        arr.push(...row);
    }
    arr.sort((a, b) => a - b);
    return arr[k - 1];
};

console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 6));