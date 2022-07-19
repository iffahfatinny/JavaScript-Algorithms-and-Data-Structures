/*
    Reverse the provided string.

    You may need to turn the string into an array before you can reverse it.

    Your result must be a string.
*/

function reverseString(str) {
    let reverse = "";
    for(let i=str.length - 1; i>=0; i--){
      reverse += str[i];
      console.log(reverse)
    }
    return reverse;
  }
  
  reverseString("hello");