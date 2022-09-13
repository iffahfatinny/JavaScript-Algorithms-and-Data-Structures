/*
    Perform a search and replace on the sentence using the arguments provided and return the new sentence.

    First argument is the sentence to perform the search and replace on.

    Second argument is the word that you will be replacing (before).

    Third argument is what you will be replacing the second argument with (after).

    Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
    //1. sentence to perform search and replace
    //2. word that you will be replacing(before)
    //3. what you will be replacing the second argument with (after)
    
    //find indexOf before in str
    var findIndex = str.indexOf(before);
    //then check if 2 statement is true, if both true then capitalize first letter for after
    if(str[findIndex]===before[0].toUpperCase()){
      str =  str.replace(before,after[0].toUpperCase()+after.slice(1,))
    }
    else{
      //if false then change lowercase the first letter in after
      str = str.replace(before,after[0].toLowerCase()+after.slice(1,))
    }
    console.log(str)
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("Let us go to the store", "store", "mall")
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  myReplace("I think we should look up there", "up", "Down")
  myReplace("This has a spellngi error", "spellngi", "spelling")
  myReplace("His name is Tom", "Tom", "john")
  myReplace("Let us get back to more Coding", "Coding", "algorithms") 