/*Getting the currenyt date */

document.getElementById("currentyear").textContent= new Date().getFullYear();

/*updating the last modified time*/

document.getElementById("lastModified").innerHTML= document.lastModified;

// const numbers= [1,3,2,0,]
// const getEachNumber = () => 
// numbers.forEach((number) => {
//     console.log(number);
// });

// getEachNumber();


const numbers = [1, 2, 3];

const a = numbers.map(n => n * 2);
const b = numbers.filter(n => n > 1);
const c = numbers.find(n => n > 1);
const d = numbers.forEach(n => console.log(n));

//results//
/*
a // [2, 4, 6]
b // [2, 3]
c // 2
d // undefined
*/

