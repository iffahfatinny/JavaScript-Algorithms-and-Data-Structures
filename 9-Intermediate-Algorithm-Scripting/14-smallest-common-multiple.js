/*
    Smallest Common Multiple
    Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

    The range will be an array of two numbers that will not necessarily be in numerical order.

    For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
    // console.log(arr)
    var max,min;
    var division =[]
    var max = Math.max(arr[0],arr[1]);
    var min = Math.min(arr[0],arr[1]);
    // console.log(max)
    for(let i=min;i<=max;i++){
      division.push(i)
      // console.log(division)
    }
    var j=1;
    var a=max;
    for(let p=max;p>=min;p--){
          for(let j=0; j<division.length;j++){
            if(a%division[j]!==0){
              a+=max
            }
          }
        p=max
    }
    console.log(a)
    return a;
  }
  
  smallestCommons([23, 18]);