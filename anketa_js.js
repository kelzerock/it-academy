function identification() {
var lastName = prompt('введите вашу Фамилию');
    while (Boolean(lastName) == false || isNaN(Number(lastName))==false) {
    var lastName = prompt('введите вашу Фамилию корректно');
  } 
var firstName = prompt('введите ваше Имя');
    while (Boolean(firstName) == false || isNaN(Number(firstName))==false) {
    var firstName = prompt('введите ваше Имя корректно');
    } 
var otchestvo = prompt('введите ваше Отчество');
    while (Boolean(otchestvo) == false || isNaN(Number(otchestvo))==false) {
      var otchestvo = prompt('введите ваше Отчетсво корректно');
      } 
var ages = prompt('Укажите ваш возвраст, в годах');
ages = Number(ages)
      while (isNaN(ages) == true)
      {var ages = prompt('Укажите ваш возвраст корректно, в годах');
      ages = Number(ages)
      }
var gender = confirm('Если вы мужского пола нажмите "OK"');
var genderName = gender? 'мужской': 'женский';
var pensia
if (genderName == 'мужской')
{ages >65? pensia = 'да' :  pensia = 'нет'}
else {ages >60?  pensia = 'да' :  pensia = 'нет'}
alert(
'ваше ФИО: '+ lastName + ' ' + firstName + ' ' + otchestvo + 
'\n ваш возраст в годах: ' + ages +
'\n ваш возраст в днях: ' + ages*365 +
'\n через 5 лет вам будет: ' + (ages + 5) +
'\n ваш пол: ' + genderName +
'\n вы на пенсии: ' + pensia)
}