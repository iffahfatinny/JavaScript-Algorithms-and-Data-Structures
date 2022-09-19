/*
    Caesars Cipher
    One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a 
    shift cipher the meanings of the letters are shifted by some set amount.

    A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 
    A ↔ N, B ↔ O and so on.

    Write a function which takes a ROT13 encoded string as input and returns a decoded string.

    All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
    but do pass them on.
*/

function rot13(str) {
    const arr = str.split('');
    console.log(arr)
    const a = arr.map(b=>{
      //find matching letter
        if(b.match(/\w/)){
          console.log(b.charCodeAt())
          console.log(b.charCodeAt()+13)
          var change = b.charCodeAt()+13;
          //max ascii code for uppercase letter is 90
          if(change>90){
            //(-90) and (+64) because maximum ascii cose for uppercase letter is 90 and minimum is 65 where we need to +64 because 65 is A
            console.log(String.fromCharCode(change-90+64))
            return String.fromCharCode(change-90+64)
          }
          else{
            console.log(String.fromCharCode(change))
            return String.fromCharCode(change)
          }
        } else return b
    })
    console.log(a.join(''))
    const newSentence = a.join('');
    return newSentence;;
  }
  
  rot13("SERR PBQR PNZC"); //FREE CODE CAMP
  rot13("SERR CVMMN!"); //FREE PIZZA!
  rot13("SERR YBIR?"); //FREE LOVE?
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
  //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.