function getNoOfDaysInMonth(month,year){
    // if(month<1 ||month>12 ){
    //     return "Invalid month."
    // }
    
   switch(month){
        case 1: case 3: case 5: case 7:
        case 8: case 10: case 12:
            return 31;

        case 4: case 6: case 9: case 11:
            return 30;
            
        case2:
        
        if(year%400===0){
            return "29 days leap year"
        }else{
            return "28 days"
        
    }
     default:
            return "Invalid Month";
    }
}

console.log(getNoOfDaysInMonth(4, 2025)); // 30







// function getDays(month, year) {
//     if (month < 1 || month > 12) {
//         return "Invalid Month";
//     }

//     // February
//     if (month === 2) {
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             return 29; // Leap year
//         } else {
//             return 28;
//         }
//     }

//     // Months with 31 days
//     if (
//         month === 1 || month === 3 || month === 5 ||
//         month === 7 || month === 8 || month === 10 ||
//         month === 12
//     ) {
//         return 31;
//     }

//     // Remaining months have 30 days
//     return 30;
// }

// console.log(getDays(2, 2024)); // 29