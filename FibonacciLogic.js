// function fibonacci(n) {
//   let a = 0, b = 1;

//   for (let i = 1; i <= n; i++) {
//     console.log(a);
//     [a, b] = [b, a + b];
//   }
// }

// fibonacci(10);

// logic `1`
let n=10;
let a=0;
let b=1;

for(let i=1;i<=n;i++){
    console.log(a);
    let next=a+b;
    a=b;
    b=next;
}
///logic 2

function fibonacci(n){
    let a=0;
    let b=1;
    for(let i=1;i<=n;i++){
        console.log(a);

        [a,b]=[b,a+b]
    }
}
fibonacci(10);