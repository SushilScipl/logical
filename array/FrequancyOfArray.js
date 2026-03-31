function frequancyOfArray(arr){
    const frequancy={};

    for(let i=0;i<arr.length;i++){
        let element=arr[i];

        if(frequancy[element]){
            frequancy[element]++;
        }        else{
            frequancy[element]=1;
        }
    }
    return frequancy;

}


console.log(frequancyOfArray([1,2,3,4,5,6,7,8,9,1,2,3,4,5]))