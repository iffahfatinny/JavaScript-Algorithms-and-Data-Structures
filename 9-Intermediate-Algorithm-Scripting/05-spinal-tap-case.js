/*
    Spinal Tap Case
    Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    //find space and _
    var array = (/\s+|_/g);
    //replace small letter/capital letter with space($1 $2)
    str = str.replace(/([a-z])([A-Z])/g,"$1 $2")
    //after find array (space and _) replace it with -
    const string = str.replace(array,"-")
    //return the string with lowercase
    return string.toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("thisIsSpinalTap")
  spinalCase("Teletubbies say Eh-oh")
  spinalCase("AllThe-small Things")