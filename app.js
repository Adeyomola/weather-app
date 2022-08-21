// currentData DOM
const state = document.getElementById("location");
const currentTemperature = document.getElementById("currentTemperature");
const feelsLike = document.getElementById("feelsLike");
const summary = document.getElementById("summary");
const highAndLow = document.getElementById("highAndLow");
// otherData DOM
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const visibility = document.getElementById("visibility");
// nextFiveDays DOM
const tomorrow = document.getElementById("tomorrow");
const tomorrowAverage = document.getElementById("tomorrowAverage");
const tomorrowHigh = document.getElementById("tomorrowHigh");
const tomorrowLow = document.getElementById("tomorrowLow");
const tomorrowDescription = document.getElementById("tomorrowDescription");
const tomorrowHumidity = document.getElementById("tomorrowHumidity");
const tomorrowPressure = document.getElementById("tomorrowPressure");

const day2 = document.getElementById("day2");
const day2Average = document.getElementById("day2Average");
const day2High = document.getElementById("day2High");
const day2Low = document.getElementById("day2Low");
const day2Description = document.getElementById("day2Description");
const day2Humidity = document.getElementById("day2Humidity");
const day2Pressure = document.getElementById("day2Pressure");

const day3 = document.getElementById("day3");
const day3Average = document.getElementById("day3Average");
const day3High = document.getElementById("day3High");
const day3Low = document.getElementById("day3Low");
const day3Description = document.getElementById("day3Description");
const day3Humidity = document.getElementById("day3Humidity");
const day3Pressure = document.getElementById("day3Pressure");

const day4 = document.getElementById("day4");
const day4Average = document.getElementById("day4Average");
const day4High = document.getElementById("day4High");
const day4Low = document.getElementById("day4Low");
const day4Description = document.getElementById("day4Description");
const day4Humidity = document.getElementById("day4Humidity");
const day4Pressure = document.getElementById("day4Pressure");

const day5 = document.getElementById("day5");
const day5Average = document.getElementById("day5Average");
const day5High = document.getElementById("day5High");
const day5Low = document.getElementById("day5Low");
const day5Description = document.getElementById("day5Description");
const day5Humidity = document.getElementById("day5Humidity");
const day5Pressure = document.getElementById("day5Pressure");

// variables for fetch
let weather = [];
let locationData;
let currentTemperatureData;
let feelsLikeData;
let summaryData;
let high;
let low;
let pressureData;
let humidityData;
let windData;
let visibilityData;
let newWeatherData;
let Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?lat=6.4550575&lon=3.3941795&appid=" +
    token
)
  .then((res) => {
    return res.json();
  })
  .then((weatherData) => {
    let main = weatherData.list[0].main;
    // currentData
    summaryData = weatherData.list[0].weather[0].description;
    locationData = weatherData.city.name;
    currentTemperatureData = (main.temp - 273.15).toFixed();
    feelsLikeData = (main.feels_like - 273.15).toFixed();
    high = (main.temp_max - 273.15).toFixed(1);
    low = (main.temp_min - 273.15).toFixed(1);
    // otherData
    pressureData = main.pressure;
    humidityData = main.humidity;
    windData = (weatherData.list[0].wind.speed * 3.6).toFixed();
    visibilityData = weatherData.list[0].visibility / 1000;
    // nextFiveDays
    for (obj of weatherData.list) {
      newWeatherData = weatherData.list.filter((obj) => {
        let date = new Date(obj.dt * 1000);
        let today = Date.now();
        today = new Date(today);
        if (date.getDay() !== today.getDay()) {
          return obj;
        }
      });
    }
    insertData();
  })
  .catch((err) => {
    console.error(err);
  });

