

/*
//-----------------------------------------------------------------------------//

// select elements from the DOM
//const inputElement = document.querySelector("#favchapter");//
const buttonElement = document.querySelector("button");
//const listElement = document.querySelector(".list");//

const inputElement = document.querySelector("#favchapter");
const listElement = document.querySelector(".list");

// wait for button clicks
buttonElement.addEventListener("click", function () {
	// Check if the user entered something
	if (inputElement.value != "") {
		// create list item and give it the value of the input
		const li = document.createElement("li");
		li.textContent = inputElement.value;
		// create a button and add a click event listener
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});
		// add the button to the list item
		li.appendChild(deleteBtn);
		// OUTPUT: finally display the completed list item to the unordered list
		listElement.appendChild(li);
		// clear the user input field
		inputElement.value = "";
		inputElement.style.color = "blue";

	}
	// focus the user back to the input field
	inputElement.focus();
});
*/

//OWN CODE//
const insert = document.querySelector("#favchapter");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", function () {
	if (insert.value.trim() !== "") {
		const element = document.createElement("li");
		element.textContent = insert.value;

		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";

		deleteBtn.addEventListener("click", function () {
			list.removeChild(element);
			insert.focus();
		});

		element.appendChild(deleteBtn);
		list.appendChild(element);
		insert.value = "";
		insert.focus();
	}
});

button.addEventListener("mouseenter", function () {
	button.style.backgroundColor = "blue";
	button.style.color = "white";
});

button.addEventListener("mouseleave", function () {
	button.style.backgroundColor = "";
	button.style.color = "";
});

/*const insert = document.querySelector("#favchapter");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", function (){

    if(insert.value != ""){
        const element = document.createElement("li");
        element.textContent = insert.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        deleteBtn.addEventListener("click", function(){
            list.removeChild(element);
            insert.focus();

        })	}

        list.appendChild(element);
        element.appendChild(deleteBtn);
        insert.value = "";
        insert.focus();
}
)
*/
