function factorial(num){
    var fact = 1;
    var i = num;
    while(i >= 1){
        fact = fact * i;
        i--;
    }
    return fact;
}
var result = factorial(4);
console.log(result);