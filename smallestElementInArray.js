function smallestElementInArray(arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest;
}
console.log(smallestElementInArray([1, 2, 3, 4, 5, 0]))

//second way


function largestElementInArray(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        for(let element of arr){
            if(arr[i]<element && arr[i]<max){
                max=arr[i];
            }
        }
    }
    return max;
}
console.log(largestElementInArray([25, 40, 50, 60, 67, 20, 12, 10]))