var name = 'Alex';
var surname = 'zhuchkov';
var myLogin = {};
myLogin.name = name;
myLogin.surname = surname;
myLogin.age = 35;
myLogin['my-car']={
  brand: 'skoda',
  age: '3 years'
}

myLogin.name = 'newName';
myLogin.surname = 'newSurname';
delete myLogin['name']
delete myLogin['surname']

console.log(myLogin)