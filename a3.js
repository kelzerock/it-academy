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
while(str.includes('ё')==true) {str = str.replace('ё','е')};//циклом заменяем "ё" на "е" для исключения ошибок в будущих проверках
let globalA = 0;//счетчик для определения нахождения левой буквы палиндрома
let globalB = 0;//счетчик для определения нахождения правой буквы палиндрома
let result = 0;// данная переменная введена для итоговой проверки, если она не изменится - значит введена палиндрома
let gg = selection(str);//запускаем внутреннюю функцию, для определения входит ли текущая буква в заданный диапазон букв. Результат фунция возвращает в виде хэша.
globalA = gg.a;// присваиваем счетчику полученные из хэша данные (лев.символ)
globalB = gg.b;// присваиваем счетчику полученные из хэша данные (прав.символ)
while(globalA+globalB<str.length) {//цикл по проверке букв первой и последней, каждый цикл приближает сравнение к середине предложения (с учетом игнорирования знаков препинания и других различных символов)
  if (str[globalA]==str[str.length-globalB]) {
    globalA++;
    globalB++;
    let gg = selection(str);
    globalA = gg.a;
    globalB = gg.b;
  } else {
    result++;//счетчик итога увиличиваем до прерывания цикла
    break;}
}
if (result === 0) {result = true} else {result = false}
return result;

function selection(str){//фунция по отбору нужных символов - буквы русского алфавита
let massive = {'а': true, 'б': true, 'в': true,'г': true,'д': true,'е': true,'ж': true,'з': true,'и': true,'й': true,'к': true,'л': true,'м': true,'н': true,'о': true,'п': true,'р': true,'с': true,'т': true,'у': true,'ф': true,'х': true,'ц': true,'ч': true,'ш': true,'щ': true,'ы': true,'э': true,'ю': true,'я': true,};
let a = globalA;
let b = globalB;

while((str[a] in massive == false) && (a<str.length)){//сдвигаем счетчик пока не найдем подходящую букву из диапазона
  a++;
}
while((str[str.length-b] in massive == false) && (b<str.length)){//сдвигаем счетчик пока не найдем подходящую букву из диапазона
  b++;
}
return {a:a , b:b}// возвращаем результат в виде хэша
}
}
