function findSmallestAndLargestInArray(arr){
    let smallest=arr[0];
    let largest=arr[0];
    
    for(let i=0;i<=arr.length;i++){
        if(smallest>arr[i]){
            smallest=arr[i]
        }else if(largest<arr[i]){
            largest=arr[i]
        }
    }
    
    console.log(`Smallest in ${arr} is ${smallest} and largest in array is ${largest}`)
}


findSmallestAndLargestInArray([1,2,3,4,5])



//secound way
function findLargestAndSmallestInArray(Arr){
    var largest=Arr.reduce((max,current)=>{
        return current>max?current:""
    })
    
    var smallest=Arr.reduce((small,current)=>{
        return current>small?small:current
    })
    
    console.log(largest)
        console.log(smallest)
}
findLargestAndSmallestInArray([1,2,3,4,5])



//3rd way

function findMinMax(arr){
    let min=arr[0];
    let max=arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
        if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log(`Smallest in ${arr} is ${min} and largest in array is ${max}`)
}
findMinMax([1,2,3,4,5])


//4th way
function findMinMaxInArray(arr){
  let result=arr.reduce((acc,current)=>{
    return {
        min:current<acc.min?current:acc.min,
        max:current>acc.max?current:acc.max
    }
  },
    {min:arr[0],max:arr[0]}
  )
  console.log(`Smallest in ${arr} is ${result.min} and largest in array is ${result.max}`
)
}

findMinMaxInArray([1,2,3,4,5])