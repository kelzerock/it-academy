
function question(){
  let str = clearString(prompt('Введите любую строку!')) ;
  console.log('>' + str + '<')
}

function clearString(x){
  let leftSpace = 0;
  let rightSpace = 0;
  for(i=0;x[i] == ' ' && i < x.length; ++i) {
    leftSpace = i+1;
    console.log(i)
  }
  for(y=1;(x[x.length-y] == ' ') && (i < x.length); ++y) {
    rightSpace = y;
    console.log(y)
  }
  return x = x.slice(leftSpace,x.length-rightSpace)
} 



