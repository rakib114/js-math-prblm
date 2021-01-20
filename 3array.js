var studentAge = [12, 13, 15, 16];
// console.log(studentAge);
var arifAge = studentAge[3];
// console.log(arifAge);
studentAge[0] = 14;
// console.log(studentAge);
var potsitionNumber = studentAge.indexOf(15);
// console.log(potsitionNumber);
console.log(studentAge);
studentAge.push(19);
console.log(studentAge);
console.log(studentAge.length);
studentAge.pop();
// console.log(studentAge);
console.log(studentAge);




var coffieLine = ['rb', 'rs', 'rt', 'rf', 'rl','rr'];
// console.log(coffieLine);
// coffieLine.shift();
// console.log(coffieLine);
coffieLine.unshift('rj');
// console.log(coffieLine);
var part = coffieLine.slice(2, 4);
console.log(part);
// console.log(coffieLine);


var numbers = [1,2,3,4,5];

var result = numbers.slice(1,3);

console.log(result)

