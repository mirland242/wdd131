button = document.querySelector(".burger");
navBar = document.querySelector(".navigation");

button.addEventListener("click", () => {
    navBar.classList.toggle("active");
    button.classList.toggle("active");
});


//scrolling event

const navigationBar = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (scrollY > 500) {
    navigationBar.style.top = "-150px"; // hide
    console.log("Hello bro!");
  } 
//   else {
//     scroll.style.top = "0";      // show
//    }
    else if(scrollY < 500){
      navigationBar.style.top="0";
    }

});
