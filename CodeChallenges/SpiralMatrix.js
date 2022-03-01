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

function matrix ( n ) {
    let results = [];

    // make a n*n empty ary
    for ( let i = 0; i < n; i++ ) {
        results.push( [] );
    }

    let counter = 1;

    let topRow = 0;
    let bottomRow = n - 1;
    let leftCol = 0;
    let rightCol = n - 1;

    while ( topRow <= bottomRow && leftCol <= rightCol ) {
        // top row
        for ( let i = leftCol; i <= rightCol; i++ ) results[ topRow ][ i ] = counter++;
        topRow++;

        // right col
        for ( let i = topRow; i <= bottomRow; i++ ) results[ i ][ rightCol ] = counter++;
        rightCol--;

        // bottom row
        for ( let i = rightCol; i >= leftCol; i-- ) results[ bottomRow ][ i ] = counter++;
        bottomRow--;

        // left col
        for ( let i = bottomRow; i >= topRow; i-- ) results[ i ][ leftCol ] = counter++;
        leftCol++;
    }
    return results;
}

console.log( matrix( 4 ) );