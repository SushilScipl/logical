function highestCommonFactor(a, b) {
    while(b!==0){
        let rem=a%b;
        a=b;
        b=rem;
    }
    return a;
}

console.log(highestCommonFactor(48,18))