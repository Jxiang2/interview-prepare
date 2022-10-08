// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

package code;

import java.util.Arrays;

class SprialMatrix {
  public int[][] spirlaMatrix(int n) {
    int[][] result = new int[n][n];

    int counter = 0;
    int topRow = 0;
    int leftCol = 0;
    int bottomRow = n - 1;
    int rightCol = n - 1;

    while (topRow <= bottomRow && leftCol <= rightCol) {
      // top
      for (int i = leftCol; i <= rightCol; i++) {
        result[topRow][i] = counter;
        counter++;
      }
      topRow++;

      // right
      for (int i = topRow; i <= bottomRow; i++) {
        result[i][rightCol] = counter;
        counter++;
      }
      rightCol--;

      // bottom
      for (int i = rightCol; i >= leftCol; i--) {
        result[bottomRow][i] = counter;
        counter++;
      }
      bottomRow--;

      // left
      for (int i = bottomRow; i >= topRow; i--) {
        result[i][leftCol] = counter;
        counter++;
      }
      leftCol++;
    }

    return result;
  }

  public static void main(String[] args) {
    SprialMatrix sm = new SprialMatrix();
    System.out.println(Arrays.deepToString(sm.spirlaMatrix(3)));
  }
}

// ts solution
// function matrix (n: number) {
// let results: number[][] = [];
// for (let i = 0; i < n; i++) {
// results.push([]);
// }

// let counter: number = 1;

// let topRow: number = 0;
// let bottomRow: number = n - 1;
// let leftCol: number = 0;
// let rightCol: number = n - 1;

// while (topRow <= bottomRow && leftCol <= rightCol) {
// // top row
// for (let i = leftCol; i <= rightCol; i++) results[topRow][i] = counter++;
// topRow++;

// // right col
// for (let i = topRow; i <= bottomRow; i++) results[i][rightCol] = counter++;
// rightCol--;

// // bottom row
// for (let i = rightCol; i >= leftCol; i--) results[bottomRow][i] = counter++;
// bottomRow--;

// // left col
// for (let i = bottomRow; i >= topRow; i--) results[i][leftCol] = counter++;
// leftCol++;
// }
// return results;
// }

// console.log(matrix(4));
