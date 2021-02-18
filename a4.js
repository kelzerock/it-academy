'use strict'
function palindromeRecursionStart(){
  let strPalidrome = prompt('Введите Ваш палиндром!');
  console.log(palindromeRecursion(strPalidrome))

function palindromeRecursion(str) {
  str = str.toLowerCase();
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'а' && str[i] <= 'я') {
      newStr += str[i]
    } else if (str[i] == 'ё') {
      newStr += 'е'
    }
  }
  return deepPalindrome(newStr) === 0 ? true : false;
  function deepPalindrome(x, i = 0) {
    let result = 0;
    if (x[i] == x[x.length - i - 1]) {
      if ((i < Math.floor(x.length / 2))) {
        i++
        result += deepPalindrome(x, i);
      } else { result = 0 }
    } else {
      if (i < Math.floor(x.length / 2)) {
        result = 1;
      } else {
        result = 0;
      }
    }
    return result
  }
}
}