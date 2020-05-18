class GetTemperatures {
  async getWeather(lat, long) {
    //  const proxy = "https://cors-anywhere.herokuapp.com/";
    const key = "1a72233bc9c9e5807ca8c196e0bf3f85";
    const response = await fetch(
      `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`
    );
    const data = await response.json();
    return data;
  }
}
