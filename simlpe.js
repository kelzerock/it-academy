
let a = 'faz';
solve(a);
function solve(s){
  letAChar = "a".charCodeAt();
  letZChar = "z".charCodeAt();
  let result =""
  let y = 1;
  let final = 0;
  for (let i = 0; i < s.length; i++) {

    if (s[i].charCodeAt() == letAChar){
      result += String.fromCharCode(s[i].charCodeAt()+1);
      // console.log(s[i])
    } else {
      if (s[i].charCodeAt() == letZChar) {
        result += String.fromCharCode(s[i].charCodeAt()-1);
        // console.log(s[i])
      } else {
        if (Math.random()>0.5) {
          result += String.fromCharCode(s[i].charCodeAt()+1);
          // console.log(s[i])
        } else {
          result += String.fromCharCode(s[i].charCodeAt()-1);
          // console.log(s[i])
        }
      }
    } 

  }
  for(let x = 0 ; x+y<result.length; x++){
  if (resul[x]== result[result.length-y]) {
  y++ ;
  } else {final++}
  }
  if(final == 0) {final = true} else{ final = false}
  return  final
}

//   s[i] == s[i].charCodeAt();
//   if (s[i].charCodeAt() == 97) {
//   s[i] == String.fromCharCode(s[i].charCodeAt()+1)
//   } else {
//     if (s[i].charCodeAt() == 122) {
//   s[i] == String.fromCharCode(s[i].charCodeAt()-1)
//   } else {s[i] == String.fromCharCode(s[i].charCodeAt()-1 || s[i].charCodeAt()+1) }
//   }
//   }
// console.log(s)
let s = 'bcd'
for (let i = 0; i<s.length; i++) {
if (Math.random>0.5) {
  s += String.fromCharCode(s[i].charCodeAt()+1);
  console.log(s[i])
} else {
  s += String.fromCharCode(s[i].charCodeAt()-1);
  console.log(s[i])
}
}