
// document.getElementById('updateDate').innerHTML= new Date().getFullYear();
// document.getElementById('lastModified').textContent= document.lastModified;
document.getElementById('updatedDate').innerHTML= new Date().getFullYear();
document.getElementById('lastModified').textContent= document.lastModified;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

/*Dynamic product selection*/

const productSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    productSelect.appendChild(option);
});


const displayCount = document.getElementById("reviewcount");

let count = Number(localStorage.getItem("reviewcount"));

if (count === 0) {
    displayCount.textContent = "This is your first load";
} else {
    displayCount.textContent = `You have visited ${count} times`;
}

// Increase count for next visit
count++;

// Save updated count
localStorage.setItem("reviewcount", count);