/*
    Steamroller
    Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    const newArr = []
    
    //check is the element is array
    if(!Array.isArray(arr)){
      console.log("check element = " + [arr])
      return [arr]
    }
  
    for(let i=0;i<arr.length;i++){
      //initialize the current array element arr[i]
        let current = steamrollArray(arr[i])
        console.log("check current = " + current)
        //extract element od array to subarray
        for(let j=0;j<current.length;j++){
          //push subarray to newArr
          console.log("current[j] = " + current[j])
          newArr.push(current[j])
      }
    }
    console.log(newArr)
    return newArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([[["a"]], [["b"]]]);
  steamrollArray([1, {}, [3, [[4]]]]);
  steamrollArray([1, [], [3, [[4]]]]);