window.onload = function () {

    const one = document.getElementById( 'one' );
    const two = document.getElementById( 'two' );

    const throttle = ( fn, delay ) => {
        let last = 0;
        return ( ...args ) => {
            const now = new Date().getTime();
            if ( ( now - last ) < delay ) {
                // do nothing
                return;
            }
            last = now;
            return fn( ...args );

        };
    };

    one.addEventListener( 'click', throttle( e => {
        console.log( "clicked" );
    }, 2000 ) );

    two.addEventListener( 'click', throttle( e => {
        console.log( "clicked" );
    }, 2000 ) );

}