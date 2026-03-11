//recursion is a process in which a function calls itself directly or indirectly. The main idea behind recursion is to break down a complex problem into smaller, more manageable parts. A recursive function typically has two main components: a base case that stops the recursion and a recursive case that continues to call the function until the base case is reached.
function highestCommonFactor(a,b){
    if(b===0){
        return a;
    }
    return highestCommonFactor(b,a%b)
}

console.log(highestCommonFactor(12,18))


// shoetest usig recusrsion

function hcf(a,b){
    return b===0 ? a : hcf(b,a%b)
}
console.log(hcf(12,18))