function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function longestPalindrome(arr) {
  let longest = "";

  for (let item of arr) {
    if (isPalindrome(item) && item.length > longest.length) {
      longest = item;
    }
  }

  return longest;
}

const result = longestPalindrome(["madam", "racecar", "apple", "level"]);
console.log(result); // racecar



// function isPalindrome(num) {
//   let str = num.toString();
//   return str === str.split("").reverse().join("");
// }

// function longestPalindrome(arr) {
//   let longest = 0;

//   for (let num of arr) {
//     if (isPalindrome(num) && num.toString().length > longest.toString().length) {
//       longest = num;
//     }
//   }

//   return longest;
// }

// const result1 = longestPalindrome([121, 1331, 123, 45454, 99]);
// console.log(result1); // 45454


// const longest = arr1
//   .filter(x => x.toString() === x.toString().split("").reverse().join(""))
//   .sort((a, b) => b.toString().length - a.toString().length)[0];