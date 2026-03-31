function sortEleUsingFrequancy(arr) {
    const frequancy = {};

    for (let num of arr) {
        frequancy[num] = (frequancy[num] || 0) + 1;
    }

    return arr.sort((a,b)=>{
        if(frequancy[a]!==frequancy[b]){
            return frequancy[b]-frequancy[a];
        }
        return a-b;
    })
}

console.log(sortEleUsingFrequancy([4, 5, 6, 5, 4, 3]))