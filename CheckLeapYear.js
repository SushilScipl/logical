function CheckLeapYear(year){
    if(year%400==0){
        console.log(` ${year} This is leap year`);
    }else if(year%4==0 && year%100!==0){
        console.log(`${year} This is Leap Year`)
    }else{
        console.log(`${year} This is not Leap Year`)
    }
}
CheckLeapYear(2020)
CheckLeapYear(1900)
CheckLeapYear(2000)
CheckLeapYear(2023)