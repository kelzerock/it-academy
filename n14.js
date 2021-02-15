"use strict"

class HashStorageFuncES {
  constructor() {
    this.storage = {};
  }
addValue(key, value){
  this.storage[key] = value;
}
getValue(key){
  return this.storage[key]
}
deleteValue(key){ 
if (key in this.storage){
 delete this.storage[key];
 return true
} else {return false}
}

getKeys(){
return Object.keys(this.storage);
}
}

var drinkStorageES6 = new HashStorageFuncES();
drinkStorageES6.addValue('Лимонад',[false, 'Вода, лимон и мята', 5]);
drinkStorageES6.addValue('Май Тай',[true, 'светлый и темный ром, миндальный сироп, лед', 20]);
drinkStorageES6.addValue('Мимоза',[true, 'Шампанское, апельсиновый сок, долька апельсина', 14]);

function addAlcoES() {
  let nameAlco = prompt('Введите название напитка');
  if(nameAlco === null){return}
  let alco = confirm('Данный напиток алкогольный? Если "Да" нажмите "ОК".');
  if (alco) { alco = 'да' } else { alco = 'нет' }
  let recipe = prompt('Введите рецепт напитка!')
  let price = parseFloat(prompt('Введите цену напитка!'));
  while (Boolean(price) == false || price < 0) {
    price = parseFloat(prompt('Введите цену напитка!'))
  };
  drinkStorageES6.addValue(nameAlco, [alco, recipe, price])
}
function getAlcoValueES6() {
  let nameAlco = prompt('Введите название напитка')
  let valueAlco = drinkStorageES6.getValue(nameAlco);
  if (valueAlco == undefined) {
    alert("Отсутствует информация о данном напитке")
  } else {
    alert("Информация о напитке: " + nameAlco + ";\n"
      + "Алкогольный: " + valueAlco[0] + ";\n"
      + "Рецепт: " + valueAlco[1] + ";\n"
      + "Цена напитка: " + valueAlco[2] + " руб.")
  }
}
function deleteAlcoES6() {
  let nameAlco = prompt('Введите название напитка');
  let alco = drinkStorageES6.deleteValue(nameAlco);
  alco ? alert('Напиток "' + nameAlco + '" удален из базы данных') : alert('Такого напитка нет в базе данных!');
}
function listAlcoES6() {
  let arrAlco = drinkStorageES6.getKeys();
  let strList = '';
  for (let i = 0; i < arrAlco.length; i++) {
    strList += (i + 1) + ') ' + arrAlco[i] + ';\n'
  }
  return alert(strList.slice(0, strList.length))
}

