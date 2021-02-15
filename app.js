const lieu = document.querySelector("#map");
const temperature = document.querySelector("#temperature2");
const liste = document.querySelector("#liste");
let degres, latitude, longitude;

lieu.addEventListener("keyup", searchAlgoliaPlaces);
lieu.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        document.querySelector("#temperature").style.display = 'none';
        temperature.innerHTML = '';
        searchPlace(lieu.value);
        document.querySelector("#input").style.height = "none";
        document.querySelector("#input").style.display = "block";
        document.querySelector("#input").style.marginTop = "10%";
    }
});