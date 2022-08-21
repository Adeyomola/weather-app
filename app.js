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
const tomorrowTemp1 = document.getElementById("tomorrowTemp1");
const tomorrowTemp2 = document.getElementById("tomorrowTemp2");
const tomorrowTemp3 = document.getElementById("tomorrowTemp3");
const tomorrowTemp4 = document.getElementById("tomorrowTemp4");
const tomorrowTemp5 = document.getElementById("tomorrowTemp5");
const tomorrowTemp6 = document.getElementById("tomorrowTemp6");
const tomorrowTemp7 = document.getElementById("tomorrowTemp7");
const tomorrowTemp8 = document.getElementById("tomorrowTemp8");
const tomorrowDescription = document.getElementById("tomorrowDescription");

const day2 = document.getElementById("day2");
const day2Temp1 = document.getElementById("day2Temp1");
const day2Temp2 = document.getElementById("day2Temp2");
const day2Temp3 = document.getElementById("day2Temp3");
const day2Temp4 = document.getElementById("day2Temp4");
const day2Temp5 = document.getElementById("day2Temp5");
const day2Temp6 = document.getElementById("day2Temp6");
const day2Temp7 = document.getElementById("day2Temp7");
const day2Temp8 = document.getElementById("day2Temp8");
const day2Description = document.getElementById("day2Description");

const day3 = document.getElementById("day3");
const day3Temp1 = document.getElementById("day3Temp1");
const day3Temp2 = document.getElementById("day3Temp2");
const day3Temp3 = document.getElementById("day3Temp3");
const day3Temp4 = document.getElementById("day3Temp4");
const day3Temp5 = document.getElementById("day3Temp5");
const day3Temp6 = document.getElementById("day3Temp6");
const day3Temp7 = document.getElementById("day3Temp7");
const day3Temp8 = document.getElementById("day3Temp8");
const day3Description = document.getElementById("day3Description");

const day4 = document.getElementById("day4");
const day4Temp1 = document.getElementById("day4Temp1");
const day4Temp2 = document.getElementById("day4Temp2");
const day4Temp3 = document.getElementById("day4Temp3");
const day4Temp4 = document.getElementById("day4Temp4");
const day4Temp5 = document.getElementById("day4Temp5");
const day4Temp6 = document.getElementById("day4Temp6");
const day4Temp7 = document.getElementById("day4Temp7");
const day4Temp8 = document.getElementById("day4Temp8");
const day4Description = document.getElementById("day4Description");

