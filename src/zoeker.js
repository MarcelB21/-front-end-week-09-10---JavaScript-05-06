import axios from 'axios'

// 1. installeer en importeer axios
// ---- zoek in de API documentatie het juiste endpoint
// 2. asynchrone functie schrijven
// 3. try - catch blok
// 4. In het try blok gaan we ons GET-request maken met axios
// 5. Resultaat loggen
// 6. Probeer een console.log() met de naam van het land te maken
// 7. Probeer een console.log() met de populatie van het land

// 8. Maak een if/else statement voor valuta's per land

// DINGEN OP PAGINA WEERGEVEN STAPPENPLAN
// 1. 'anker'-element in het HTML-bestand plaatsen (met ID!)
// 2. sla de referentie naar dit element op in het JS-bestand
// 3. Gebruik .innerHTML om een stukje data op de pagina te laten zien

const searchForm = document.getElementById("searchField");
searchForm.addEventListener('submit',getInput);

function getInput(e){
    e.preventDefault()
    // console.log("test")
    const searchInput = document.getElementById("search");
    getCountries(searchInput.value);
    // console.log(searchInput.value);
}

async function getCountries(name) {
    const error = document.getElementById("errorMessage");
    error.innerHTML = "";
    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`)
        console.log(result)
        console.log(result.data[0].languages)
        const searchBar = document.getElementById('country-info1');

        if (result.data[0].languages.length === 1) {
            if (result.data[0].currencies.length === 2) {
                return searchBar.innerHTML = `<br>
                <img src="${result.data[0].flag}" alt="vlaggetje van landje" class="flag"/>
                <h1>${result.data[0].name}</h1>
                <p>The nativename is ${result.data[0].nativeName}</p>
                <p>capital is ${result.data[0].capital}</p>
                <p>they speak ${result.data[0].languages[0].name}</p>
                <p>population is ${result.data[0].population}</p>
                <p>${result.data[0].name} is situated in ${result.data[0].subregion}</p>
                <p>you can pay with ${result.data[0].currencies[0].name} and +${result.data[0].currencies[1].name}'s. </p>
                `
            } else {
                return searchBar.innerHTML = `<br>
                <img src="${result.data[0].flag}" alt="vlaggetje van landje" class="flag"/>
                <h1>${result.data[0].name}</h1>
                <p>The nativename is ${result.data[0].nativeName}</p>
                <p>capital is ${result.data[0].capital}</p>
                <p>they speak ${result.data[0].languages[0].name}</p>
                <p>population is ${result.data[0].population}</p>
                <p>${result.data[0].name} is situated in ${result.data[0].subregion}</p>
                <p>you can pay with ${result.data[0].currencies[0].name}'s</p>
                 `
        }
        } else if (result.data[0].languages.length === 2) {
            if (result.data[0].currencies.length === 2) {
                return searchBar.innerHTML = `<br>
                <img src="${result.data[0].flag}" alt="vlaggetje van landje" class="flag"/>
                <h1>${result.data[0].name}</h1>
                <p>The nativename is ${result.data[0].nativeName}</p>
                <p>capital is ${result.data[0].capital}</p>
                <p>they speak ${result.data[0].languages[0].name} and ${result.data[0].languages[1].name}</p>
                <p>population is ${result.data[0].population}</p>
                <p>${result.data[0].name} is situated in ${result.data[0].subregion}</p>
                <p>you can pay with ${result.data[0].currencies[0].name} and +${result.data[0].currencies[1].name}'s. </p>
                `
            } else {
                return searchBar.innerHTML = `<br>
                <img src="${result.data[0].flag}" alt="vlaggetje van landje" class="flag"/>
                <h1>${result.data[0].name}</h1>
                <p>The nativename is ${result.data[0].nativeName}</p>
                <p>capital is ${result.data[0].capital}</p>
                <p>they speak ${result.data[0].languages[0].name} and ${result.data[0].languages[1].name}</p>
                <p>population is ${result.data[0].population}</p>
                <p>${result.data[0].name} is situated in ${result.data[0].subregion}</p>
                <p>you can pay with ${result.data[0].currencies[0].name}'s</p>
                 `
            }
        } else if (result.data[0].languages.length === 3) {
            if (result.data[0].currencies.length === 2) {
                return searchBar.innerHTML = `<br>
                <img src="${result.data[0].flag}" alt="vlaggetje van landje" class="flag"/>
                <h1>${result.data[0].name}</h1>
                <p>The nativename is ${result.data[0].nativeName}</p>
                <p>capital is ${result.data[0].capital}</p>
                <p>they speak ${result.data[0].languages[0].name}, ${result.data[0].languages[1].name} and ${result.data[0].languages[2].name}</p>
                <p>population is ${result.data[0].population}</p>
                <p>${result.data[0].name} is situated in ${result.data[0].subregion}</p>
                <p>you can pay with ${result.data[0].currencies[0].name} and +${result.data[0].currencies[1].name}'s. </p>
                `
            } else {
                return searchBar.innerHTML = `<br>
                <img src="${result.data[0].flag}" alt="vlaggetje van landje" class="flag"/>
                <h1>${result.data[0].name}</h1>
                <p>The nativename is ${result.data[0].nativeName}</p>
                <p>capital is ${result.data[0].capital}</p>
                <p>they speak ${result.data[0].languages[0].name}, ${result.data[0].languages[1].name} and ${result.data[0].languages[2].name}</p>
                <p>population is ${result.data[0].population}</p>
                <p>${result.data[0].name} is situated in ${result.data[0].subregion}</p>
                <p>you can pay with ${result.data[0].currencies[0].name}'s</p>
                 `
            }
        }

        } catch(e){
        console.log(e)
        error.innerHTML = `
        <p>This is an unknown country, try again!</p>
        `
    }}




