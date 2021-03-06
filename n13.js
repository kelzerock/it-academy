"use strict"

function HashStorageFunc(){
  var self = this;
  self.storage ={}
  self.addValue = function(key,value){
    self.storage[key]=value;
  }

  self.getValue = function(key){
      return self.storage[key]
   }
  self.deleteValue = function(key){ 
   if (key in self.storage){
     delete self.storage[key];
     return true
   } else {return false}
  }

  self.getKeys = function(){
    return Object.keys(self.storage);
  }
}
var drinkStorage = new HashStorageFunc();
drinkStorage.addValue('Лимонад',[false, 'Вода, лимон и мята', 5]);
drinkStorage.addValue('Май Тай',[true, 'светлый и темный ром, миндальный сироп, лед', 20]);
drinkStorage.addValue('Мимоза',[true, 'Шампанское, апельсиновый сок, долька апельсина', 14]);


function addAlco() {
  let nameAlco = prompt('Введите название напитка');
  if(nameAlco === null){return}
  let alco = confirm('Данный напиток алкогольный? Если "Да" нажмите "ОК".');
  if (alco) { alco = 'да' } else { alco = 'нет' }
  let recipe = prompt('Введите рецепт напитка!')
  let price = parseFloat(prompt('Введите цену напитка!'));
  while (Boolean(price) == false || price < 0) {
    price = parseFloat(prompt('Введите цену напитка!'))
  };
  drinkStorage.addValue(nameAlco, [alco, recipe, price])
}
function getAlcoValue() {
  let nameAlco = prompt('Введите название напитка')
  let valueAlco = drinkStorage.getValue(nameAlco);
  if (valueAlco == undefined) {
    alert("Отсутствует информация о данном напитке")
  } else {
    alert("Информация о напитке: " + nameAlco + ";\n"
      + "Алкогольный: " + valueAlco[0] + ";\n"
      + "Рецепт: " + valueAlco[1] + ";\n"
      + "Цена напитка: " + valueAlco[2] + " руб.")
  }
}
function deleteAlco() {
  let nameAlco = prompt('Введите название напитка');
  let alco = drinkStorage.deleteValue(nameAlco);
  alco ? alert('Напиток "' + nameAlco + '" удален из базы данных') : alert('Такого напитка нет в базе данных!');
}
function listAlco() {
  let arrAlco = drinkStorage.getKeys();
  let strList = '';
  for (let i = 0; i < arrAlco.length; i++) {
    strList += (i + 1) + ') ' + arrAlco[i] + ';\n'
  }
  return alert(strList.slice(0, strList.length))
}