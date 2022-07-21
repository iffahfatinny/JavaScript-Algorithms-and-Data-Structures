/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in 
lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    let array = str.split(' ');
    let newStr = "";
    for(let i = 0; i<array.length;i++){
      array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
      newStr = array.join(" ");
    }return newStr;
  }
  
  console.log(titleCase("I'm a little tea pot"));