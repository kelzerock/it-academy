"use strict"
function startVowelsCountReduce(){

function vowelsCountReduce(str){ //функция для подсчета глассных в строке введенной пользователем
  let newStr = str.toLowerCase();// преобразуем все буквы в строчные
  let newStrArr = newStr.split('');
  let letter = 0;//счетчик гласных букв
  let vowelsRus = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];//создаем массив с русскими гласными буквами (заглавные не пишем так как строка будет приведена к нижнему регистру)
  function f(r,v,i,a){
    if(vowelsRus.includes(a[i])){
      r++;
     } 
     return r
    }
  return newStrArr.reduce(f, 0);
}

let askUser = prompt('Внесите данные для подсчета гласных.');
if (askUser == null) {askUser = 'Тут могла быть строка придуманная вами!'}
console.log('Введенная вами строка: "' +askUser +'"');
console.log('Количество гласных букв в предложении: ' + vowelsCountReduce(askUser));
}

