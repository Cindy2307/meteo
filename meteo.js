async function searchPlace(place) {
    let response = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=bc019dfb0a96939e2188a2e2bbc49b29`;
    const responseJson = await fetch(url)
        .catch((error) => {
            console.log(`Erreur: ${error}`);
        });
    if (responseJson.status === 200) {
        response = await responseJson.json();
    }

    let description = '';
    const tableau = response.weather;
    degres = Math.round(response.main.temp - 273.15);
    tableau.forEach(propriete => {
        description = propriete.description;
    })
    temperature.insertAdjacentHTML('beforeEnd',
        `<p>A ${lieu.value}, il fait ${degres}°, ${description}</p>
            `);
    if (degres < 5) {
        document.querySelector("body").style.background = 'url("img/hiver.jpg")';
    } else if (degres >= 5 && degres < 15) {
        document.querySelector("body").style.background = 'url("img/printemps.jpg")';
    } else if (degres >= 15 && degres < 25) {
        document.querySelector("body").style.background = 'url("img/automne.jpg")';
    } else if (degres >= 25) {
        document.querySelector("body").style.background = 'url("img/ete.jpeg")';
    }
    document.querySelector("#temperature").style.display = 'block';
    document.querySelector("body").style.backgroundSize = 'cover';

    getMap(response.coord.lat, response.coord.lon);
    getWeather5Days(place);
}