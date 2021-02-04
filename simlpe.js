
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

let a = 'zaz';
solve(a);
function solve(s){
  s = s.toLowerCase();
  let result ="";
  let y = 1;
  let final = 0;
  
  for(let x = 0 ; x+y<s.length; x++){
  if (s[x] == s[s.length-y]) {
  y++ ;
  } else {final++}
  }
  if(final == 0) {final = true} else{ final = false}
  return  final
}

// Difference of Volumes of Cuboids
function findDifference(a, b) {
let summA = 1;
let summB = 1;
for(let i = 0; i<a.length; i++){
  summA *= a[i];
}
for(let x = 0; x<b.length; x++){
  summB *= b[x];
}
let result;
if(summA>summB){
  result=summA-summB
} else {result = summB - summA}
return result
}

//Tribonacci Sequence
function tribonacci(signature,n){
let result = [];
for(let i = 0; i<n; i++) {

}
}
// Create palindrome
function solve(s){
  s = s.toLowerCase();
  let result;
  for(let i = 0; i*2<s.length; i++) {
 if(
    ((s[i].charCodeAt()-1 == s[s.length-1-i].charCodeAt()+1) && (s[i].charCodeAt()-1 != (96 && 122))) ||
    ((s[i].charCodeAt()-1 == s[s.length-1-i].charCodeAt()-1) && (s[i].charCodeAt()-1 != (96 && 122))) ||
    ((s[i].charCodeAt()+1 == s[s.length-1-i].charCodeAt()+1) && (s[i].charCodeAt()+1 != (96 && 122))) ||
    ((s[i].charCodeAt()+1 == s[s.length-1-i].charCodeAt()-1) && (s[i].charCodeAt()+1 != (96 && 122))) 
    )
    {   } else {return false}
   }
 
   return true;
 }


  //  if(((s[i].charCodeAt()-1 == s[s.length-1-i].charCodeAt()+1) && 
  //           ((s[i].charCodeAt()-1)>=97) && 
  //           ((s[i].charCodeAt()-1)<=122) && 
  //           ((s[s.length-1-i].charCodeAt()+1)>=97) &&
  //           ((s[s.length-1-i].charCodeAt()+1)<=122)  || 
  //       ((s[i].charCodeAt()-1 == s[s.length-1-i].charCodeAt()-1) &&  
  //           ((s[i].charCodeAt()-1)>=97) && 
  //           ((s[i].charCodeAt()-1)<=122) && 
  //           ((s[s.length-1-i].charCodeAt()-1)>=97) &&
  //           ((s[s.length-1-i].charCodeAt()-1)<=122))   ||
  //       ((s[i].charCodeAt()+1 == s[s.length-1-i].charCodeAt()+1) &&
  //           ((s[i].charCodeAt()+1)>=97) && 
  //           ((s[i].charCodeAt()+1)<=122) && 
  //           ((s[s.length-1-i].charCodeAt()+1)>=97) &&
  //           ((s[s.length-1-i].charCodeAt()+1)<=122))   ||
  //       ((s[i].charCodeAt()+1 == s[s.length-1-i].charCodeAt()-1) &&
  //           ((s[i].charCodeAt()+1)>=97) && 
  //           ((s[i].charCodeAt()+1)<=122) && 
  //           ((s[s.length-1-i].charCodeAt()-1)>=97) &&
  //           ((s[s.length-1-i].charCodeAt()-1)<=122))  
  //     ))

