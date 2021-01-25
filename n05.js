"use strict"



function treeSum(massiv){
  let summ=0 //вводим и идентифицируем переменную с начальным значением "0"
    for (var i = 0; i < massiv.length; i++) { //цикл по каждому елементу массива
      if (Array.isArray(massiv[i])) { //определяем перед нами массив или нет
      summ+= treeSum(massiv[i]); //е
      console.log(summ);
      } else { summ += massiv[i];
        console.log(summ); }
    }
return summ
}
let nn = [ 5, 7, 
  [ 4, [2], 8, [1,3], 2 ], 
  [ 9, [] ], 
  1, 8
]
treeSum(nn)

