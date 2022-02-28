function vowels(str: string) {
    let count: number = 0;
    for (let char of str.toLowerCase()) {
        ["a", "e", "i", "o", "u"].includes(char) ? count+=1 : null;
    }
    return count;
}

console.log(vowels("air"));
console.log(vowels("hello"));