function isLeapYear(year){
    
    if (year%4 == 0 && year%100 ==!0 || year%400 ==0 ) {
        return true;
    }
    else{
        return false;
    }
}
var frst = isLeapYear(1998);
console.log(frst);
