const API_KEY = "930b56c7e1ce4dcd99f153915260609";
const idioma = "es";

const init = () => {
  const dat = document.getElementById("dat");
  dat.innerHTML = `
    <p class="text_dat">Cargando°c</p>
    <p class="text_dat">Ubicacion Actual</p>
  `;
  const box_text = document.getElementById("box_text");
  box_text.innerHTML = `
    <p class="caracter_text">------</p>
    <p class="caracter_text">------</p>
  `;
  const box_text_2 = document.getElementById("box_text_2");
  box_text_2.innerHTML = `
    <p class="caracter_text">------</p>
    <p class="caracter_text">------</p>
  `;
  const content_img= document.getElementById("content_img");
  content_img.innerHTML =`
    <img class="img_2" src="./assest/clima-ejemplo.webp" alt="" />
  `;
}

const postWeather = (data) => {
  const dat = document.getElementById("dat");
  dat.innerHTML = `
    <p class="text_dat">${data.current.temp_c}°c</p>
    <p class="text_dat">${data.location.name}</p>
  `;
  const typeTime = document.getElementById("typeTime");
  typeTime.innerHTML = `${data.current.condition.text}`;
  const box_text = document.getElementById("box_text");
  box_text.innerHTML = `
    <p class="caracter_text">${data.current.humidity}%</p>
    <p class="caracter_text">Humedad</p>
  `;
  const box_text_2 = document.getElementById("box_text_2");
  box_text_2.innerHTML = `
    <p class="caracter_text">${data.current.wind_kph} km/h</p>
    <p class="caracter_text">Viento</p>
  `;
  const content_img= document.getElementById("content_img");
  content_img.innerHTML =`
    <img class="img_2" src="https:${data.current.condition.icon}"  alt="" />
  `;
};

const getWeather = async () => {
  const text = document.getElementById("search").value;
  const ciudad = text.toLowerCase();
  const API = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${API_KEY}`;

  try {
    const response = await fetch(API);
    const data = await response.json();

    postWeather(data);
    console.log(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};


const app = () => {
  init();
  const searchButton = document.getElementById("form");
  searchButton.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeather();
  });
}

app();