/*
    Roman Numeral Converter
    Convert the given number into a roman numeral.

    Roman numerals	Arabic numerals
    M	1000
    CM	900
    D	500
    CD	400
    C	100
    XC	90
    L	50
    XL	40
    X	10
    IX	9
    V	5
    IV	4
    I	1
    All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    const roman = {
       M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    //initialise test2
    var romanNum = "";
    //create for loop using length of roman
    for(let j=0; j<Object.keys(roman).length;j++){
      // object value = roman[Object.keys(roman)[j]]
      // object key = Object.keys(roman)[j]
      while(num>=roman[Object.keys(roman)[j]])
      {
        //test = test + object key (roman number)
        romanNum+=Object.keys(roman)[j]
        //num = num = object value (non roman number)
        num-=roman[Object.keys(roman)[j]]
      }
    }
    //return test2
    return romanNum
  }
  
  function convertToRoman(num) {
    const roman = {
         M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      }
      //initialise test2
      var romanNum = "";
      //create for loop using length of roman
      for(let j=0; j<Object.keys(roman).length;j++){
        // object value = roman[Object.keys(roman)[j]]
        // object key = Object.keys(roman)[j]
        while(num>=roman[Object.keys(roman)[j]])
        {
          //test = test + object key (roman number)
          romanNum+=Object.keys(roman)[j]
          //num = num = object value (non roman number)
          num-=roman[Object.keys(roman)[j]]
        }
      }
      //return roman Number
      console.log(romanNum)
      return romanNum
    }
  convertToRoman(2);
  convertToRoman(3);
  convertToRoman(4);
  convertToRoman(5);
  convertToRoman(9);
  convertToRoman(12)
  convertToRoman(16)
  convertToRoman(29)
  convertToRoman(44)
  convertToRoman(45)
  convertToRoman(68)
  convertToRoman(83)
  convertToRoman(97)
  convertToRoman(99)
  convertToRoman(400)
  convertToRoman(500)
  convertToRoman(501)
  convertToRoman(649)
  convertToRoman(798)
  convertToRoman(891)
  convertToRoman(1000);
  convertToRoman(1004)
  convertToRoman(1006)
  convertToRoman(1023)
  convertToRoman(2014)
  convertToRoman(3999)