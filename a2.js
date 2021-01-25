
function question(){
  let str = clearString(prompt('Введите любую строку!')) ;
  console.log('>' + str + '<')
}

function clearString(x){
  let leftSpace = 0;
  let rightSpace = 0;
  let i = 0;
  let y = 1;
    if(x[i] != ' ' && x[x.length-y] != ' ') { //проверка, если пробелов нет в начале и конце строки - возвращаем 'x'
      console.log('Пробелов нет');
      return x;
    }

    while (x[i] == ' ' && i < x.length) {
    ++i;
    leftSpace = i+1;
    console.log(i)
    }
    if(i==x.length-1) {
      console.log('сработал только 1 цикл - строка из пробелов'); // если строка состоит только из пробелов 2-ой цикл даже не запускаем.
      return x='';
    } else {
      console.log('продолжаем работу')
    }

    while((x[x.length-y] == ' ') && (i < x.length)) {
    ++y;
    rightSpace = y;
    console.log(y)
    }
  return x = x.slice(leftSpace,x.length-rightSpace)
} 



