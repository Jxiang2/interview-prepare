/**
 * Write an efficient algorithm that searches for a value 
 * target in an m x n integer matrix matrix.This matrix has the 
 * following properties:
 * Integers in each row are sorted in ascending from left to right;
 * Integers in each column are sorted in ascending from top to bottom.
 */

function hasValue (row: number[], target: number): boolean {
    let l = 0;
    let h = row.length - 1;

    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (row[mid] === target) {
            return true;
        } else if (row[mid] > target) {
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return false;
}


function searchMatrix (matrix: number[][], target: number): boolean {
    if (!matrix.length) return false;
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        if (hasValue(row, target)) {
            return true;
        }
    }
    return false;
}


