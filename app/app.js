//DO WHILE///////////////////////////
/* var myArray = [];
var i = 10;
do{
myArray.push(i);
i++;
}
while (i < 5)
console.log(myArray);
 */

// array search hasOwnProperty //////////////////////////
/* var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
     for(var i =0; i<contacts.length; i++){

     if (contacts[i].firstName === name) {

       if (contacts[i].hasOwnProperty(prop)) {
         return contacts[i][prop];
       } else {
         return "No such property";
       }
     }
  }
  return "No such contact";

} */

// console.log(lookUpProfile("Akira", "likes"));
// function randomWholeNum() {
//   Math.floor(Math.random()*9)

//   return Math.random();
// }

// function checkEqual(a, b) {
//   return a != b ? "Not Equal" : "Equal";
// }

// checkEqual(1, 2);

// function checkSign(num) {
// return num > 0 ? "positive"
// : num < 0 ? "negative"
// : "zero";

// }
// // console.log(checkSign(10));

// function repeatStringNumTimes (str, num) {
//   var rString= "h";
//   while (num>0){
//       rString+= str
//       num--
//   }
//   return rString
// }

// console.log(repeatStringNumTimes("*", 8))

//  Anagram chelenge//////////////////////////////////////
/* function anagram (str1, str2) {
  var a = str1.toLowerCase().replace(/\W/g, "").split("").sort().join();
  var b = str2.toLowerCase().replace(/\W/g, "").split("").sort().join();
  if (a === b ) return true;
  else return false;
}; 
 console.log(anagram("friend", "findr"));*/
 // RECURSION///////////////////////////

/* function rec(val){
     result = val
     if(val ==0 || val ==1){
          return 1
     }
     while (val>1){
     result = result * (val - 1);
     val --
     }
     return result
}
console.log (rec(5)) */

// RECURSION///////////////////////////
/* function sum(arr, n) {
  if(n <=0){
       return 0
  }
  else {
       return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log(sum([2, 3, 4, 5], 3)); */

// Recursion//////////////////////////////////////

/*function rec (n){
  if (n ==0 ){
    return []
  }
  else{
    let arr = rec(n-1)
    arr.push(n)
    return arr.sort(function(a, b){return b-a});
  }
}
console.log(rec(6)) */

// Recursion//////////////////////////////////////
/* function range(a, b){
  if (b<a){
    return []
  }
  else {
    var arr = range(a,b -1);
    arr.push(b);
    return arr
  }
} */

// Palindrome challenge///////////////////////////
/* function p (str){
  let str1 = str.toLowerCase().replace(/[\W_]/g, "").split("");
  let arr1 = [];
  for (let i = 0; i<str1.length; i++){
   arr1.push(str1[i]);
   }
  let arr2 = [].concat(arr1).reverse(-1).join();
   arr1 = arr1.join();

  console.log(arr2);
  console.log(arr1);
  if (arr1 == arr2) {
    return true;
  } else {
    return false;
  }
}
console.log(p("race car")); */

// Test()///////////////////////////////////////////

/* let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); */

// test() alternative //////////////////////////////
/* function testf(str){
  let result = /yes|no/
  return result.test(str)}
console.log(testf("gom  papa")) */

// test() ignore cases /////////////////////////////
/* function ignoreCamelCase(str){
  let result = /camel/i;
  return result.test(str);
}
console.log(testf("CAMEL"));//true
 */
