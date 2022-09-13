/*
DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    //split the str to array
    var array = str.split("");
    var newArr = [];
    for(let i=0;i<array.length;i++){
      //identify the array one by one
      //C always pair with G vice versa GC/CG
      //A always pair with T vice versa AT/TA
      if(array[i]==="C"){
        newArr.push(["C","G"])
      }
      else if(array[i]==="G"){
        newArr.push(["G","C"])
      }
      else if(array[i]==="A"){
        newArr.push(["A","T"])
      }
      else if(array[i]==="T"){
        newArr.push(["T","A"])
      }
    }
    console.log(newArr)
    return newArr;
  }
  
  pairElement("GCG");
  pairElement("ATCGA");
  pairElement("TTGAG");
  pairElement("CTCTA");