"use strict"
/*Данная функция работает:
только с русскими буквами;
игнорирует "ъ" и "ь";
не учитывает разницу между "ё" и "е";
игнорирует знаки препинаня и другие различные символы */
function palindromeStart(){
  let request=prompt('Попробуйте себя в написаниии палиндромы!')
  if (request == null) {request = 'Тут могла быть строка придуманная вами!'}
  console.log('Ваша введенная строка: "' +request+'"')
  console.log(palindrome(request));
}

function palindrome(str){  
str = str.toLowerCase();//приводим все к нижнему регистру
let newStr = '';
let result;
for(let i = 0; i<str.length;i++) {
  if(str[i] >='а' && str[i] <='я'){
    newStr +=str[i]
    } else if(str[i] == 'ё'){
    newStr +='е';
}
}
for(let x = 0; x*2+newStr.length%2<newStr.length; x++) {
if (newStr[x]==newStr[newStr.length-1-x]) {
  
} else {return false}
}
return true
}

