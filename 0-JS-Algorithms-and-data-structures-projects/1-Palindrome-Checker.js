/*
    A palindrome is a word or sentence that's spelled the same way both forward and 
    backward, ignoring punctuation, case, and spacing.

    Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and 
    symbols) and turn everything into the same case (lower or upper case) in order to 
    check for palindromes.

    We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR 
    among others.

    We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
    let check = /[^a-zA-Z0-9]/gi;
    let reverse = "";
    let newStr = str.replace(check,"");
    for(let i = newStr.length-1; i >= 0; i--){
      reverse += newStr[i];
    }
    if(reverse.toLowerCase() === newStr.toLowerCase()){
      return true;
    }
    else{
      return false;
    }
  }
  
  console.log(palindrome("My age is 0, 0 si ega ym"));