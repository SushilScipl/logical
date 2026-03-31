function smallestElementInArray(arr){
    let smallest=arr[0];
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            sammest=arr[i]
        }
    }
    return smallest;
}

console.log(smallestElementInArray([1,2,3,4,5]))

let arr=[1,2,3,4,5]
let smallest=arr.reduce((current,small)=>{
    return current>small?small:current
})
console.log(smallest)