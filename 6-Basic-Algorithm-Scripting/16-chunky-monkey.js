/*
    Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
    let newArray = [];
    let arr1="";
    while(arr.length >= size){
      if(arr.length >= size){
      arr1 = arr.splice(0,size);
      newArray.push(arr1);
      }    
    }
    if(arr.length > 0){
        newArray.push(arr);
    }
    return newArray;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));