function insertData() {
  // currentData
  state.innerText = locationData;
  currentTemperature.innerText = `${currentTemperatureData}°`;
  feelsLike.innerText = `Feels Like: ${feelsLikeData}°`;
  summaryData = summaryData[0].toUpperCase() + summaryData.slice(1);
  summary.innerText = summaryData;
  highAndLow.innerText = `H: ${high}° L: ${low}°`;
  //   otherData
  pressure.innerText = `Pressure: ${pressureData} hPa`;
  humidity.innerText = `Humidity: ${humidityData}%`;
  wind.innerText = `Wind Speed: ${windData} km/h`;
  visibility.innerText = `Visibility: ${visibilityData} km`;

  //   nextFiveDays
  tomorrow.innerText = `${
    Days[new Date(newWeatherData[0].dt * 1000).getDay()]
  }`;
  tomorrowAverage.innerText = `${(
    newWeatherData[0].main.temp - 273.15
  ).toFixed()}°`;
  //   tomorrowHigh.innerText = `H: ${(
  //     newWeatherData[0].main.temp_max - 273.15
  //   ).toFixed()}°`;
  //   tomorrowLow.innerText = `L: ${(
  //     newWeatherData[0].main.temp_min - 273.15
  //   ).toFixed()}°`;
  tomorrowHumidity.innerText = `${newWeatherData[0].main.humidity}%`;
  tomorrowDescription.innerText = `${
    newWeatherData[0].weather[0].description[0].toUpperCase() +
    newWeatherData[0].weather[0].description.slice(1)
  }`;
  tomorrowPressure.innerText = `${newWeatherData[0].main.pressure} hPa`;

  day2.innerText = `${Days[new Date(newWeatherData[8].dt * 1000).getDay()]}`;
  day2Average.innerText = `${(
    newWeatherData[8].main.temp - 273.15
  ).toFixed()}°`;
  //   day2High.innerText = `H: ${(
  //     newWeatherData[8].main.temp_max - 273.15
  //   ).toFixed()}°`;
  //   day2Low.innerText = `L: ${(
  //     newWeatherData[8].main.temp_min - 273.15
  //   ).toFixed()}°`;
  day2Humidity.innerText = `${newWeatherData[8].main.humidity}%`;
  day2Description.innerText = `${
    newWeatherData[8].weather[0].description[0].toUpperCase() +
    newWeatherData[8].weather[0].description.slice(1)
  }`;
  day2Pressure.innerText = `${newWeatherData[8].main.pressure} hPa`;

  day3.innerText = `${Days[new Date(newWeatherData[16].dt * 1000).getDay()]}`;
  day3Average.innerText = `${(
    newWeatherData[16].main.temp - 273.15
  ).toFixed()}°`;
  //   day3High.innerText = `H: ${(
  //     newWeatherData[16].main.temp_max - 273.15
  //   ).toFixed()}°`;
  //   day3Low.innerText = `L: ${(
  //     newWeatherData[16].main.temp_min - 273.15
  //   ).toFixed()}°`;
  day3Humidity.innerText = `${newWeatherData[16].main.humidity}%`;
  day3Description.innerText = `${
    newWeatherData[16].weather[0].description[0].toUpperCase() +
    newWeatherData[16].weather[0].description.slice(1)
  }`;
  day3Pressure.innerText = `${newWeatherData[16].main.pressure} hPa`;

  day4.innerText = `${Days[new Date(newWeatherData[24].dt * 1000).getDay()]}`;
  day4Average.innerText = `${(
    newWeatherData[24].main.temp - 273.15
  ).toFixed()}°`;
  //   day4High.innerText = `H: ${(
  //     newWeatherData[24].main.temp_max - 273.15
  //   ).toFixed()}°`;
  //   day4Low.innerText = `L: ${(
  //     newWeatherData[24].main.temp_min - 273.15
  //   ).toFixed()}°`;
  day4Humidity.innerText = `${newWeatherData[24].main.humidity}%`;
  day4Description.innerText = `${
    newWeatherData[24].weather[0].description[0].toUpperCase() +
    newWeatherData[24].weather[0].description.slice(1)
  }`;
  day4Pressure.innerText = `${newWeatherData[24].main.pressure} hPa`;

  day5.innerText = `${Days[new Date(newWeatherData[32].dt * 1000).getDay()]}`;
  day5Average.innerText = `${(
    newWeatherData[32].main.temp - 273.15
  ).toFixed()}°`;
  //   day5High.innerText = `H: ${(
  //     newWeatherData[32].main.temp_max - 273.15
  //   ).toFixed()}°`;
  //   day5Low.innerText = `L: ${(
  //     newWeatherData[32].main.temp_min - 273.15
  //   ).toFixed()}°`;
  day5Humidity.innerText = `${newWeatherData[32].main.humidity}%`;
  day5Description.innerText = `${
    newWeatherData[32].weather[0].description[0].toUpperCase() +
    newWeatherData[32].weather[0].description.slice(1)
  }`;
  day5Pressure.innerText = `${newWeatherData[32].main.pressure} hPa`;
}
