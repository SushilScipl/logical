// highest Common multiple
function HCM(a,b){
    while(b!==0){
       let rem=a%b;
       a=b;
       b=rem;
    }
    return a;
    
}

// Lowest Common multiple
function Lcm(a,b){
    return a*b/HCM(a,b);
}

console.log(Lcm(4,6))


// using loop


function LowesCommonMultiple(a,b){
    let max=Math.max(a,b);
    
    while(true){
        if(max%a===0 && max%b===0){
            return max;
        }
        max++
    }
}

console.log(LowesCommonMultiple(4,6))