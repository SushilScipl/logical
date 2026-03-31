function countDistinctElements(arr) {
    let freq = {};
    let result = [];

    for (let ele of arr) {
        freq[ele] = (freq[ele] || 0) + 1;
    }

    for (let key in freq) {
        if (freq[key] > 0) {
            result.push(Number(key));
        }
    }
    console.log(freq);
    console.log(result);
    return Object.keys(freq).length;
}

console.log(countDistinctElements([1, 1, 2, 3, 4, 5])); // Output: 5