const day5 = document.getElementById("day5");
const day5Temp1 = document.getElementById("day5Temp1");
const day5Temp2 = document.getElementById("day5Temp2");
const day5Temp3 = document.getElementById("day5Temp3");
const day5Temp4 = document.getElementById("day5Temp4");
const day5Temp5 = document.getElementById("day5Temp5");
const day5Temp6 = document.getElementById("day5Temp6");
const day5Temp7 = document.getElementById("day5Temp7");
const day5Temp8 = document.getElementById("day5Temp8");
const day5Description = document.getElementById("day5Description");

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
  "https://api.openweathermap.org/data/2.5/forecast?lat=6.4550575&lon=3.3941795&appid=bd2f3bc95650a4232c123d98f3e5963a"
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
  tomorrowTemp1.innerText = `${(
    newWeatherData[0].main.temp - 273.15
  ).toFixed()}°`;
  tomorrowTemp2.innerText = `${(
    newWeatherData[1].main.temp - 273.15
  ).toFixed()}°`;
  tomorrowTemp3.innerText = `${(
    newWeatherData[2].main.temp - 273.15
  ).toFixed()}°`;
  tomorrowTemp4.innerText = `${(
    newWeatherData[3].main.temp - 273.15
  ).toFixed()}°`;
  tomorrowTemp5.innerText = `${(
    newWeatherData[4].main.temp - 273.15
  ).toFixed()}°`;
  tomorrowTemp6.innerText = `${(
    newWeatherData[5].main.temp - 273.15
  ).toFixed()}°`;
  tomorrowTemp7.innerText = `${(
    newWeatherData[6].main.temp - 273.15
  ).toFixed()}°`;
  tomorrowTemp8.innerText = `${(
    newWeatherData[7].main.temp - 273.15
  ).toFixed()}°`;
  tomorrowDescription.innerText = `${
    newWeatherData[0].weather[0].description[0].toUpperCase() +
    newWeatherData[0].weather[0].description.slice(1)
  }`;

  day2.innerText = `${Days[new Date(newWeatherData[8].dt * 1000).getDay()]}`;
  day2Temp1.innerText = `${(newWeatherData[8].main.temp - 273.15).toFixed()}°`;
  day2Temp2.innerText = `${(newWeatherData[9].main.temp - 273.15).toFixed()}°`;
  day2Temp3.innerText = `${(newWeatherData[10].main.temp - 273.15).toFixed()}°`;
  day2Temp4.innerText = `${(newWeatherData[11].main.temp - 273.15).toFixed()}°`;
  day2Temp5.innerText = `${(newWeatherData[12].main.temp - 273.15).toFixed()}°`;
  day2Temp6.innerText = `${(newWeatherData[13].main.temp - 273.15).toFixed()}°`;
  day2Temp7.innerText = `${(newWeatherData[14].main.temp - 273.15).toFixed()}°`;
  day2Temp8.innerText = `${(newWeatherData[15].main.temp - 273.15).toFixed()}°`;
  day2Description.innerText = `${
    newWeatherData[8].weather[0].description[0].toUpperCase() +
    newWeatherData[8].weather[0].description.slice(1)
  }`;

  day3.innerText = `${Days[new Date(newWeatherData[16].dt * 1000).getDay()]}`;
  day3Temp1.innerText = `${(newWeatherData[16].main.temp - 273.15).toFixed()}°`;
  day3Temp2.innerText = `${(newWeatherData[17].main.temp - 273.15).toFixed()}°`;
  day3Temp3.innerText = `${(newWeatherData[18].main.temp - 273.15).toFixed()}°`;
  day3Temp4.innerText = `${(newWeatherData[19].main.temp - 273.15).toFixed()}°`;
  day3Temp5.innerText = `${(newWeatherData[20].main.temp - 273.15).toFixed()}°`;
  day3Temp6.innerText = `${(newWeatherData[21].main.temp - 273.15).toFixed()}°`;
  day3Temp7.innerText = `${(newWeatherData[22].main.temp - 273.15).toFixed()}°`;
  day3Temp8.innerText = `${(newWeatherData[23].main.temp - 273.15).toFixed()}°`;
  day3Description.innerText = `${
    newWeatherData[16].weather[0].description[0].toUpperCase() +
    newWeatherData[16].weather[0].description.slice(1)
  }`;

  day4.innerText = `${Days[new Date(newWeatherData[24].dt * 1000).getDay()]}`;
  day4Temp1.innerText = `${(newWeatherData[24].main.temp - 273.15).toFixed()}°`;
  day4Temp2.innerText = `${(newWeatherData[25].main.temp - 273.15).toFixed()}°`;
  day4Temp3.innerText = `${(newWeatherData[26].main.temp - 273.15).toFixed()}°`;
  day4Temp4.innerText = `${(newWeatherData[27].main.temp - 273.15).toFixed()}°`;
  day4Temp5.innerText = `${(newWeatherData[28].main.temp - 273.15).toFixed()}°`;
  day4Temp6.innerText = `${(newWeatherData[29].main.temp - 273.15).toFixed()}°`;
  day4Temp7.innerText = `${(newWeatherData[30].main.temp - 273.15).toFixed()}°`;
  day4Temp8.innerText = `${(newWeatherData[31].main.temp - 273.15).toFixed()}°`;
  day4Description.innerText = `${
    newWeatherData[24].weather[0].description[0].toUpperCase() +
    newWeatherData[24].weather[0].description.slice(1)
  }`;

  day5.innerText = `${Days[new Date(newWeatherData[32].dt * 1000).getDay()]}`;
  day5Temp1.innerText = `${(newWeatherData[32].main.temp - 273.15).toFixed()}°`;
  day5Temp2.innerText = `${(newWeatherData[33].main.temp - 273.15).toFixed()}°`;
  day5Temp3.innerText = `${(newWeatherData[34].main.temp - 273.15).toFixed()}°`;
  day5Temp4.innerText = `${(newWeatherData[35].main.temp - 273.15).toFixed()}°`;
  day5Temp5.innerText = `${(newWeatherData[36].main.temp - 273.15).toFixed()}°`;
  day5Temp6.innerText = `${(newWeatherData[37].main.temp - 273.15).toFixed()}°`;
  day5Description.innerText = `${
    newWeatherData[32].weather[0].description[0].toUpperCase() +
    newWeatherData[32].weather[0].description.slice(1)
  }`;
}
