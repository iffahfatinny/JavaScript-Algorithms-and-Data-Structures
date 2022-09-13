/*
    Arguments Optional
    Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

    For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

    Calling this returned function with a single argument will then return the sum:

    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) returns 5.

    If either argument isn't a valid number, return undefined.
*/

function addTogether(){
    // console.log(arguments.length)
    const [a,b] = arguments;
    //check if a is an integer
    if(Number.isInteger(a) !== true){
      // console.log(Number.isInteger(a))
      return undefined
    }
    //if arguments.length === 1 then proceed to second arguments
    if(arguments.length === 1){
      return function(b){
        if(Number.isInteger(b)){
          console.log(a+b)
          return a+b
        }
        else{
          return undefined
        }
      }
    }
    //check is b is an integer
    if(Number.isInteger(b) !== true){
      console.log(Number.isInteger(b))
      return undefined
    }
    console.log(a+b)
    return a+b
  }
  
  addTogether(2,3);
  addTogether(23, 30);
  addTogether(5)(7);
  addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  addTogether(2, "3");
  addTogether(2)([3]);
  addTogether("2", 3);
  addTogether(5, undefined);