// exmaple 1
function test ( number ) {
    return new Promise( ( resolve, reject ) => {
        if ( number >= 0 ) {
            resolve( {
                name: "success",
                result: " number >= 0 "
            } );
        } else {
            reject( {
                name: "failure",
                result: " number < 0 "
            } );
        }
    } );
}

test( -1 )
    .then( msg => console.log( msg ) )
    .catch( err => console.log( err ) );



// example 2
const task1 = new Promise( ( resolve, reject ) => {
    resolve( "task 1 done" );
} );

const task2 = new Promise( ( resolve, reject ) => {
    resolve( "task 2 done" );
} );

const task3 = new Promise( ( resolve, reject ) => {
    resolve( "task 2 done" );
} );

Promise.all( [
    task1, task2, task3
] ).then( messages => {
    console.log( messages );
} );

Promise.race( [
    task1, task2, task3
] ).then( message => {
    console.log( message );
} );

