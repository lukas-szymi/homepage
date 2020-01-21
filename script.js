
const testValue = 7;

var emptyContainer = document.querySelector('.empty__container--js');

console.log(emptyContainer);

emptyContainer.innerHTML = `Some text ${testValue}`;

//let firstName = prompt("What is your name");
//let lastName = prompt("What is you las name");

//getUserName(firstName,lastName);

function getUserName(firstName, lastName){
  console.log(`My name is ${firstName} and my lastname is ${lastName}`);
}