//Getting our elements

const radiusResult= document.querySelector('#radius');

const areaResult = document.getElementById('area');

let area = 0;
const PI = 3.14159;

const radius = 10;

area = PI*radius*radius;

radiusResult.textContent = radius;
areaResult.textContent = area;
console.log("the answer is ", {area});
//Rassignment of our variable

radius = 20;
area = PI*radius^2;

radiusResult = radius;
areaResult = area;