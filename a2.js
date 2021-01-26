
function question(){
  let str = prompt('Введите любую строку!');
  console.log('Ваша введенная строка: "' +str+'"')
  
  console.log('Результат: >' + clearString(str) + '<')
}

function clearString(x){
  let leftSpace = 0;
  let rightSpace = 0;
  let i = 0;
  let y = 0;
    if(x[i] != ' ' && x[x.length-1] != ' ') { //проверка, если пробелов нет в начале и конце строки - возвращаем 'x'
      console.log('Пробелов в начале и конце строки - нет!');
      return x;
    }

    while (x[i] == ' ' && i < x.length) {
    ++i;
    leftSpace = i;
    }
    if(i==x.length) {
      console.log('Строка состоит из одних пробелов (сработал только один цикл)!'); // если строка состоит только из пробелов 2-ой цикл даже не запускаем.
      return x='';
    } 

    while((x[x.length-y-1] == ' ') && (y < x.length)) {
    ++y;
    rightSpace = y;
    }
  return x = x.slice(leftSpace,x.length-rightSpace)
} 



