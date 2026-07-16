button = document.querySelector(".burger");
navBar = document.querySelector(".navigation");

button.addEventListener("click", () => {
    navBar.classList.toggle("active");
    button.classList.toggle("active");
});