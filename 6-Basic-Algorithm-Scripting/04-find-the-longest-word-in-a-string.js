/*
    Return the length of the longest word in the provided sentence.

    Your response should be a number.
*/

function findLongestWordLength(str) {
    let count = 0;
    let max = 0;
    for(let i=0; i < str.length; i++)
    {
      if(str[i] !== ' '){
        count++;
      }
      else
      {
        if(max <= count){
          max = count;
          count = 0;
        }
        else
        {
          count = 0;
        }
      }
    }
    if(max <= count){
        max = count;
        count = 0;
      }
    return max;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));