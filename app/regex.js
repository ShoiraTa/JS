// i - ignore cases
// g flag- search or extract a pattern more than once
// * - Zero or more times
// + - One or more times
// ? - Zero or one times (optional) ?=
// {n} - Exactly n times
// {n,} - n or more times
// {,m} - m or less times
// {n,m} - At least n and at most m times

// \S non whitespace tab new line
// \swhitespace tab new line
// + look for one or more characters
// * look for zero or more character
// . match any one character /hu./ (hug, huh, hun all true)
// | Or
// /g[oeu]n/  find multiple possabilities of str
// [a-z0-6] from to
// ([^]) avoid characters in search
// (^) find in the begnning
// ($) - Find at the end of str
// \w - find [A-Za-z0-9_]
// \W. non [A-Za-z0-9_] = [^A-Za-z0-9_]
// /\d/ - A digit character ([0-9])
// \D  non-digits  =[^0-9]
// ?  checks for zero or one  element
// (?=...) pattern that you want  want to be there
// (?!...) pattern that you do not want to be there
// () check for groups of characters /P(engu|umpk)in/g
// \1  repeat; /(\w+)\s\1/ repeats first group

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!// /1. ^ - start of input
// 2. [a-z] - first character is a letter
// 3. [a-z]+ -has one or more letters next
// 4. \d*$ -  ends with 0 or more numbers
// 5. | - or
// 6. ^[a-z] - first character is a letter
// 7. \d\d+ - following characters are 2 or more digits
// 8. $ - end of input
// 9. [0-9]{2,0} - ends with two or more numbers
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/

// Example
/* let username = "c57bT3";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi; // Change this line
let result = userCheck.test(username);
*/

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

//  Match() reapeat g and i flag/////////////////////////////////////////////////
/* let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Rep/gi;
console.log(testStr.match(ourRegex)) */ // The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words./////////////////////////////////////////////////////////////////////
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

// \s match whitespace, tab, form feed, and new line characters.\\\\\\\\\\\\\\\\\\\\\\\\\\
/* let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace); */

// {3,6} match a certain range of patterns
/* let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/gi; // Change this line
let result = ohRegex.test(ohStr);
*/

// ?
/* let favWord = "favourite";
let favRegex = /favou?rite/gi; // Change this line
let result = favRegex.test(favWord);
 */

//  looks for at least 3 letters  and at least one number
/*  let password ="gfjskdmk"
 let check = /(?=[a-z]{3,})(?=\D*\d)/
 let correct = check.test(password);*/

//  greater than 5 characters long, and have two consecutive digits.
/*  let sampleWord = "bana12";
 let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
 let result = pwRegex.test(sampleWord);*/

//  check for groups of characters (|)
/* let myString = "Franklin D. Roosevelt";
let myRegex = /(Eleanor|Franklin)\s.*Roosevelt/;
let result = myRegex.test(myString); */

//match a string that consists of only the same number repeated exactly three times separated by single spaces.
/* let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result); */

// replace()
/* 
let text = "one two three"
let regexText = (/(\w+)\s(\w+)\s(\w+)/)
let replaceText= "$2, $3, $1"
let finalText = text.replace(regexText, replaceText);
console.log(finalText) */

// replace whitespace
let text = "   hello world!    ";
let replaceText = /^\s+|\s+$/g;
let result = text.replace(replaceText, "");
console.log(result);
