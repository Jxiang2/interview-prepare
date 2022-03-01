class Square {
    constructor ( width ) {
        this.width = width;
        this.height = width;
    }

    // getter
    get area () {
        this.number++;
        return this.width * this.height;
    }

    // setter
    set area ( area ) {
        this.width = Math.sqrt( area );
        this.height = this.width;
    }

    // static(prototype) method, no 'this' bound to static methods
    static areaEquals = ( sq1, sq2 ) => {
        return sq1.width * sq1.height === sq2.width * sq2.height;
    };

    static isValidDimensions = ( width, height ) => {
        return width === height;
    };
}


class ColorSquare extends Square {
    constructor ( width, color ) {
        super( width );
        this.color = color;
    }

    sayHi = () => {
        console.log( `I am a ${ this.color } squre, with area ${ this.area }` );
    };
}

let cq1 = new ColorSquare( 6, 'blue' );
let cq2 = new ColorSquare( 6, 'red' );
cq1.sayHi();
cq2.sayHi();
console.log( Square.areaEquals( cq1, cq2 ) );