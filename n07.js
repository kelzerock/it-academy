"use strict"
function startVowelsCount(){

function vowelsCount(str){ //функция для подсчета глассных в строке введенной пользователем
  let newStr = str.toLowerCase();// преобразуем все буквы в строчные
  let letter = 0;//счетчик гласных букв
  let vowelsRus = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];//создаем массив с русскими гласными буквами (заглавные не пишем так как строка будет приведена к нижнему регистру)
  for (let i=0; i<newStr.length; i++){ // задаем цикл по всей строке, если буква есть в массиве - увеличиваем счетчик на +1
    if (vowelsRus.includes(newStr[i])) {
      ++letter;
  }
  }
  return letter;
}

let askUser = prompt('Внесите данные для подсчета гласных.');
if (askUser == null) {askUser = 'Тут могла быть строка придуманная вами!'}
console.log('Введенная вами строка: "' +askUser +'"');
console.log('Количество гласных букв в предложении: ' + vowelsCount(askUser));

}