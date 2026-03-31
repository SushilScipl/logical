function countDistinct(arr){
    return new Set(arr).size;
}
console.log(countDistinct([1, 2, 3,3, 4, 5])); // 5

function countDistinct1(arr){
    let map={};

    for(let num of arr){
        map[num]=true;
    }

    return Object.keys(map).length;
}

console.log(countDistinct1([1, 2, 3,3, 4, 5])); // 5



function countDistinct2(arr){
    let distinct=[];
    for(let i=0;i<arr.length;i++){
        if(!distinct.includes(arr[i])){
            distinct.push(arr[i]);
        }

    }
    console.log(distinct);
    return distinct.length;
}
console.log(countDistinct2([1, 2, 3,3, 4, 5,6])); // 5