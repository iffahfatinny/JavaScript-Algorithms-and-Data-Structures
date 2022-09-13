/*
    Sum All Numbers in a Range
    We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

    For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    //find min and max in array
    const start = Math.min(arr[0],arr[1]);
    const end = Math.max(arr[0],arr[1]);
    var sum = 0;
    for(let i=start; i<=end; i++){
      sum += i;
    }
    return sum
  }
  
  console.log(sumAll([1, 4]));