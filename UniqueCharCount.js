function uniqueCharCount(Str){
    Str=Str.toLowerCase();
    let result={}
    
    for(let i=0;i<Str.length;i++){
        let found =false;
        
        for(let key in result){
            if(key===Str[i]){
                result[key]++;
                found=true;
            }
        }
        
          if(!found){
        result[Str[i]]=1;
    }
    }
    
    return result;
}
console.log(uniqueCharCount("Sushil"))