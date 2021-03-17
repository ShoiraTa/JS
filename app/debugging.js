let str = "three"
console.log(typeof str)

function array (a,b){
     let newArr= []
     for (i=0; i<a; i++)

{
     let row = [];
     for (j=0; j<b; j++){
          row.push(0)
     }
newArr.push(row)
}
return newArr  
}
console.log(array(3, 3));

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];

  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);