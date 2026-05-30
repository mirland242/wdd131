document.getElementById('updatedDate').innerHTML= new Date().getFullYear();
document.getElementById('lastModified').textContent= document.lastModified;

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    );
}

const temperature = 10;
const windSpeed = 5;

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windchill").textContent =
        calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
} else {
    document.getElementById("windchill").textContent = "N/A";
}

