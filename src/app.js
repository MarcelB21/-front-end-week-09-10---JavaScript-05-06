console.log('Hallo daar!');

//Stap 1. Installeer en importeer Axios;
import axios from 'axios'
// Stap 3. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed.
async function getCountries(){
    const countryList = document.getElementById("country-list");
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        const countries = result.data;
        // console.log(result.data);

        countries.sort((a, b)=>{
            return a.population - b.population;
        });
        result.data.map((country) => {
            const countryItem = document.createElement("li");
            countryItem.innerHTML = `
            <img src="${country.flag}" alt="vlaggetje van landje" class="flag"/>
            <p class="${regionName(country.region)}">${country.name}</p>
            <p>Has a population of ${country.population} people</p>
            `;
            countryList.appendChild(countryItem)
        })
    } catch(e) {
        console.error(e);
    }
}

getCountries();
function regionName(arrRegion) {

    if (arrRegion === "Africa") {
        return (arrRegion === "Africa");
    } else if (arrRegion === "Asia") {
        return "Asia";
    } else if (arrRegion === "Europe") {
        return "Europe";
    } else if (arrRegion === "Oceania") {
        return  "Oceania";
    } else {
        return "Americas";
    }
}
