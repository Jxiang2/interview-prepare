function mySqrt (x: number): number {
    let l = 0;
    let r = x;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let squre = mid * mid;
        if (squre > x) {
            r = mid - 1;
        } else if (squre < x) {
            l = mid + 1;
        } else {
            return mid;
        }
    }
    return r;
}

console.log(mySqrt(12));