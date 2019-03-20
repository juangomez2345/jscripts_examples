var numbers = [5, 6, 13, 0, 1, 18, 23];


//using normal function
var sum = numbers.reduce(myFunction);
function myFunction(total, value, index, array) {
   console.log("total: " + total + " value " + value);
   return total + value;
}



//arrow function
var sum = numbers.reduce((a, b) => {
  console.log("a: " + a + " b: " + b);
  return (a + b);
 }
);


//const add3 = function(num1, num2, num3){
// return num1 + num2 + num3;
//}

const add3 = (num1, num2, num3) => (num1 + num2 + num3);
console.log(add3(1,2,4));
