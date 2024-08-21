import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  console.log("Fetch data of cities");
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
    const response=await fetch(`${config.backendEndpoint}/cities`);
    if(!response.ok){
      throw new Error(`Http Error! Status: ${response.status}`);
    }
    const cities=await response.json();
    return cities;
  }catch(error){
    console.log("Error fetching cities:",error);
    return null;
  }

}


//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  const cityCard= document.createElement("div");
  cityCard.className="col-6 col-lg-3 mb-4";
  cityCard.innerHTML=   `
  <a href="pages/adventures/?city=${id}" id="${id}">
  <div class="tile">
   <img src="${image}" class="img-responsive" alt="${city}">

   <div class="tile-text text-center">
   <h5 class="card-title">"${city}"</h5>
   <p class="card-text">${description}</p>
   </div> 
   </div>
   </a>
  `;
  const container=document.getElementById("data");
  container.appendChild(cityCard);

}

export { init, fetchCities, addCityToDOM };
