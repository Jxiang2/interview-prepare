// findScooterDistance(23, [4, 7, 14]) means there are scooters at point 4, 7, 14,
// the agent need to travel from 0 to 23 
// scooters can travel 10 distance
// find the total distance traveled with scooters

const findScooterDistance = ( finish, scooterAry ) => {
    let totalDistance = 0;
    let scootterDistance = 0;

    for ( let scooter of scooterAry.sort( ( a, b ) => ( a - b ) ) ) {
        if ( totalDistance < finish ) {
            if ( totalDistance <= scooter && finish - scooter >= 10 ) {
                totalDistance = scooter + 10;
                scootterDistance += 10;
            } else if ( totalDistance <= scooter && finish - scooter < 10 ) {
                totalDistance = finish;
                scootterDistance += finish - scooter;
            }
        } else break;
    }
    // all scootter are processed but still not reach finish
    return scootterDistance;
};

console.log( findScooterDistance( 23, [ 7, 4, 14 ] ) );