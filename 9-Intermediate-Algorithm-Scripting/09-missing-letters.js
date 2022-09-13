/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
    // console.log(str.charCodeAt()===str.charCodeAt(0))
    // console.log(String.fromCharCode(str.charCodeAt(0)+1))
    for(let i=0; i<str.length;i++){
      // console.log(str.charCodeAt(0+i))
      // console.log(String.fromCharCode(str.charCodeAt(0)+i))
      if(str.charCodeAt(i)!==str.charCodeAt(0)+i){
        return String.fromCharCode(str.charCodeAt(0)+i)
      }
    }
    return undefined
    // return str;
  }
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("abcdefghjklmno"));
  console.log(fearNotLetter("stvwx"));
  console.log(fearNotLetter("bcdf"));
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));