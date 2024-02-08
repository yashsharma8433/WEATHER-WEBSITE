const apiKey = '2722269ebebc0d8436d347482f479d28';
const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = ${apiUrl}?q=${location}&appid=${apiKey}&units=metric;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = ${Math.round(data.main.temp)}°C;
      descriptionElement.textContent = data.weather[0].description;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}