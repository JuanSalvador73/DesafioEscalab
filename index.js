const buttonFilters = document.querySelectorAll(".textSelect");
const root = document.getElementById("root");

const templateCard = ()=>{

    console.log(item);

    const {name, flags, capital, population, continents} = item;

    return`
    <div class="card1">
        <h1 class="card1_text">${name.common}</h1>
        <div class="card1_info">
            <img src="${flags.png}" alt="flag" class="card1_img"/>
            <h1 class="card1_title">${capital[0]}</h1>
            <p class="card1_subtitle">${population}</p>
            <p class="card1_subtitle">${continents[0]}</p>
        </div>
    </div>
`;
}

const fetchByRegion = async ()=>{
    const res = await fetch(`https://restcountries.com/v3.1/region$(e)`);
    const data = await res.json();

    return data;
    console.log(data);

};

const makeSearch = async(region)=>{
    const data = await fetchByRegion(region);

    const templates = data.map((element) => templateCard(element));
        root.innerHTML = templates.join("");

    
    console.log(templates);
}

buttonFilters.forEach((element)=> {
    element.addEventListener("click", (e)=>
        fetchByRegion(e.target.textContent)
        );
});

//min 3:25 se ven estilos, 14:06, 

// const res = await fetch(`https://restcountries.com/v3.1/region$(e)`);