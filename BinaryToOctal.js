function BinaryToOctal(binary){
    let octal="";
    let i=binary.length;

    while(i>0){
        let groupValue=0;
        let power=1;

        for(let j=0;j<3;j++){
            i--;
            if(i>=0&&binary[i]==='1'){
                groupValue+=power;
            }
            power*=2;

        }
        octal=groupValue+octal;

    }
    return octal;

}


console.log(BinaryToOctal("1101011")); // 153
console.log(BinaryToOctal("10111010")); // 272