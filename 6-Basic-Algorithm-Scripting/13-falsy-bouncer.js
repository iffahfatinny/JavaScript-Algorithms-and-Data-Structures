/*
    Remove all falsy values from an array.

    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

    Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
    let array = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i] !== false ){
        if(arr[i] !== null){
          if(arr[i] !== 0){
            if(arr[i] !==""){
              if(arr[i] !== undefined){
                if(!Number.isNaN(arr[i])){
                  array.push(arr[i]);
                }
              }
            }
          }
        }
      }
    }
    return array;
  }
  
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));