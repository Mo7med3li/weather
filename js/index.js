let sectionLinks = document.querySelectorAll("nav ul a");
let searchInput = document.querySelector("#location");
let weatherContainer = document.querySelector(".weatherContainer");

for (let i = 0; i < sectionLinks.length; i++) {
  sectionLinks[i].addEventListener("click", function (e) {
    let activelink = document.querySelector(".active");
    activelink.classList.remove("active");
    e.target.classList.add("active");
  });
}

async function getWeather(location) {
  let respons = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=8d7915c1ecf14866994163714240510&q=${location}&days=3&aqi=yes&alerts=no`
  );

  let data = await respons.json();
  displayWeather(data);
}

searchInput.addEventListener("input", function () {
  getWeather(searchInput.value);
});
function displayWeather(arr) {
  const apiDate = arr.forecast.forecastday[0].date;
  const date = new Date(apiDate);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayName = days[date.getDay()];
  weatherContainer.innerHTML = ` <div class="col-md-4 backdround px-0 shadow">
              <div class="today-date d-flex justify-content-between py-2 px-3">
                <div class="day">${dayName}</div>
                <div class="date">${arr.forecast.forecastday[0].date
                  .split("")
                  .splice(5, 8)
                  .join("")}</div>
              </div>
              <div class="inner px-3 py-4">
                <div class="location h2">${arr.location.name}</div>
                <div class="degree fw-bolder">${
                  arr.current.temp_c
                }<sup>o</sup>C</div>
                <div class="icon"><img src="${
                  arr.current.condition.icon
                }" alt="" /></div>
                <div class="custom py-3">${arr.current.condition.text}</div>
                <span class="px-2"
                  ><img src="assets/imgs/icon-umberella@2x.png" alt="" />
                  20%</span
                >
                <span class="px-2"
                  ><img src="assets/imgs/icon-wind@2x.png" alt="" /> ${
                    arr.current.wind_mph
                  }m/h</span
                >
                <span class="px-2"
                  ><img src="assets/imgs/icon-compass@2x.png" alt="" />
                  ${arr.current.wind_dir}</span
                >
              </div>
            </div>
            <div class="col-md-4 text-center shadow px-0">
              <div class="next-day py-2">${arr.forecast.forecastday[1].date
                .split("")
                .splice(5, 8)
                .join("")}</div>
              <div
                class="inner d-flex align-items-center justify-content-center h-75"
              >
                <div class="next-day-weather pt-5 mt-3 pb-3">
                  <img src="${
                    arr.forecast.forecastday[1].day.condition.icon
                  }" class="py-2" alt="" />
                  <div class="great-degree h3">${
                    arr.forecast.forecastday[1].day.maxtemp_c
                  }<sup>o</sup>C</div>
                  <div class="small-degree small">${
                    arr.forecast.forecastday[1].day.mintemp_c
                  }</div>
                  <div class="custom py-3 h5">${
                    arr.forecast.forecastday[1].day.condition.text
                  }</div>
                </div>
              </div>
            </div>
            <div class="col-md-4 backdround text-center shadow px-0">
              <div class="next-day py-2">${arr.forecast.forecastday[2].date
                .split("")
                .splice(5, 8)
                .join("")}</div>
              <div
                class="inner d-flex align-items-center justify-content-center h-75"
              >
                <div class="next-day-weather pt-5 mt-3 pb-3">
                  <img src="${
                    arr.forecast.forecastday[2].day.condition.icon
                  }" class="py-2" alt="" />
                  <div class="great-degree h3">${
                    arr.forecast.forecastday[2].day.maxtemp_c
                  }<sup>o</sup>C </div>
                  <div class="small-degree small">${
                    arr.forecast.forecastday[2].day.mintemp_c
                  }</div>
                  <div class="custom py-3 h5">${
                    arr.forecast.forecastday[2].day.condition.text
                  }</div>
                </div>
              </div>
            </div>`;
}

async function Weather() {
  let respons = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=8d7915c1ecf14866994163714240510&q=cairo&days=3&aqi=yes&alerts=no`
  );
  let data = await respons.json();
  displayWeather(data);
}
Weather();
