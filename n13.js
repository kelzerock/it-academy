"use strict"

function HashStorageFunc(key, value){
  var self = this;
  self.addValue = function(key,value){
    self[key]=value;
  }
  self.getValue = function(key){
    if(key in self) {
      console.log(self[key])
    } else {undefined}

  }
  self.deleteValue = function(key){ 
   if (key in self){
     delete self[key];
     return true
   } else {return false}
  }

  self.getKeys = function(){
      for (var keysMassive in self) {
      console.log(keysMassive);
      }
  }
}
var drinkStorage = new HashStorageFunc('information', 'alco',);
drinkStorage.addValue('vodka', 'water and spirt');
drinkStorage.addValue('beer', 'water and hmel');
drinkStorage.getKeys()

  self.listValue= listValue= {};
  self.addValue = function(key,value){
    listValue.key = value
  }
  self.getValue = function(key){
    if(key in listValue) {
      console.log(listValue.key)
    } else {undefined}

  }
  self.deleteValue = function(key){ 
   if (key in listValue){
     delete listValue.key;
     console.log(true)
   } else {console.log(false)}
  }
  self.getKeys = function(){
       let keysMassive = []
       for (key in listValue)
       return console.log(keysMassive.push(key))
  }

}

var drinkStorage = new HashStorageFunc('information', 'alco', 'recepter')

// function HashStorageFunc(key, value){
//   var self = this;
//   self.listValue = {};
//   self.addValue = function(key,value){
//     listValue.key = value
//   }
//   self.getValue = function(key){
//     if(key in listValue) {
//       console.log(listValue.key)
//     } else {undefined}

//   }
//   self.deleteValue = function(key){ 
//    if (key in listValue){
//      delete listValue.key;
//      console.log(true)
//    } else {console.log(false)}
//   }
//   self.getKeys = function(key){
//        let keysMassive = []
//        for (key in listValue)
//        return console.log(keysMassive.push(key))
//   }

// }

// var drinkStorage = new HashStorageFunc('information', 'alco', 'recepter')