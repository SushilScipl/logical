function countVowels(str){
    let count=0;
    let vowels="aeiou";
    
    for(let ch of str.toLowerCase()){
        if(vowels.includes(ch)){
            count++;
        }
    }
    
    console.log(count)
}
countVowels("Sushil");