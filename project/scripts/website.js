button = document.querySelector(".burger");
navBar = document.querySelector(".navigation");

button.addEventListener("click", () => {
    navBar.classList.toggle("active");
    button.classList.toggle("active");
});


// const fixedNave = document.querySelector('.navigation');
// window.addEventListener('scroll', ()=>{
//     if(scrollY>200){
//         fixedNave.style.top="-150px";
        
//     }
//      if(scrollY<40){
//         fixedNave.style.top="0";
        
//     }

// })

//Scroll Evennt------------//
// const scroll= document.querySelector('.header');
// window.addEventListener('scroll',()=>{
//     if(scrollY>100){
//         scroll.style.top="-150px";       /*HIDE*/
//         // alert("it's working!");
//     } 
   
//     /*
//     else if(scrollY<40){
//         scroll.style.top="0";
//     }*/
//     else if(scrollY<10){                /*SHOW*/
//         scroll.style.top="0";
//         // alert("it's working!");

//     }
    
// })

const scroll = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (scrollY > 200) {
    scroll.style.top = "-150px"; // hide
    console.log("Hello bro!");
  } 
//   else {
//     scroll.style.top = "0";      // show
//   }
    else if(scrollY < 100){
       scroll.style.top="0";
    }

});
