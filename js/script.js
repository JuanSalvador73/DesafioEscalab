const url = 'https://restcountries.com/v3.1/all'; //URl de la API

const content = document.getElementById("root");

window.addEventListener("load", ()=> fetchData(url));

//Creamos función asíncrona
async function fetchData(url){
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);

    const view = data.map((item) => printView(item));

    content.innerHTML = view.join('');
}

// Funcion que imprima los datos en el section del html
function printView(item){
    return`
        <div class="card1">
            <h1 class="card1_text">${item.name.common}</h1>
            <div class="card1_info">
                <img src="${item.flags.png}" alt="flag" class="card1_img"/>
                <h1 class="card1_title">${item.capital}</h1>
                <p class="card1_subtitle">${item.population}</p>
                <p class="card1_subtitle">${item.continents}</p>
            </div>
        </div>
    `;
}