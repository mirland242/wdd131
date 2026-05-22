document.getElementById('updateDate').innerHTML= new Date().getFullYear();
document.getElementById('lastModified').textContent= document.lastModified;

const menu = document.querySelector('#burger');
const nav = document.querySelector('.navigation');

menu.addEventListener('click', () => {

    nav.classList.toggle('show');
    menu.classList.toggle('show');


});