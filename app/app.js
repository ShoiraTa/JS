//DO WHILE/////////////////////////////////////////////////////////
/* var myArray = [];
var i = 10;
do{
myArray.push(i);
i++;
}
while (i < 5)
console.log(myArray);
 */

// array search hasOwnProperty /////////////////////////////////////
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
 console.log(lookUpProfile("Akira", "likes"));
} */

// Math.random() //////////////////////////////////////////////////
/* function randomWholeNum() {
  Math.floor(Math.random()*9)
  return Math.random();
}
 */

//  Function Expression ///////////////////////////////////////////
/* function checkEqual(a, b) {
  return a != b ? "Not Equal" : "Equal";
}
checkEqual(1, 2); */

//  Function Expression ///////////////////////////////////////////
/* function checkSign(num) {
return num > 0 ? "positive"
: num < 0 ? "negative"
: "zero";
}
console.log(checkSign(10));
 */

// while, repeat str ////////////////////////////////////////////////
/* function repeatStringNumTimes (str, num) {
  var rString= "h";
  while (num>0){
      rString+= str
      num--
  }
  return rString
}
console.log(repeatStringNumTimes("*", 8)) */

//  Anagram chelenge////////////////////////////////////////////////////
/* function anagram (str1, str2) {
  var a = str1.toLowerCase().replace(/\W/g, "").split("").sort().join();
  var b = str2.toLowerCase().replace(/\W/g, "").split("").sort().join();
  if (a === b ) return true;
  else return false;
}; 
 console.log(anagram("friend", "findr"));*/

 // RECURSION/////////////////////////////////////////////
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

// RECURSION/////////////////////////////////////////////
/* function sum(arr, n) {
  if(n <=0){
       return 0
  }
  else {
       return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log(sum([2, 3, 4, 5], 3)); */

// Recursion/////////////////////////////////////////////////

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

// Recursion//////////////////////////////////////////////////
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

// Palindrome challenge//////////////////////////////////////////
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

// Test()////////////////////////////////////////////////////

/* let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); */

// test() alternative ////////////////////////////////////////
/* function testf(str){
  let result = /yes|no/
  return result.test(str)}
console.log(testf("gom  papa")) */

// test() ignore cases /////////////////////////////////////
/* function ignoreCamelCase(str){
  let result = /camel/i;
  return result.test(str);
}
console.log(testf("CAMEL"));//true
 */

//  Match()/////////////////////////////////////////////////
/* function matching(){
let a = "hello";
let b = /ello/;
return a.match(b);
}
console.log(matching()); */

//  Match() reapeat g flag/////////////////////////////////////////////////
/* let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Rep/g;
console.log(testStr.match(ourRegex)); */

//  Match() reapeat g and i flag/////////////////////////////////////////////////
/* let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Rep/gi;
console.log(testStr.match(ourRegex)) */;

// The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words./////////////////////////////////////////////////////////////////////
//you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.
// to match lowercase letters a through e you would use [a-e]/////////////////////////////////

/* function wildcardSerch(str){
  let a = /h[ibcd]e./gi;
  return a.test(a)
}
console.log(wildcardSerch("hey"));//true */

// Example search from a to z from 0 to 6//////////////////////////////////////////////////////////////////////////////////
/* let sample = "is the 1chato 2ma4tch lowercase lettersfa 4 through678 e you would use";
let matching= /[a-z0-6]/gi;
let result =sample.match(matching)
console.log(result) */

// avoid characters in search ([^])
/* let sample = "is the 1chato 2ma4tch lowercase lettersfa 4 through678 e you would use";
let matching= /[^`@#$][a-z0-6]/gi;
let result =sample.match(matching)
console.log(result)  */

// find in the begnning (^)
/* let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal); */

// Find at he end of str ($)
/* let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose); */

// \w - this shortcut is equal to [A-Za-z0-9_]
//  \W.  This shortcut is the same as [^A-Za-z0-9_] Note, the opposite pattern uses a capital letter.
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;