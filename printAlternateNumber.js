function printAlternateNumber(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}

console.log(printAlternateNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]

// function printAlternateNumber(arr) {
   
//     for (let i = 0; i < arr.length; i += 2) {
//         console.log(arr[i]);
//     }
    
// }

// console.log(printAlternateNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]


