/*
    Binary Agents
    Return an English translated sentence of the passed binary string.

    The binary string will be space separated.
*/

function binaryAgent(str) {
    var array = str.split(' ');
    var answer = [];
  
    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/
  
    for(let i=0;i<array.length;i++){
      //2 beside array[i] is equal to binary
      answer.push(String.fromCharCode(parseInt(array[i],2)))
    }
    str = answer.join('')
    console.log(str)
    return str;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");