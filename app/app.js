// var myArray = [];
// var i = 10;

// // Only change code below this line
// do{
// myArray.push(i);
// i++;
// }
// while (i < 5) 
// console.log(myArray);

// Recursion

function recursion (val) {
  var result = val;
  if (val == 0 && val == 1) {
    return 1;
  } while (val > 1) {
    result = result * (val - 1);
    val--;
  }
  return result;
  
}

console.log(recursion(5));