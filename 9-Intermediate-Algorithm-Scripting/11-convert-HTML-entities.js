/*
    Convert HTML Entities
    Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    const character = {
      '&' : '&amp;',
      '<' : '&lt;',
      '>' : '&gt;',
      '"' : '&quot;',
      "'" : '&apos;'
    }
    for(let i=0; i<str.length; i++){
      if(str[i] === '&'){
        str = str.replace('&',character['&'])
      }
      else if(str[i] === '<'){
        str = str.replace('<',character['<'])
      }
      else if(str[i] === '>'){
        str = str.replace('>',character['>'])
      }
      else if(str[i] === '"'){
        str = str.replace('"',character['"'])
      }
      else if(str[i] === "'"){
        str = str.replace("'",character["'"])
      }
    }
    console.log(str)
    return str;
  }
  
  convertHTML("Dolce & Gabbana");
  convertHTML("Hamburgers < Pizza < Tacos");
  convertHTML("Sixty > twelve");
  convertHTML('Stuff in "quotation marks"');
  convertHTML("Schindler's List");
  convertHTML("<>");
  convertHTML("abc");