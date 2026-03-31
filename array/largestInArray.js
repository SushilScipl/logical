function findLargestInArray(arr) {
    if (arr.length === 0) {
        return null;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargestInArray([3, 5, 7, 2, 8])); // Output: 8
console.log(findLargestInArray([-1, -5, -3]));


const arr=[1,2,3,7,5,6,8]

const largest=arr.reduce((max,current)=>{
    return current>max?current:max
})

console.log(largest)