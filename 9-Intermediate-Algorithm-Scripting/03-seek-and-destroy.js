/*
    Seek and Destroy
    You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

    Note: You have to use the arguments object.
*/

function destroyer(arr) {
    var newArray =[];
    // console.log(arguments)
    //must convert arguments to array so it can use with map(), filter(),foreach(),sort()
    const arr2 = Array.prototype.slice.call(arguments).slice(1);
    //arr2 = [2,3,5]
    //arr = [3,5,1,2,2]
    for(let i=0;i<arr.length;i++){
      //if element arr not in arr2, push arr to newArray
      if(arr2.includes(arr[i])===false){
        newArray.push(arr[i])
      }
    }
    return newArray;
  }
  
  destroyer([3, 5, 1, 2, 2], 2, 3, 5);