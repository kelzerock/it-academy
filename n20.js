function ttt() {
  var a=Number(prompt('Введите a'));
  if (a === 0) {a=Number(prompt('Введите "a", причем "а" не может быть равно "0"'))}
  var b=Number(prompt('Введите b'));
  var c=Number(prompt('Введите c'));

  var d=b*b-4*a*c; // дискриминант
  console.log('дискриминант = '+d);

  if ( d<0 )
      alert('корней нет!');
  else if ( d==0 ) {
      var x=-b/(2*a);
      alert('один корень: '+x);
  }
  else {
      var x1=(-b+Math.sqrt(d))/(2*a);
      var x2=(-b-Math.sqrt(d))/(2*a);
      alert('два корня: '+x1+' и '+x2);
  }
}