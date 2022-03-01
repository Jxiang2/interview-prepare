// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// recursive approach, with cache O(n)
function fib ( n, cache = {} ) {
    if ( cache[ n ] ) {
        return cache[ n ];
    }

    if ( n === 0 || n === 1 ) {
        return n;
    }


    const fibNum = fib( n - 1, cache ) + fib( n - 2, cache );
    cache[ n ] = fibNum;
    return fibNum;
}

console.log( fib( 10 ) );

module.exports = fib;

// recursive approach O(2^n)
// function fib(n) {
//     if (n === 0 || n === 1)
//         return n
//     return fib(n-1) + fib (n-2)
// }

// iterative approach O(n)
// function fib(n) {
//     const results = [0, 1]
//     for (let i=2; i<=n; i++) {
//         const a = results[i-1]
//         const b = results[i-2]
//         results.push(a+b)
//     }
//     return results[n]
// }
