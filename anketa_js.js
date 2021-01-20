function identification() {
var lastName = prompt('введите вашу Фамилию');
    while (Boolean(lastName) == false || isNaN(Number(lastName))==false) {
    var lastName = prompt('введите вашу Фамилию корректно');
  } 
var firstName = prompt('введите ваше Имя');
    while (Boolean(firstName) == false || isNaN(Number(firstName)) == false) {
    var firstName = prompt('введите ваше Имя корректно');
    } 
var otchestvo = prompt('введите ваше Отчество');
    while (Boolean(otchestvo) == false || isNaN(Number(otchestvo)) == false) {
      var otchestvo = prompt('введите ваше Отчетсво корректно');
      } 
var ages = prompt('Укажите ваш возвраст, в годах');
ages = Number(ages)
      while (Boolean(ages) == false || ages < 0)
      {var ages = prompt('Укажите ваш возвраст корректно, в годах');
      ages = Number(ages)
      }
var gender = confirm('Если вы мужского пола нажмите "OK", если женского - то нажмите "Отмена" или клавишу "esc"');
var genderName = gender? 'мужской': 'женский';
var pensia 

if(gender) {pensia = ages > 65? 'да' : 'нет'}
    else { pensia = ages >60?  'да' : 'нет'}
alert(
'ваше ФИО: '+ lastName + ' ' + firstName + ' ' + otchestvo + 
'\n ваш возраст в годах: ' + ages +
'\n ваш возраст в днях: ' + ages*365 +
'\n через 5 лет вам будет: ' + (ages + 5) +
'\n ваш пол: ' + genderName +
'\n вы на пенсии: ' + pensia)
}

function question(){
  let str = prompt('Введите любую строку!');
  clearString(str)
}

function clearString(x){
  while (x[0] == ' ') {
    x = x.replace(x[0], '') 
   }
   while (x[x.length-1] == ' ') {
     x = x.replace(x[x.length-1],'')
   }
   return console.log('>' + x + '<')
}
