async function searchAlgoliaPlaces(event) {
    let response = "";
    const url = 'https://places-dsn.algolia.net/1/places/query';
    const responseJson = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ query: event.currentTarget.value })     //transforme en chaine de caractère
    })
        .catch((error) => {
            console.log(`Voici mon erreur : ${error}`);
        });
    let villes = [];
    liste.innerHTML = '';
    if (responseJson.status === 200) {
        response = await responseJson.json();
    }
    response.hits.forEach(arrondissement => {
        let tableau = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        let ville = arrondissement.locale_names.default[0]
        for (let i = 0; i < ville.length; i++) {
            if (tableau.includes(parseInt(ville[i]))) {
                ville = ville.split(ville[i])[0];
                if (ville[ville.length - 1] === " ") {
                    ville = ville.replace(ville[ville.length - 1], '');
                }
            }
            if (ville.substr(0, 6) === "(Old) ") {
                ville = ville.replace("(Old) ", '');
            }
            if (ville === "Y") {
                ville = '';
            }
        }
        if (!villes.includes(ville) && arrondissement.is_city) {
            villes.push(ville);
            liste.insertAdjacentHTML("beforeend",
                `
                    <option value="${ville}">
                `);
        }
    });
}