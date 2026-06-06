let date = new Date(document.lastModified);
document.getElementById('updateDate').textContent = `©${date.getFullYear()} Mirland Dorval Accra-Ghana`;
document.getElementById('lastModified').textContent = `lastModified: ${date.toLocaleString()}`;

const navigation = document.querySelector('.navigation');
const burger = document.querySelector('#burger');
burger.addEventListener('click', () => {
    navigation.classList.toggle('show');
    burger.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"

  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"

  },
  // Add more temple objects here...
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
  }
];

createTempleCards(temples);
function createTempleCards(filteredTemples) {
  document.querySelector('.captions').innerHTML = '';
    filteredTemples.forEach(temple => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedicated = document.createElement('p');
        let area = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = temple.templeName;
        location.innerHTML = `<span>Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span>Area:</span> ${temple.area} sq ft`;
        image.setAttribute('src', temple.imageUrl);
        image.alt = `${temple.templeName} Temple`;
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "400");
        image.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);
        document.querySelector('.captions').appendChild(card);
    });
}

// const nonUtaLink = document.querySelector('.nonUta');
// nonUtaLink.addEventListener('click', () => {
//     createTempleCards(temples.filter(temple => !temple.location.includes('Utah')));
// });

const homeLink = document.querySelector('.home');
const oldLink = document.querySelector('.old');
const newLink = document.querySelector('.new');
const largeLink = document.querySelector('.large');
const smallLink = document.querySelector('.small');

// HOME
homeLink.addEventListener('click', () => {
    createTempleCards(temples);
});

// OLD - before 1900
oldLink.addEventListener('click', () => {
    const oldTemples = temples.filter(temple =>
        new Date(temple.dedicated).getFullYear() < 1900
    );

    createTempleCards(oldTemples);
});

// NEW - after 2000
newLink.addEventListener('click', () => {
    const newTemples = temples.filter(temple =>
        new Date(temple.dedicated).getFullYear() > 2000
    );

    createTempleCards(newTemples);
});

// LARGE - over 90,000 sq ft
largeLink.addEventListener('click', () => {
    const largeTemples = temples.filter(temple =>
        temple.area > 90000
    );

    createTempleCards(largeTemples);
});

// SMALL - under 10,000 sq ft
smallLink.addEventListener('click', () => {
    const smallTemples = temples.filter(temple =>
        temple.area < 10000
    );

    createTempleCards(smallTemples);
});

