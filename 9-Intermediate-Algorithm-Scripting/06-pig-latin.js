/*
    Pig Latin
    Pig Latin is a way of altering English Words. The rules are as follows:

    - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

    - If a word begins with a vowel, just add way at the end.

    Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    var regex = /^[^aeiou]+/gi;
    if(str.match(regex)){
      var last = str.match(regex)
      console.log(str.replace(last,"").concat(last,"ay"))
      return str.replace(last,"").concat(last,"ay");
    }
    else{
      console.log(str.concat("way"))
      return str.concat("way");
    }
  }
  
  translatePigLatin("consonant");
  translatePigLatin("california");
  translatePigLatin("paragraphs");
  translatePigLatin("glove");
  translatePigLatin("algorithm");
  translatePigLatin("eight")
  translatePigLatin("schwartz")
  translatePigLatin("rhythm")