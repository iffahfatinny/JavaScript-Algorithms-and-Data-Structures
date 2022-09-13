/*
    Sum All Odd Fibonacci Numbers
    Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

    The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

    For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    //F(n) = F(n-1) + F(n-2)
    var f0 = 0;
    var f1 = 1;
    var total = 0;
    while(f1<=num){
      if(f1%2!==0){
        total+=f1
        console.log("total "+total)
      }
      f1+=f0
      f0=f1-f0
      console.log("if "+total)
      console.log(f0)
      console.log(f1)
    }
    console.log("answer " +total)
    return total
  }
  
  sumFibs(10);