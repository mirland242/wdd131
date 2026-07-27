/* setting three variables that hold reference*/

const favchapter = document.querySelector(#favchapter);
const button = document.querySelector('button');
const list = document.querySelector('ul');

/*Creation of li*/

const li = document.createElement('li');

/*The delete button*/

const deleteButton = document.createElement('button');

/*populate li*/

li.textContent = input.value;

/*Appending delete button with li element*/

li.appendChild(deleteButton);

/*Set the delete button's textContent to ❌*/

deleteButton.textContent = '❌';

/*Append the li element variable to the unordered list in your HTML.*/

list.appendChild(li);