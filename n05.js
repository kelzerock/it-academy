"use strict"

//согласно условиям задачи перед нами либо числа, либо массивы из чисел поэтому функции по преобразованию данных в числа не использовались.

function treeSum(massiv){
  let totalSumm=0 //вводим и идентифицируем переменную с начальным значением "0"
    for (var i = 0; i < massiv.length; i++) { //цикл по каждому елементу массива
      if (Array.isArray(massiv[i])) { //определяем перед нами массив или нет
      totalSumm+= treeSum(massiv[i]); //если перед нами массив запускаем в нее дальше нашу фунцию пока она не достигнет чисел
      console.log(totalSumm);
      } else { totalSumm += massiv[i]; //если перед нами не массив суммируем это число в переменную totalSumm
      console.log(totalSumm); }
    }
return totalSumm //возвращаем итог
}
let nn = [ 5, 7, 
  [ 4, [2], 8, [1,3], 2 ], 
  [ 9, [] ], 
  1, 8
]
treeSum(nn)

