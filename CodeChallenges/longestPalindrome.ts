/**
 * Given a string s, return the longest palindromic substring in s.
*/


const expandAroundCenter = (s: string, l: number, r: number) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    // get the true length, as we counted extra 2 elements
    return {
        length: r - l - 2 + 1,
        start: l + 1,
        end: r - 1,
    };
};

function longestPalindrome (s: string): string {
    if (s === "") return "";

    let start: number = 0;
    let end: number = 0;
    for (let i = 0; i < s.length; i++) {
        // palindrome type "cbabc"
        let { length: len1, start: start1, end: end1 } = expandAroundCenter(s, i, i);
        // palindrome type "cbbc"
        let { length: len2, start: start2, end: end2 } = expandAroundCenter(s, i, i + 1);

        let newStart: number;
        let newEnd: number;
        let len = Math.max(len1, len2);

        if (len === len1) {
            newStart = start1;
            newEnd = end1;
        } else {
            newStart = start2;
            newEnd = end2;
        }

        if (len > end - start + 1) {
            // calculate the new start / end point if longer length found
            start = newStart;
            end = newEnd;
        }
    }
    // get substring by splice
    return s.substring(start, start + (end + 1 - start));
};