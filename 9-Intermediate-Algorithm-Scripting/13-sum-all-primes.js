/*
    Sum All Primes
    A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

    Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    var total=2;
    var sum=0;
    var arr=[];
    for(let i=2;i<=num;i++){
      if(arr.every(prime=>total%prime!==0)){
        sum+=total
        arr.push(total)
      }
      total++
    }
    console.log(arr)
    console.log(sum)
    return sum
  }
  
  sumPrimes(10)
  sumPrimes(977);