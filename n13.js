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
    return Object.keys(self);
  }
}
var drinkStorage = new HashStorageFunc();
drinkStorage.addValue('vodka', 'water and spirt');
drinkStorage.addValue('beer', 'water and hmel');
drinkStorage.getKeys()
