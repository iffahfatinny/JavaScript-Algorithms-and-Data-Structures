/*
    Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    let newWord = str.slice(0 , num);
    let newWords = "";
    if(newWord.length < str.length){
      newWords = newWord + "...";
    }
    else
      newWords = newWord;
    return newWords;
  }
  
  console.log(truncateString("Absolutely Longer", 2));