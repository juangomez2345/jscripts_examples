
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [4, 9, 16, 25, 45];

const strings1 = ["Name1", "Name2", "Name3"];



//------------------------------------------------------------
console.log("Numbers1: " + numbers1);
const doubled1 = numbers1.map(function(item){ return item * 3;});
console.log(doubled1);

//arrow function
const doubled2 = numbers1.map((number) => number * 2);
console.log(doubled2);


//------------------------------------------------------------
console.log("Numbers2: " + numbers2);
numbers2.forEach(myFunction);
function myFunction(value, index, array) {
   console.log("value: " + value);
}

var firstCoincidence = numbers2.find(myFunction);
console.log(firstCoincidence);

function myFunction(value, index, array) {
   return  value > 15;
}

//------------------------------------------------------------
console.log(strings1);
const addComment = strings1.map(function(item, index){
 return "Parameter"  + index + ":" + item;
});
console.log(addComment);


console.log(strings1);
const addComment2 = strings1.map((item, index) => {
 return ("Parameter" + index + ":" + item);
});
console.log(addComment2);


//------------------------------------------------------------

































