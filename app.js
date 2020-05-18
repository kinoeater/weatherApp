const getTemp = new GetTemperatures();
const ui = new UI();

eventListeners();

function eventListeners() {
  window.addEventListener("load", updateTempData);
}

function updateTempData() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const result = await getTemp.getWeather(lat, long);

      console.log(result);
      console.log(result.name);
      console.log(result.weather[0].icon);
      console.log(result.weather[0].description);
      ui.displayTemp(result.main.temp);
      ui.displayPlace(result.name);
      ui.displayDescription(result.weather[0].description);
      ui.displayIcon(result.weather[0].icon);
    });
  } else {
    alert(
      "Hey you should provide location permission, so I can provide weather info!"
    );
  }
}
