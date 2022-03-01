/**
 * Given a string s, find the length of the longest 
 * substring without repeating characters.
 */

/**** Solution
1 Have two pointers which will define the starting index start and ending index 
  end of the current window. Both will be 0 at the beginning.
2 Declare a Set that will store all the unique characters that we have encountered.
3 Declare a variable maxLength that will keep track of the length of 
  the longest valid substring.
4 Scan the string from left to right one character at a time.
5 If the character has not encountered before i.e., not present in the 
  Set then we will add it and increment the end index. The maxLength will 
  be the maximum of Set.size() and existing maxLength.
6 If the character has encounter before, i.e., present in the Set, 
  we will increment the start and we will remove the character at start 
  index of the string.
7 Steps #5 and #6 are moving the window.
8 After the loop terminates, return maxLength.
****/

function lengthOfLongestSubstring (s: string): number {
    let start: number = 0;
    let end: number = 0;
    let maxLength: number = 0;
    let uniqueChars: Set<string> = new Set();

    while (end < s.length) {
        if (!uniqueChars.has(s[end])) {
            uniqueChars.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChars.size);
        } else {
            uniqueChars.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("dvdf"));

