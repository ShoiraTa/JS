//DO WHILE///////////////////////////
// var myArray = [];
// var i = 10;
// do{
// myArray.push(i);
// i++;
// }
// while (i < 5)
// console.log(myArray);

// RECURSION///////////////////////////

// function rec(val){
//      result = val
//      if(val ==0 || val ==1){
//           return 1
//      }
//      while (val>1){
//      result = result * (val - 1);
//      val --
//      }
//      return result
// }

// console.log (rec(5))               

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

// function sum(arr, n) {
//   if(n <=0){
//        return 0
//   }
//   else {
//        return sum(arr, n - 1) + arr[n - 1];
//   }

// }

// console.log(sum([2, 3, 4, 5], 3));

// var contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//      for(var i =0; i<contacts.length; i++){
       
//      if (contacts[i].firstName === name) {
      
//        if (contacts[i].hasOwnProperty(prop)) {
//          return contacts[i][prop];
//        } else {
//          return "No such property";
//        }
//      }
//   }
//   return "No such contact";   

// }

// console.log(lookUpProfile("Akira", "likes"));
// function randomWholeNum() {
//   Math.floor(Math.random()*9)

//   return Math.random();
// }

function checkEqual(a, b) {
  return a != b ? "Not Equal" : "Equal";
}

checkEqual(1, 2);