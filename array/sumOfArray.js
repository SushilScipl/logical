function sumOfArray(arr){
    let sum=0;
    
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}

sumOfArray([1,2,3,4,5])


//using reduce method
let arr1=[1,2,3,4,5];

let sum1=arr1.reduce((curr,acc)=>{
    return curr+acc;
})
console.log(sum1)
//using map method
let sum3=0
arr1.map((ele)=>
    sum3+=ele
)
console.log(sum3)