let tableauTemperatures = [];
let tableauDates = [];

async function getWeather5Days(place) {
    tableauDates = [];
    tableauTemperatures = [];
    const url5Jours = `http://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=1ce64129da731d692308f766613a1037`;
    const response2 = await fetch(url5Jours);
    const temp5Jours = await response2.json();
    temp5Jours.list.forEach((index) => {
        let heure = index.dt_txt.split(" ");
        if (heure[1] === "12:00:00") {
            tableauTemperatures.push(Math.round(index.main.temp - 273.15));
            tableauDates.push(index.dt_txt);
        }
    });
    getGraph(tableauDates, tableauTemperatures);
}