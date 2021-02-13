
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
    {
           } else {return false}
   }
 
   return true;
 }


var isAnagram = function (test, original) {
  if (test.length != original.length) {
    return false
  }
  test = test.toLowerCase();
  original = original.toLowerCase();
  test = test.split('');
original = original.split('');

function ss(a,b){
  if(b<a) return -1;
  if(b>a) return 1;
  return 0
}

test.sort(ss);
original.sort(ss);
for(let i=0; i<test.length; i++){
if(test[i] != original[i]){
  return false
} 

  }
 }

function mygcd(x, y) {
  let count = 1;

  nextDown(x, y)

  function nextDown(x, y) {
    for (let i = Math.min(x, y); i > 1; i--) {
      if (x % i == 0 && y % i == 0) {
        count *= i;
        x = x / i;
        y = y / i;
        nextDown(x,y)
        console.log(i + 'yes')
      } else{console.log(x+'|'+y+"|"+i)}
    }
   
  }
 return count
}
function mygcd(x, y) {
  let count = 1;
  nextDown(x, y)

  function nextDown(x, y) {
    for (let i = 2; i < Math.min(x, y); i++) {
      if (x % i == 0 && y % i == 0) {
        console.log(x + '|' + y + '|' + i)
        console.log(count)
        count *= i;
        x = x / i;
        y = y / i;
        console.log(x + '|' + y + '|' + i)
        console.log(count)
        nextDown(x, y)
      }
    }
  }
  return count
}
