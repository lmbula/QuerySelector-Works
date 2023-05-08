// querySelector('any css); - selects single
// querySelectorAll('any css); - selects all

const result = document.querySelector("#result");
//result.style.color= 'blue';

const item = document.querySelector(".items-special");
console.log(item); // Will return only the fisrt instance in the list

const lastItem = document.querySelector('li:last-child');
console.log(lastItem); //selects the last item in the li tag

const list = document.querySelectorAll('.items-special');

list.forEach(function(item){
  item.style.color = 'red';
});