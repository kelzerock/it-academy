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
drinkStorage.addValue('vodka', 'water and spirt');
drinkStorage.addValue('beer', 'water and hmel');
drinkStorage.getKeys()
