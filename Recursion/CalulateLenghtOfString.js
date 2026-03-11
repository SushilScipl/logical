function calculateLengthOfString(str) {
    // Base case: if the string is empty, return 0
    if (str === "") {
        return 0;
    }
    // Recursive case: return 1 + length of the rest of the string
    return 1 + calculateLengthOfString(str.substring(1));
}
console.log(calculateLengthOfString("Hello, World!")); // Output: 13